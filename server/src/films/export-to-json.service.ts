import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Film } from '../entities/film';

import { paths, select, removeMeta, stringify, writeFile, isExist, copyFile } from '../scripts/export-to-json-function';

/** 映画情報の SQLite DB ファイルを JSON ファイルにエクスポートするサービス */
@Injectable()
export class ExportToJsonService {
  constructor(@InjectRepository(Film) private filmsRepository: Repository<Film>) { }
  
  /**
   * 映画情報の SQLite DB ファイルを JSON ファイルにエクスポートする
   * 
   * @return 出力した JSON ファイルのフルパス・エラー時はエラーオブジェクト
   */
  public async exportToJson(): Promise<{ savedJsonFilePaths?: Array<string>; error?: any; }> {
    try {
      // SQLite DB ファイルがなければエラーとする
      if(! await isExist(paths.sqliteDbFilePath)) throw new Error('SQLite DB File Does Not Exist');
      // JSON ファイルを配置するクライアント・ソースディレクトリがなければエラーとする
      const isExistClientSrc  = await isExist(paths.srcJsonDirectoryPath);
      const isExistClientDist = await isExist(paths.distJsonDirectoryPath);
      if(!isExistClientSrc && !isExistClientDist) throw new Error('Client Src And Client Dist Directory Are Not Exist');
      
      let films = await select(this.filmsRepository);
      films = removeMeta(films);
      const stringified = stringify(films);
      
      const savedJsonFilePaths = [];
      if(isExistClientSrc) {
        await writeFile(paths.srcJsonFilePath, stringified);
        savedJsonFilePaths.push(paths.srcJsonFilePath);
        // クライアント・ビルドディレクトリが存在すれば JSON ファイルをコピーする
        if(isExistClientDist) {
          await copyFile(paths.srcJsonFilePath, paths.distJsonFilePath);
          savedJsonFilePaths.push(paths.distJsonFilePath);
        }
      }
      else {
        await writeFile(paths.distJsonFilePath, stringified);
        savedJsonFilePaths.push(paths.distJsonFilePath);
      }
      
      return { savedJsonFilePaths };
    }
    catch(error) {
      console.error('Export To JSON : Error :', error);
      return { error };
    }
  }
}

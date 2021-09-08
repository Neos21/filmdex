import { createConnection, getRepository } from 'typeorm';

import { Film  } from '../entities/film';
import { Cast  } from '../entities/cast';
import { Staff } from '../entities/staff';
import { Tag   } from '../entities/tag';

import { paths, select, removeMeta, stringify, writeFile, isExist, copyFile } from './export-to-json-function';

/*!
 * 映画情報の SQLite DB ファイルを JSON ファイルにエクスポートするスクリプト
 * 
 * `$ npm run ts-node ./src/scripts/export-to-json.ts` で実行する
 */
(async () => {
  console.log('Export To JSON : Started');
  try {
    // SQLite DB ファイルがなければエラーとする
    if(! await isExist(paths.sqliteDbFilePath)) throw new Error('SQLite DB File Does Not Exist');
    // JSON ファイルを配置するクライアント・ソースディレクトリがなければエラーとする
    const isExistClientSrc  = await isExist(paths.srcJsonDirectoryPath);
    const isExistClientDist = await isExist(paths.distJsonDirectoryPath);
    if(!isExistClientSrc && !isExistClientDist) throw new Error('Client Src And Client Dist Directory Are Not Exist');
    
    await createConnection({
      type       : 'sqlite',
      database   : paths.sqliteDbFilePath,
      entities   : [Film, Cast, Staff, Tag],
      synchronize: false  // DB 同期しない
    });
    console.log('  Connected');
    
    const filmsRepository = getRepository(Film);
    let films = await select(filmsRepository);
    console.log('  Selected All Films With Casts, Staffs, Tags');
    
    films = removeMeta(films);
    console.log('  Removed Meta Properties');
    
    const stringified = stringify(films);
    if(isExistClientSrc) {
      await writeFile(paths.srcJsonFilePath, stringified);
      if(isExistClientDist) {
        console.log('  JSON File Saved To Client Src');
        // クライアント・ビルドディレクトリが存在すれば JSON ファイルをコピーする
        await copyFile(paths.srcJsonFilePath, paths.distJsonFilePath);
        console.log('  Copied JSON File To Client Dist');
      }
      else {
        console.log('  JSON File Saved To Client Src Only');
      }
    }
    else {
      await writeFile(paths.distJsonFilePath, stringified);
      console.log('  JSON File Saved To Client Dist Only');
    }
  }
  catch(error) {
    console.error('Error :');
    console.error(error);
    console.error('Error ----------');
  }
  finally {
    console.log('Finished');
  }
})();

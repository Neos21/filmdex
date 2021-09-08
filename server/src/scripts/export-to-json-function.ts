import * as fs from 'fs';
import * as path from 'path';

/*! 映画情報の SQLite DB ファイルを JSON ファイルにエクスポートするために使用する関数定義 */

/** SQLite DB ファイル名 */
const sqliteDbFileName = 'filmdex.sqlite3.db';

/** JSON ファイル名 */
const destJsonFileName = 'filmdex.json';

const sqliteDbDirectoryPath = path.resolve(__dirname, '../../db/');
const sqliteDbFilePath      = path.resolve(sqliteDbDirectoryPath, sqliteDbFileName);
const srcJsonDirectoryPath  = path.resolve(__dirname, '../../../client/src/assets/');
const srcJsonFilePath       = path.resolve(srcJsonDirectoryPath, destJsonFileName);
const distJsonDirectoryPath = path.resolve(__dirname, '../../../client/dist/assets/');
const distJsonFilePath      = path.resolve(distJsonDirectoryPath, destJsonFileName);

/** ファイルパス定義 */
export const paths = {
  /** SQLite DB ファイル名 */
  sqliteDbFileName,
  /** JSON ファイル名 */
  destJsonFileName,
  /** SQLite DB ファイルを配置するディレクトリのフルパス */
  sqliteDbDirectoryPath,
  /** SQLite DB ファイルのフルパス */
  sqliteDbFilePath,
  /** JSON ファイルを配置するクライアント・ソース・ディレクトリのフルパス */
  srcJsonDirectoryPath,
  /** JSON ファイルのクライアント・ソースのフルパス */
  srcJsonFilePath,
  /** JSON ファイルを配置するクライアント・ビルド・ディレクトリのフルパス */
  distJsonDirectoryPath,
  /** JSON ファイルのクライアント・ビルドのフルパス */
  distJsonFilePath
};
console.log('Export To JSON Function : Paths', __dirname, paths);

/**
 * ファイルやディレクトリが存在するか否か判定する
 * 
 * @param targetPath ファイルパス
 * @return ファイルやディレクトリが存在すれば true・存在しなければ false
 */
export async function isExist(targetPath: string): Promise<boolean> {
  return await fs.promises.stat(targetPath).then(() => true).catch(() => false);
}

/**
 * 映画情報 (メタ情報込み) を全件取得する
 * 
 * @param filmsRepository Film エンティティの Repository
 * @return 映画情報の配列
 */
export async function select(filmsRepository: any): Promise<Array<any>> {
  return await filmsRepository.createQueryBuilder('films')
    .leftJoinAndSelect('films.casts' , 'casts' )
    .leftJoinAndSelect('films.staffs', 'staffs')
    .leftJoinAndSelect('films.tags'  , 'tags'  )
    .orderBy   ('published_year', 'ASC')
    .addOrderBy('title'         , 'ASC')
    .addOrderBy('casts.order'   , 'ASC')
    .addOrderBy('staffs.order'  , 'ASC')
    .addOrderBy('tags.order'    , 'ASC')
    .getMany();
}

/**
 * 保存しなくて良いプロパティを削除する関数
 * 
 * @param item Film・Cast・Staff・Tag などのエンティティクラス
 */
export function removeMetaForEachFunction(item: any): void {
  delete item.id;
  delete item.filmId;
  delete item.order;
  delete item.createdAt;
  delete item.updatedAt;
}

/**
 * 保存しなくて良いプロパティを削除する
 * 
 * @param films 映画情報の配列
 * @return 不要なプロパティを削除した映画情報の配列
 */
export function removeMeta(films: Array<any>): Array<any> {
  films.forEach(film => {
    removeMetaForEachFunction(film);
    film.casts .forEach(removeMetaForEachFunction);
    film.staffs.forEach(removeMetaForEachFunction);
    film.tags  .forEach(removeMetaForEachFunction);
  });
  return films;
}

/**
 * 映画情報の配列を JSON 文字列に変換する
 * 
 * @param films 映画情報の配列
 * @param isBeautify true にするとインデント付き・未指定か false にすると1行につき1レコード・インデントやスペースなしで変換する
 * @return JSON 文字列 (末尾に改行あり)
 */
export function stringify(films: Array<any>, isBeautify: boolean = false): string {
  if(isBeautify) return JSON.stringify(films, null, '  ') + '\n';
  return `[\n${films.map((film) => JSON.stringify(film)).join(',\n')}\n]\n`;
}

/**
 * 文字列を UTF-8 形式のテキストファイルとして保存する
 * 
 * @param targetPath 保存先パス
 * @param text 文字列
 * @return 保存に成功したら true
 * @throws 保存に失敗した場合
 */
export async function writeFile(targetPath: string, text: string): Promise<boolean> {
  return await fs.promises.writeFile(targetPath, text, 'utf-8').then(() => true);
}

/**
 * ファイルをコピーする
 * 
 * @param srcPath コピーしたいファイルのパス
 * @param destPath ファイルのコピー先のパス
 * @return コピーに成功したら true
 * @throws 保存に失敗した場合
 */
export async function copyFile(srcPath: string, destPath: string): Promise<boolean> {
  return await fs.promises.copyFile(srcPath, destPath).then(() => true);
}

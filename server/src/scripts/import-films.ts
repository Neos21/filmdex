import * as fs from 'fs';
import * as path from 'path';

import { createConnection } from 'typeorm';

import { Film  } from '../entities/film';
import { Cast  } from '../entities/cast';
import { Staff } from '../entities/staff';
import { Tag   } from '../entities/tag';

import { paths, isExist } from './export-to-json-function';

/*!
 * 映画情報を JSON ファイルから一括インポートするスクリプト
 * 
 * `$ npm run ts-node ./src/scripts/import-films.ts` で実行する
 */
(async () => {
  console.log('Import Films : Started');
  try {
    // SQLite DB ファイルがなければエラーとする
    if(! await isExist(paths.sqliteDbFilePath)) throw new Error('SQLite DB File Does Not Exist');
    
    // JSON ファイルを読み込む
    const jsonFile = await fs.promises.readFile(path.resolve(__dirname, './import-films.json'), 'utf-8');
    const json = JSON.parse(jsonFile);
    
    const connection = await createConnection({
      type       : 'sqlite',
      database   : paths.sqliteDbFilePath,
      entities   : [Film, Cast, Staff, Tag],
      synchronize: false  // DB 同期しない
    });
    console.log('  Connected');
    
    for(let item of json) {
      await connection.transaction(async (entityManager) => {
        const publishedYear = item[0];  // JSON の内容に合わせて調整する
        const title         = item[1];
        const japaneseTitle = item[2];
        const isNotWatched  = item[3];
        console.log(`  Item Start : [${publishedYear}] [${title}] [${japaneseTitle}] [${isNotWatched}]`)
        const scenario = '';  // null ではなく空文字が入るようにしておく
        const review   = '';
        
        const savedFilm = await entityManager.save(new Film({ publishedYear, title, japaneseTitle, scenario, review }));
        if(isNotWatched) {
          const savedTag = await entityManager.save(new Tag({ filmId: savedFilm.id, order: 1, name: '未見' }));
          console.log(`  Item Finished [${savedFilm.id}] With Tag [${savedTag.order}]`);
        }
        else {
          console.log(`  Item Finished [${savedFilm.id}]`);
        }
      });
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

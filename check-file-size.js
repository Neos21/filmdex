const fs   = require('fs');
const path = require('path');

/*! SQLite DB と JSON ファイルのサイズを確認する */

const sqliteDbFile = fs.statSync(path.resolve(__dirname, './server/db/filmdex.sqlite3.db'  ));
const jsonFile     = fs.statSync(path.resolve(__dirname, './client/src/assets/filmdex.json'));

// Number.toLocaleString() でカンマを付与する
console.log(`
File Size :
SQLite DB : ${Math.floor(sqliteDbFile.size / 1024).toLocaleString()} KB (${sqliteDbFile.size.toLocaleString()} byte)
JSON      : ${Math.floor(    jsonFile.size / 1024).toLocaleString()} KB (${    jsonFile.size.toLocaleString()} byte)
`);

const fs    = require('fs');
const http  = require('http');
const https = require('https');
const path  = require('path');

/*! Google スプレッドシートのデータを JSON 形式で取得しフロントエンドで参照する用の JSON ファイルへと変換・保存する */

/**
 * Google スプレッドシートのデータを JSON 形式で取得できる URL
 * 
 * `https://sheets.googleapis.com/v4/spreadsheets/【スプレッドシート ID】/values/【シート名】?key=【API キー】` 形式の URL を想定する
 */
const url = process.env.GOOGLE_SHEETS_URL;

/** 書き出す JSON ファイル名 */
const jsonFileName            = 'filmdex.json';
/** ./src/assets/ 配下の JSON ファイルへのフルパス */
const srcAssetsFilePath       = path.resolve(__dirname, './src/assets/', jsonFileName);
/** ./dist/assets/ ディレクトリへのフルパス */
const distAssetsDirectoryPath = path.resolve(__dirname, './dist/assets/');
/** ./dist/assets/ 配下の JSON ファイルへのフルパス */
const distAssetsFilePath      = path.resolve(distAssetsDirectoryPath, jsonFileName);

(async () => {
  console.log('Fetch FilmDeX : Start');
  
  // スプレッドシートを取得する
  const result = await fetch(url);
  const json = parseToJson(result);
  
  // 見出し行からフォーマットをチェックする
  const header = json.values.shift();  // データの先頭1行が見出し・ココで `json.values` の先頭行を削除している
  validateHeaderColumns(header);
  
  // 映画情報一覧に変換・ソートする
  const films = convertToFilms(json.values);
  
  // JSON 文字列に変換し書き込む
  const stringifiedFilms = stringify(films);
  await writeFile(srcAssetsFilePath, stringifiedFilms);
  
  // dist/ ディレクトリがあれば JSON ファイルをコピーする
  if(await isExist(distAssetsDirectoryPath)) {
    console.log('dist/assets/ Is Exist. Copying JSON File...');
    await copyFile(srcAssetsFilePath, distAssetsFilePath);
  }
  
  console.log('Fetch FilmDeX : Finished');
})();

/**
 * リクエストする
 * 
 * @param {string} url URL
 * @param {object} options オプション
 * @return {Promise<string>} レスポンス
 * @throws URL が不正な場合、リクエストエラーが発生した場合、リクエストタイムアウトが発生した場合
 */
function request(url, options) {
  return new Promise((resolve, reject) => {
    // 引数の確認・調整
    if(!url || typeof url !== 'string') return reject('Invalid URL');
    options = options ?? {};
    
    // プロトコルに合わせて使用するモジュールを決める
    const agent = url.startsWith('https:') ? https : http;
    const req = agent.request(url, options, (res) => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', (chunk) => { data += chunk; })
         .on('end' , ()      => { resolve(data); });
    })
      .on('error'  , (error) => { reject(error); })
      .on('timeout', ()      => { req.destroy(); reject('Request Timeout'); });
    
    req.setTimeout(100000);
    req.end();
  });
}

/**
 * スプレッドシートのデータを取得する
 * 
 * @param {string} url URL
 * @return {Promise<string>} レスポンス
 * @throws リクエストに失敗した場合
 */
async function fetch(url) {
  try {
    const result = await request(url);
    return result;
  }
  catch(error) {
    console.error('Failed To Request');
    throw error;
  }
}

/**
 * JSON パースする
 * 
 * @param {string} text JSON 文字列
 * @return {Array<Array<string>>} スプレッドシートの行列データ
 * @throws JSON パースに失敗した場合、error プロパティが存在した場合、values プロパティが存在しない場合
 */
function parseToJson(text) {
  let json = null;
  try {
    json = JSON.parse(text);
  }
  catch(error) {
    console.error('Failed To Parse Response', text);
    throw error;
  }
  
  if(json?.error) {
    console.error('The JSON Has Error Object', text);
    throw new Error(json?.error.message ?? 'The JSON Has Error Object');
  }
  if(json?.values == null) {
    console.error('The JSON Does Not Have Values Array', text);
    throw new Error('The JSON Does Not Have Values Array');
  }
  
  return json;
}

/**
 * 取得したスプレッドシートの1行目を確認し、正しいフォーマットかどうか確認する
 * 
 * @param {Array<string>} header ヘッダ行
 * @return {boolean} 列数・列名・列順が全て正しければ true
 * @throws 不正なフォーマットだった場合
 */
function validateHeaderColumns(header) {
  /** 見出し行データとして想定する文言 */
  const expectedHeader = [
    ['Published Year', '公開年'  ],
    ['Title'         , '原題'    ],
    ['Japanese Title', '邦題'    ],
    ['Scenario'      , 'あらすじ'],
    ['Review'        , '感想'    ],
    ['Casts'         , 'キャスト'],
    ['Staffs'        , 'スタッフ'],
    ['Tags'          , 'タグ'    ]
  ];
  
  // 列数が一致していること
  if(expectedHeader.length !== header.length) {
    console.error(`Number Of Header Columns Is Invalid`, { expectedHeaderLength: expectedHeader.length, headerLength: header.length, header: header });
    throw new Error('Number Of Header Columns Is Invalid');
  }
  
  // 全ての列名について想定文言のいずれかに合致すること
  const isValid = header.every((columnName, index) => {
    return expectedHeader[index].some((expectedColumnName) => columnName === expectedColumnName);
  });
  if(!isValid) throw new Error('Invalid Header Columns');
  
  return isValid;
}

/**
 * スプレッドシートの行データを Film クラス (相当) の配列に変換しソートする
 * 
 * @param {Array<Array<string>>} スプレッドシートの行データ (見出し行は削除済であること)
 * @return {Array<Object>} 映画情報の配列・「公開年」と「原題」の昇順でソートする
 */
function convertToFilms(values) {
  return values.map((row, index) => {
    // 「公開年」と「原題」は必須とする・後続が空値のみの列のみだと配列の要素ごと少なくなる
    if(row.length < 2) {
      console.error('Invalid Row Data', { index, row });
      throw new Error('Invalid Row Data');
    }
    // 1列目のデータが数値型に変換できなければ不正値とみなす
    if(Number.isNaN(Number(row[0]))) {
      console.error('Invalid Published Year Data', { index, row });
      throw new Error('Invalid Published Year Data');
    }
    
    return {  // Film クラス相当の連想配列にする・空白や改行は除去する
      publishedYear: Number(row[0]),
      title        : row[1] == null ? '' : String(row[1]).trim().replace((/\n/gu), ''),
      japaneseTitle: row[2] == null ? '' : String(row[2]).trim().replace((/\n/gu), ''),
      scenario     : row[3] == null ? '' : String(row[3]).trim().replace((/\n/gu), ''),
      review       : row[4] == null ? '' : String(row[4]).trim().replace((/\n/gu), ''),
      casts        : row[5] == null ? '' : String(row[5]).trim().replace((/\n/gu), ''),
      staffs       : row[6] == null ? '' : String(row[6]).trim().replace((/\n/gu), ''),
      tags         : row[7] == null ? '' : String(row[7]).trim().replace((/\n/gu), '')
    };
  })
    .sort((filmA, filmB) => {
      // 先に「公開年」の昇順でソートする
      if(filmA.publishedYear < filmB.publishedYear) return -1;
      if(filmA.publishedYear > filmB.publishedYear) return  1;
      // 「公開年」が同一の場合、「原題」の昇順でソートする
      if(filmA.title < filmB.title) return -1;
      if(filmA.title > filmB.title) return  1;
      // 同一値なら 0 を返す
      return 0;
    });
}

/**
 * 映画情報の配列を JSON 文字列に変換する
 * 
 * @param {Array<Object>} films 映画情報の配列
 * @return {string} JSON 文字列 (末尾に改行あり)
 */
function stringify(films) {
  return `[\n${films.map((film) => JSON.stringify(film)).join(',\n')}\n]\n`;
}

/**
 * 文字列を UTF-8 形式のテキストファイルとして保存する
 * 
 * @param {string} targetPath 保存先パス
 * @param {string} text 文字列
 * @return {Promise<boolean>} 保存に成功したら true
 * @throws 保存に失敗した場合
 */
async function writeFile(targetPath, text) {
  return await fs.promises.writeFile(targetPath, text, 'utf-8').then(() => true);
}

/**
 * ファイルやディレクトリが存在するか否か判定する
 * 
 * @param {string} targetPath ファイルパス
 * @return {Promise<boolean>} ファイルやディレクトリが存在すれば true・存在しなければ false
 */
async function isExist(targetPath) {
  return await fs.promises.stat(targetPath).then(() => true).catch(() => false);
}

/**
 * ファイルをコピーする
 * 
 * @param {string} srcPath コピーしたいファイルのパス
 * @param {string} destPath ファイルのコピー先のパス
 * @return {Promise<boolean>} コピーに成功したら true
 * @throws 保存に失敗した場合
 */
async function copyFile(srcPath, destPath) {
  return await fs.promises.copyFile(srcPath, destPath).then(() => true);
}

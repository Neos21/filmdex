# FilmDeX

観た映画の情報・感想を一覧表示するウェブアプリです。

- __[Enter The WebSite](https://neos21.github.io/filmdex/)__


## Architecture

- Angular 製のフロントエンドを GitHub Pages にデプロイしている
- Angular プロジェクトからは `./src/assets/filmdex.json` に保存されている JSON ファイルを「映画情報一覧」として取得・表示している
- `./src/assets/filmdex.json` の基となるデータは**個人の Google スプレッドシート (非公開)** にて管理している
- 毎週日本時間の月曜早朝に GitHub Actions が実行され、Google スプレッドシートのデータを取得し GitHub Pages へと反映している
    - Google スプレッドシートからのデータ取得スクリプトの実体は `$ npm run fetch` (`./fetch-filmdex.js`)
    - 環境変数 `GOOGLE_SHEETS_URL` に API キー付きの Google スプレッドシート URL を指定して実行すると `./src/assets/filmdex.json` に上書き保存される
    - GitHub Actions での実行時は `gh-pages` ブランチのみ更新しており `master` ブランチへのコミットは行っていない
    - GitHub Actions は手動実行もできる
- `master` ブランチにコミットされている `./src/assets/filmdex.json` は手動バックアップを兼ねている。不定期に本スクリプトをローカル実行して手動コミットしておくこと
    - 開発やローカル実行に関する情報は適宜 `./MEMO.md` (Git 管理対象外) に記載しておけるようにしてある


## Note : Initial Setup

```bash
# Angular プロジェクトは次のように準備した
$ npm install -g @angular/cli
$ ng version
Angular CLI: 12.2.2
Node: 14.16.1
Package Manager: npm 6.14.12
$ ng new filmdex-client --skip-git --skip-tests --routing --style=scss
```


## Links

- [Neo's World](https://neos21.net/)
- [GitHub Pages - filmdex : FilmDeX](https://neos21.github.io/filmdex)

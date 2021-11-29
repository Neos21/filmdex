# FilmDeX

観た映画の情報・感想を一覧表示するウェブアプリです。

- __[Enter The WebSite](https://neos21.github.io/filmdex/)__


## Architecture

- Angular 製のフロントエンドを GitHub Pages にデプロイしている
- Angular プロジェクトからは `./src/assets/filmdex.json` に保存されている JSON ファイルを「映画情報一覧」として取得し、表示している
- Git 管理されている `./src/assets/filmdex.json` ファイルはバックアップ用。最新のデータは GitHub Actions にて取得し、同パスに上書き保存・ビルド・デプロイしている
- GitHub Actions にて、**個人の Google スプレッドシート**より映画情報を取得し、`./src/assets/filmdex.json` に上書き保存している
- GitHub Actions は毎週月曜早朝に実行され、定期的に Google スプレッドシートの内容を GitHub Pages へと反映している他、手動実行もできるようにしてある


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

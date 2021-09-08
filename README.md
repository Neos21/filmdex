# FilmDeX

観た映画の情報・感想を管理するウェブアプリです。

- __[Enter The Web Site](https://neos21.github.io/filmdex/)__


## 仕組み

- フロントエンドは Angular 製。`assets/filmdex.json` ファイルを読み込み、映画情報を一覧表示している
    - GitHub Pages 上 (本番モードでのビルド時) はこの閲覧機能のみ
- フロントエンドを開発モードでビルドした際は `/admin` ページが同梱され、映画情報を追加・編集・削除できる管理画面が登場する
- バックエンドは NestJS 製。TypeORM を利用し SQLite DB (`./server/db/filmdex.sqlite3.db`) で映画情報を管理している
    - フロントエンドの管理画面から本バックエンド API をコールし SQLite DB ファイルを更新する
- 管理画面の「Export To JSON」ボタン、もしくは `./server/` 内で `$ npm run exp` コマンドを実行すると、SQLite DB ファイルの内容を `assets/filmdex.json` にエクスポートする
    - この処理により、フロントエンドで閲覧できる映画情報が更新できる
    - Git 上では SQLite DB ファイル、JSON ファイルともに Git 管理に含めてしまっている
- GitHub Actions にてフロントエンドをビルドし、GitHub Pages にデプロイしている
    - SQLite DB から JSON ファイルへのエクスポートは Workflows 中で行っていないことに留意


## Note

### Setup Production

```bash
# ./server/db/filmdex.sqlite3.db の内容を ./client/src/assets/filmdex.json にエクスポートする
$ cd ./server/
$ npm run exp

# Angular プロジェクトを本番モードでビルドする
$ cd ./client/
$ npm run build
# ./client/dist/ を GitHub Pages にデプロイする

# 本番モードでは ./client/[src|dist]/assets/filmdex.json を参照できるのみ・管理画面は存在しない
```

### Setup Admin Server

```bash
# Angular プロジェクトを開発モードでビルドし管理者画面を含ませる
$ cd ./client/
$ npm run build -- --configuration=development
# もしくは $ npm start で http://localhost:4200/ を利用しても良い

# NestJS プロジェクトをビルドし ./client/dist/ を含んでサーバを配信する
$ cd ./server/
# ./server/.env.example ファイルを参考に必要な環境変数を用意しておく
$ npm run build
$ npm run serve
# もしくは $ npm start で直接 http://localhost:2323/ を起動しても良い

# http://localhost:2323/ でトップページ、http://localhost:2323/admin で管理画面に遷移する
# 管理画面より「Export To JSON」するか、$ npm run exp を実行すると、
# ./client/src/assets/filmdex.json および ./client/dist/assets/filmdex.json を更新する
```

### Initial Setup

```bash
# Angular プロジェクトは次のように準備した
$ npm install -g @angular/cli
$ ng version
Angular CLI: 12.2.2
Node: 14.16.1
Package Manager: npm 6.14.12
$ ng new filmdex-client --skip-git --skip-tests --routing --style=scss

# NestJS プロジェクトは次のように準備した
$ npm install -g @nestjs/cli
$ nest --version
8.1.1
$ nest new filmdex-server --skip-git --language=TypeScript --package-manager=npm
```


## Links

- [Neo's World](https://neos21.net/)
- [GitHub Pages - filmdex : FilmDeX](https://neos21.github.io/filmdex)

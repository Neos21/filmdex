# FilmDeX

FilmDeX


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
# 本番モードでは ./client/dist/assets/filmdex.json を参照できるのみ
```

### Setup Admin Server

```bash
# Angular プロジェクトを開発モードでビルドし管理者画面を含ませる
$ cd ./client/
$ npm run build -- --configuration=development

# NestJS プロジェクトをビルドし ./client/dist/ を含んでサーバを配信する
$ cd ./server/
$ npm run build
$ npm run serve
# http://localhost:2323/ でトップページ、http://localhost:2323/admin で管理画面に遷移する
# 管理画面より「Export To JSON」するか、$ npm run exp を実行すると、
# ./client/src/assets/filmdex.json および ./client/dist/assets/filmdex.json を更新する
```

### Initial Setup

```bash
$ npm install -g @angular/cli
$ ng version
Angular CLI: 12.2.2
Node: 14.16.1
Package Manager: npm 6.14.12
$ ng new filmdex-client --skip-git --skip-tests --routing --style=scss

$ npm install -g @nestjs/cli
$ nest --version
8.1.1
$ nest new filmdex-server --skip-git --language=TypeScript --package-manager=npm
```


## Links

- [Neo's World](https://neos21.net/)

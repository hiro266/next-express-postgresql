# next-express-postgresql

## リポジトリ構成

```bash
.
└── packages
    ├── backend    # バックエンド (Express, prisma)
    └── frontend   # フロントエンド (Next.js)
```

## 使用技術

- Next.js
- Express
  - prisma
- PostgreSQL
- テスト
  - Jest
  - testing-library
  - ESLint
  - husky
- CI/CD: GitHub Actions

## 開発者メモ

### tsc(コンパイラ)

- tsc コマンドでコンパイル
  - ts ファイルから js ファイルを生成(/dist/xxx.js が生成)
- コンパイラがコンパイルして生成した js をデプロイして使う

### ts-node コマンド

- ts-node は、TypeScript のコードを事前に JavaScript にコンパイルせずに直接実行できる Node.js 用のツール。
- つまり、通常は TypeScript コンパイラ（tsc）を使ってコードを変換してから Node.js で実行する必要がありますが、ts-node を使うとそのプロセスを省略し、コードをオンザフライでコンパイルして実行できます。
- これにより、開発中のテストやデバッグがより迅速に行えるようになります。

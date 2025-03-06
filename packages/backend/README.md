## 参考

- https://zenn.dev/ishiyama/scraps/d91448f8d3d6bf

## 起動

### 手動

- `pnpm build`
- `pnpm start`
- ソースコード変更のたびに上記を実行

### コンテナ

- `docker compose up -d`

## seed

- `docker compose exec backend bash`
- `npx prisma db push`
  - schema.prisma で定義した model を db のテーブルとして作成
- `npx prisma db seed`
  - package.json の prisma seed を実行

## メモ

- `npx prisma generate`
  - schema.prisma に則った `@prisma/client` を生成
  - PrismaClient の初期化後に prisma.xxxx で model にアクセス

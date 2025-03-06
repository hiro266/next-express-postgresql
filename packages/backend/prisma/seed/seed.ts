import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // テーブルをリセットしてIDを1から再開させる（PostgreSQLの場合）
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;

  // User モデルの現在のレコード数を取得
  const count = await prisma.user.count();

  // ユーザーが存在しない場合、10件のレコードを作成
  if (count < 1) {
    for (let i = 1; i <= 10; i++) {
      const user = await prisma.user.create({
        data: {
          name: `John Doe ${i}`,
          email: `john.doe${i}@example.com`,
        },
      });
      console.log({ user });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

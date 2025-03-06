import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed data for the User model

  const count = await prisma.user.count();

  if (count < 1) {
    const user1 = await prisma.user.create({
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
    });

    console.log({ user1 });
  }
}

main();

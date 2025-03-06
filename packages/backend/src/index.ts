import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3001", //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

app.use("/hello", (req, res) => {
  // res.send("helloworld");
  console.log("/hello へリクエストがありました");
  res.json({ message: "helloworld" });
});

app.use("/user", async (req, res) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirst();
  res.json(user?.name);
});

// port:3002でサーバーを立てる
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

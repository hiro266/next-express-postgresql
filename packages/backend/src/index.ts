import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import https from "https";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3001", //アクセス許可するオリジン
    credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, //レスポンスstatusを200に設定
  })
);

// 開発環境で一時的に証明書の検証を無効化
const agent = new https.Agent({
  rejectUnauthorized: false,
});

app.get("/test", async (req, res) => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/pikachu", { httpsAgent: agent })
    .then((response) => {
      console.log(response.data);
      res.json({ name: response.data.name });
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ error: "ランダムなメッセージの取得に失敗しました" });
    });
});

app.get("/user", async (req, res) => {
  const id = Math.floor(Math.random() * 10) + 1;
  try {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({ where: { id } });
    res.json({ name: user?.name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// port:3002でサーバーを立てる
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

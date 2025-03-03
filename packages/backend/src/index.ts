import express from "express";

const app = express();

app.use("/hello", (req, res) => {
  res.send("helloworld");
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

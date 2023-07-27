const express = require("express");
const app = express();

app.listen(3000, console.log("サーバが開始されました"));

app.get("/", (req, res) => {
  res.send("プログラミングへようこそ");
});

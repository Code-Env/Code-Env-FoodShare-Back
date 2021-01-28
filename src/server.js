require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const db = require("./db");

const api = require("./api");

const app = express();
const cors = require("cors");

// 채팅
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const port = process.env.PORT || 8080;

app.use(cors({ origin: true })); // 자기와 다른 origin 접근 가능하도록 허용
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", api);

io.on("connection", () => {
  /* ... */
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  db.connect();
});

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

io.on("connection", socket => {
  console.log("연결된 socketID : ", socket.id);
  io.to(socket.id).emit("my socket id", { socketId: socket.id });

  socket.on("enter chatroom", () => {
    console.log("누군가가 입장함");
    socket.broadcast.emit("receive chat", {
      type: "alert",
      chat: "누군가가 입장하였습니다.",
      regData: Date.now(),
    });
  });
  socket.on("send chat", data => {
    console.log(`${socket.id}: ${data.chat}`);
    io.emit("receive chat", data);
  });
  socket.on("leave chatroom", data => {
    console.log("leave chatroom", data);
    socket.broadcast.emot("receive chat", {
      type: "alert",
      chat: "누군가가 퇴장하였습니다",
      regData: Date.now(),
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  db.connect();
});

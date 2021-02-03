const express = require("express");
const morgan = require("morgan");

const app = express();
const cors = require("cors");

const api = require("./api");

// const port = process.env.PORT || 4001;
const port = 4001;

app.get("/", (req, res) => res.send("Main server"));
app.use(cors({ origin: true })); // 자기와 다른 origin 접근 가능하도록 허용
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", api);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

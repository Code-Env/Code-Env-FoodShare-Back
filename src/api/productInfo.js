const express = require("express");
const db_connect = require("../db/db_connect");
const router = express.Router();

router.get("/", async function (req, res) {
  db_connect.query("SELECT * from FoodShare.productinfos", (error, rows) => {
    if (error) throw error;
    console.log("db: ", rows);
    res.send(rows);
  });
});
module.exports = router;

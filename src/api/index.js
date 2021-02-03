const express = require("express");
const router = express.Router();

const productInfoApi = require("./productInfo");
const tradeListApi = require("./tradeList");

router.get("/", function (req, res) {
  //   console.log(req.query);
  //   console.log(req.body);
  res.send("api");
});

router.use("/productInfo", productInfoApi);
router.use("/tradelists", tradeListApi);

module.exports = router;

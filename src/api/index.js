const express = require("express");

const productInfoApi = require("./productInfo");
// const productInfo = require("../db/model/productInfo");

const router = express.Router();

router.post("/", function(res,req){
    console.log(req.query);
    console.log(req.body);
    res.send("api");
});

// router.get("/", async function (req, res) {
//   console.log(req.query);
  
//   const productInfoObject = new productInfo({
//     productName: "test2",
//     category: "test2",
//     productImg: "test2",
//     position: "test2",
//     favouriteCount: 100,
//     hitCount: 100,
//   });

//   await productInfoObject.save();

//   res.send("Birds home page");
// });

router.use("/productInfo", productInfoApi);





module.exports = router;
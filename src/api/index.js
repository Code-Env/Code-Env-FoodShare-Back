const express = require("express");

const productInfoApi = require("./productInfo");
const tradeListApi = require("./tradeList");
// const productInfo = require("../db/model/productInfo");
// const tradeList = require("../db/model/tradeList");

const router = express.Router();

router.post("/", function(res,req){
    console.log(req.query);
    console.log(req.body);
    res.send("api");
});

// router.get("/", async function (req, res) {
//   console.log(req.query);
  
// //   const productInfoObject = new productInfo({
// //     productName: "test2",
// //     category: "test2",
// //     productImg: "test2",
// //     position: "test2",
// //     favouriteCount: 100,
// //     hitCount: 100,
// //   });
// //   await productInfoObject.save();

//   const tradeListObject = new tradeList({
//     productImg:"tradeTest1",
//     productName:"tradeTest1",
//     position:"서울",
//     hitCount:100,
//   })
//   await tradeListObject.save();


//   res.send("Birds home page");
// });


router.use("/productInfo", productInfoApi);
router.use("/tradeList", tradeListApi);





module.exports = router;
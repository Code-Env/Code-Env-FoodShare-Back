const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", async function(req, res) {
    try {
        console.log("gg");
        const productInfos = await db.Models.productInfo.find();
        console.log(productInfos);

        return res.send(productInfos);
    }catch (error) {
        next(error);
    }
});

router.post("/productInfo", function(req, res) {
    res.send("productInfo");
});

module.exports = router;

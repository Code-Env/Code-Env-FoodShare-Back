const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", async function(req, res) {
    try {
        console.log("tradeList");
        const tradeList = await db.Models.tradeList.find();
        console.log(tradeList);

        return res.send(tradeList);
    }catch (error){
        next(error);
    }
});

router.post("/tradeList", function(req, res) {
    res.send("tradeList");
});

module.exports = router;
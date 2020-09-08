const mongoose = require("mongoose");
const {Schema} = mongoose;

const tradeListSchema = new Schema({
    productImg: String, // 상품사진
    productName: String, // 상품제목
    position: String, // 거래위치
    postTime: {type: Date, default: new Date()}, // 게시물 업로드 시간.
    hitCount: Number // 관심 카운트
});

const tradeList = mongoose.model("tradeList", tradeListSchema);
module.exports = tradeList;
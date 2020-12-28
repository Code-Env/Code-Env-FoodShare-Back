const mongoose = require("mongoose");
const { Schema } = mongoose;

const productInfoSchema = new Schema({
  productName: String, // 상품제목
  userId: String,
  category: String, // 카테고리
  productImg: String, // 상품이미지
  position: String, // 거래위치
  postTime: { type: Date, default: new Date() }, // 게시물 업로드 시간
  favouriteCount: Number, // 관심카운트
  hitCount: Number, // 조회수
});

const productInfo = mongoose.model("productInfo", productInfoSchema);
module.exports = productInfo;

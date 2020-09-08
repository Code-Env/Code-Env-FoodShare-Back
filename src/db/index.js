const mongoose = require("mongoose");

const productInfo = require("../db/model/productInfo");
const tradeList = require("../db/model/tradeList");

const { MONGO_URI: mongoURI } = process.env;

module.exports = (function() {
  mongoose.Promise = global.Promise;

  return {
    Models: {
      productInfo,
      tradeList
    },
    connect() {
      return mongoose
        .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }) // useNewUrlParser: true, useUnifiedTopology: true 버전오류로 꼭 넣을것
        .then(() => {
          console.log("Successfully connected to mongodb");
        })
        .catch(e => {
          console.error(e);
        });
    },
    disconnect() {
      return mongoose.dicsconnect();
    }
  };
})();
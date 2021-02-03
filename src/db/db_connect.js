const mysql2 = require("mysql2");

// module.exports = (function () {
//   const config = require("./db_config");
//   const connection = mysql2.createConnection({
//     host: config.db_info.host,
//     user: config.db_info.user,
//     password: config.db_info.password,
//     database: config.db_info.database,
//   });

//   return {
//     getConnection: function (callback) {
//       // connection pool을 생성하여 리턴합니다
//       connection.getConnection(callback);
//     },
//     end: function (callback) {
//       connection.end(callback);
//     },
//   };
// })();
const config = require("./db_config");
const db_connect = mysql2.createConnection({
  host: config.db_info.host,
  user: config.db_info.user,
  password: config.db_info.password,
  database: config.db_info.database,
});

module.exports = db_connect;

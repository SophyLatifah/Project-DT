// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Sophybisa1!",
//   database: "laundry_db",
// });

// // test db
// db.connect((err) => {
//   if (err) {
//     return console.log("Unable to connect to the database");
//   }
//   console.log("Database connected!");
// });

// module.exports = db;

// config/db.js
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sophybisa1!",
  database: "laundry_db",
});

module.exports = db;

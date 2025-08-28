const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "laundry_db",
});

// test db
db.connect((err) => {
  if (err) {
    return console.log("Unable to connect to the database");
  }
  console.log("Database connected!");
});

module.exports = db;

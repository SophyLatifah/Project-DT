// import mysql from "mysql2"

// // Konfigurasi Database
// const mysql = require('mysql2/promise');

// // Buat koneksi ke database MySQL
// const db = mysql.createPool({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'Sophybisa1!',
//     database: 'laundry_db',
//     // waitForConnections: true,
//     // connectionLimit: 10,
//     // queueLimit: 0,
// });.promise();

// module.exports = db;

// db.js
const mysql = require("mysql2/promise");

// Buat koneksi ke database MySQL
const db = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sophybisa1!",
    database: "laundry_db",
});

module.exports = db;

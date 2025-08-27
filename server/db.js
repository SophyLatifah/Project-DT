// Konfigurasi Database
const mysql = require('mysql2');

// Buat koneksi ke database MySQL
const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Sophybisa1!',
    database: 'laundry_db'
});

module.exports = db.promise();

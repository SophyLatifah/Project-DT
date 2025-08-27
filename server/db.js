// Konfigurasi Database
const mysql = require('mysql2');

// Buat koneksi ke database MySQL
const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Sophybisa1!',
    database: 'laundry_db',
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0,
});

module.exports = db.promise();

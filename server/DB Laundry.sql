DROP DATABASE IF EXISTS laundry_db;
CREATE DATABASE IF NOT EXISTS laundry_db;
USE laundry_db;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR (100) NOT NULL,
email VARCHAR (255) NOT NULL UNIQUE,
password VARCHAR (255) NOT NULL,
role ENUM('admin', 'user'),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- Tabel Mitra Laundry
-- =========================
CREATE TABLE MitraLaundry (
    id_mitra INT AUTO_INCREMENT PRIMARY KEY,
    nama_mitra VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    no_hp VARCHAR(20),
    alamat TEXT,
    nama_toko VARCHAR(100),
    jam_operasional VARCHAR(100),
    tanggal_gabung TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- Tabel Layanan Laundry
-- =========================
CREATE TABLE LayananLaundry (
    id_layanan INT AUTO_INCREMENT PRIMARY KEY,
    id_mitra INT NOT NULL,
    nama_layanan VARCHAR(100) NOT NULL,
    deskripsi TEXT,
    harga_per_kg DECIMAL(10,2) NOT NULL,
    estimasi_waktu VARCHAR(50),
    FOREIGN KEY (id_mitra) REFERENCES MitraLaundry(id_mitra)
);

-- =========================
-- Tabel Order
-- =========================
-- CREATE TABLE `Order` (
--     id_order INT AUTO_INCREMENT PRIMARY KEY,
--     id_konsumen INT NOT NULL,
--     id_mitra INT NOT NULL,
--     id_layanan INT NOT NULL,
--     id_promo INT NULL,
--     id_pembayaran INT NOT NULL,
--     tanggal_order DATETIME DEFAULT CURRENT_TIMESTAMP,
--     status_order VARCHAR(50),
--     total_harga DECIMAL(12,2),

--     FOREIGN KEY (id_mitra) REFERENCES MitraLaundry(id_mitra),
--     FOREIGN KEY (id_layanan) REFERENCES LayananLaundry(id_layanan)
--     -- FOREIGN KEY (id_konsumen) REFERENCES Konsumen(id_konsumen), -- kalau ada tabel Konsumen
--     -- FOREIGN KEY (id_promo) REFERENCES Promo(id_promo),           -- kalau ada tabel Promo
--     -- FOREIGN KEY (id_pembayaran) REFERENCES Pembayaran(id_pembayaran) -- kalau ada tabel Pembayaran
-- );

-- SELECT id, username, email, password, created_at FROM users;

CREATE TABLE IF NOT EXISTS orders (
	id_order INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    item VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    total_harga DECIMAL(12,2),
    status_order VARCHAR(50) DEFAULT 'pending',
    tanggal_order TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    alamat_pengiriman TEXT,
    service_type VARCHAR(100),
    notes TEXT,
    payment_method VARCHAR(50),
    FOREIGN KEY (id_user) REFERENCES users(ID)
);

-- SELECT *
-- FROM users;


-- DELETE FROM users WHERE email='riri@gmail.com';
SELECT * FROM users;

SELECT * FROM orders;
-- TRUNCATE users;

-- SELECT DATABASE();
-- SELECT email, HEX(email) FROM users;

-- CREATE TABLE testimoni (
-- )

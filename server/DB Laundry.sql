DROP DATABASE IF EXISTS laundry_db;
CREATE DATABASE IF NOT EXISTS laundry_db;
USE laundry_db;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR (100) NOT NULL,
email VARCHAR (255) NOT NULL UNIQUE,
password VARCHAR (255) NOT NULL,
role ENUM('admin', 'user') DEFAULT 'user',
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO users (username, email, password, role)
-- VALUES
-- ('Admin Kleanzy', 'admin@kleanzy.com', 'admin123', 'admin'),
-- ('Sopi', 'sopi@gmail.com', 'sopi123', 'user');

-- SELECT *
-- FROM users;

-- SELECT * FROM users;

-- SELECT DATABASE();
-- SELECT email, HEX(email) FROM users;

-- CREATE TABLE testimoni (
-- )

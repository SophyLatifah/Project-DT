const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const authRoutes = require("./routes/auth");
// const userRoutes = require("./routes/users");
const db = require("./db");

const app = express();
const PORT = 5000;
const JWT_SECRET = "rahasia super aman";

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);

// Test DB Connection
// (async () => {
//   try {
//     await db.query("SELECT 1");
//     console.log("✅ Database connected");
//   } catch (err) {
//     console.error("❌ Database connection failed:", err.message);
//   }
// })();

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// ==================== USER (Protected Route) ==================== //

// ==================== AUTH ROUTES ==================== //

// Register
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Register input:", req.body);

  try {
    const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length > 0) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // simpan ke DB + log hasilnya
    const [result] = await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    console.log("Insert result:", result); // 🔍 liat hasil insert
    // result.affectedRows harusnya = 1
    // result.insertId = ID user baru

    // await db.query(
    //   "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    //   [username, email, hashedPassword]
    // );

    console.log("User registered:", username, email);

    res.json({ message: "Registrasi berhasil!", userId: result.insertId });
  } catch (err) {
      console.error("Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) {
      return res.status(400).json({ message: "Email tidak ditemukan" });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Password salah" });

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ==================== MIDDLEWARE PROTECT ==================== //
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer token"

  if (!token) return res.status(401).json({ message: "Token tidak ada" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token tidak valid" });
    req.user = user; // simpan payload ke req
    next();
  });
}

// ==================== PROTECTED ROUTES ==================== //
app.get("/api/profile", verifyToken, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, username, email FROM users WHERE id = ?", [req.user.id]);
    if (rows.length === 0) return res.status(404).json({ message: "User tidak ditemukan" });

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ==================== TEST DB ==================== //
(async () => {
  try {
    await db.query("SELECT 1");
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

// ==================== START SERVER ==================== //
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
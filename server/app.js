const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./config/db");

const PORT = 5000;
const JWT_SECRET = "rahasia super aman";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ==================== JWT MIDDLEWARE ==================== //
const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded; // hasil decode { id, username, email }
    next();
  });
};

// ==================== REGISTER ==================== //
app.post("/api/auth/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Register input:", req.body);

  try {
    // cek email
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert user
    const [result] = await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    console.log("User registered:", username, email);

    res.json({ message: "Registrasi berhasil!", userId: result.insertId });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ==================== LOGIN ==================== //
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
    console.error("Login error detail:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ==================== ORDERS ==================== //

// Create Order
app.post("/api/orders", authenticate, async (req, res) => {
  const {
    item,
    quantity,
    total_harga,
    status_order,
    alamat_pengiriman,
    service_type,
    notes,
    payment_method,
  } = req.body;

  try {
    const [result] = await db.query(
      `INSERT INTO orders 
      (id_user, item, quantity, total_harga, status_order, alamat_pengiriman, service_type, notes, payment_method) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        req.user.id, // id user diambil dari token
        item,
        quantity,
        total_harga,
        status_order || "pending",
        alamat_pengiriman,
        service_type,
        notes,
        payment_method,
      ]
    );

    res.json({ message: "Order berhasil dibuat!", orderId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Get all orders
app.get("/api/orders", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM orders");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Get orders by user
app.get("/api/orders/user/:id_user", async (req, res) => {
  try {
    const { id_user } = req.params;
    const [rows] = await db.query("SELECT * FROM orders WHERE id_user = ?", [
      id_user,
    ]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Update order
app.put("/api/orders/:id_order", async (req, res) => {
  const { id_order } = req.params;
  const {
    item,
    quantity,
    total_harga,
    status_order,
    alamat_pengiriman,
    service_type,
    notes,
    payment_method,
  } = req.body;

  try {
    const [result] = await db.query(
      `UPDATE orders 
       SET item=?, quantity=?, total_harga=?, status_order=?, alamat_pengiriman=?, service_type=?, notes=?, payment_method=? 
       WHERE id_order=?`,
      [
        item,
        quantity,
        total_harga,
        status_order,
        alamat_pengiriman,
        service_type,
        notes,
        payment_method,
        id_order,
      ]
    );

    res.json({ message: "Order updated", affectedRows: result.affectedRows });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Delete order
app.delete("/api/orders/:id_order", async (req, res) => {
  const { id_order } = req.params;

  try {
    const [result] = await db.query("DELETE FROM orders WHERE id_order=?", [
      id_order,
    ]);
    res.json({ message: "Order deleted", affectedRows: result.affectedRows });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ===== tracking ====== ////
app.get("/api/tracking/:id_order", async (req, res) => {
  const { id_order } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM orders WHERE id_order = ?", [id_order]);
    if (rows.length === 0) return res.status(404).json({ message: "Order not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});



// ==================== START SERVER ==================== //
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

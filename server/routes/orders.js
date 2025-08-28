const express = require("express");
const router = express.Router();
const db = require("../config/db");
const { authenticate } = require("../middleware/auth");

// CREATE order (harus login)
router.post("/", authenticate, async (req, res) => {
  const { item, quantity, total_harga, status_order, alamat_pengiriman, service_type, notes, payment_method } = req.body;

  try {
    const [result] = await db.query(
      `INSERT INTO orders 
        (id_user, item, quantity, total_harga, status_order, alamat_pengiriman, service_type, notes, payment_method) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        req.user.id, // ambil user dari token
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

// READ all orders (admin)
router.get("/", authenticate, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM orders");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// READ orders milik user login
router.get("/my", authenticate, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM orders WHERE id_user = ?", [req.user.id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// UPDATE order
router.put("/:id", authenticate, async (req, res) => {
  const { id } = req.params;
  const { item, quantity, total_harga, status_order, alamat_pengiriman, service_type, notes, payment_method } = req.body;

  try {
    const [result] = await db.query(
      `UPDATE orders 
       SET item=?, quantity=?, total_harga=?, status_order=?, alamat_pengiriman=?, service_type=?, notes=?, payment_method=?
       WHERE id=? AND id_user=?`,
      [item, quantity, total_harga, status_order, alamat_pengiriman, service_type, notes, payment_method, id, req.user.id]
    );

    if (result.affectedRows === 0) return res.status(404).json({ message: "Order tidak ditemukan" });

    res.json({ message: "Order berhasil diperbarui!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// DELETE order
router.delete("/:id", authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM orders WHERE id=? AND id_user=?", [id, req.user.id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Order tidak ditemukan" });

    res.json({ message: "Order berhasil dihapus!" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

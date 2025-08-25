const express = require("express");
const app = express();
var cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userRoutes");

const PORT = 3000;

const db = require("./config/db");
db();

// enabled json
app.use(express.json());

// enabled urlencoded
app.use(express.urlencoded({ extended: false }));

// enable cors (user request)
app.use(cors());

//! routes middleware
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

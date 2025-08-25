const express = require("express");
const db = require("./config/db");
// var cors = require("cors");

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

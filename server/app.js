const express = require("express");
const db = require("./db");
var cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/profile", (request, response) => {
  // ...
});

app.get("/order/:orderId", (request, response) => {
  //
});

app.post("/order", (request, response) => {
  //
});

app.get("/order", (request, response) => {
  //
});

app.get("/layanan-laundry", (request, response) => {
  //
});

app.put("/order/:id", (request, response) => {
  //
});

app.get("/pembayaran", (request, response) => {
  //
});

app.put("/pembayaran/:id", (request, response) => {
  //
});

app.get("/layanan-laundry", (request, response) => {
  //
});

app.post("/layanan-laundry", (request, response) => {
  //
});

app.put("/layanan-laundry/:id", (request, response) => {
  //
});

app.delete("/layanan-laundry", (request, response) => {
  //
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

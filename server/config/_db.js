// //! Konfigurasi Database menggunakan MongoDB Client
// const { MongoClient, ObjectId } = require("mongodb");
// const uri = "mongodb://localhost:27017";
// const dbName = "db_laundry";

// const client = new MongoClient(uri, {
//   //* parser URL baru yang lebih aman dan fleksibel
//   useNewUrlParser: true,

//   //* mesin koneksi baru yang lebih modern, konsisten, dan mengurangi warning/bug
//   useUnifiedTopology: true,
// });

// client.connect((err, client) => {
//   if (err) {
//     return console.log("Unable to connect to the database");
//   }
//   console.log("Database connected!");

//   // Menambahkan 1 (satu) data collection mahasiswa
//   const db = client.db(dbName);
//   // db.createCollection("laundry");

//   //? Menambahkan 1 (satu) data collection laundry
//   // db.collection("laundry").insertOne(
//   //   {
//   //     customerName: "Andi Pratama",
//   //     customerPhone: "082134567890",
//   //     address: "Komplek Griya Asri Blok B2, Surabaya",
//   //     laundryItems: [
//   //       { item: "Kaos", quantity: 5, pricePerItem: 3000 },
//   //       { item: "Celana Pendek", quantity: 3, pricePerItem: 4000 },
//   //     ],
//   //     totalPrice: 27000,
//   //     status: "Finished",
//   //     createdAt: new Date("2025-08-24T15:45:00Z"),
//   //   },
//   //   (err, result) => {
//   //     if (err) {
//   //       return console.log("gagal menambahkan data laundry");
//   //     }
//   //     console.log(result);
//   //   }
//   // );

//   //? menambahkan banyak data sekaligus
//   // db.collection("laundry").insertMany(
//   //   [
//   //     {
//   //       customerName: "Rina Marlina",
//   //       customerPhone: "085612345678",
//   //       address: "Perumahan Green Hills, Blok C No. 7, Yogyakarta",
//   //       laundryItems: [
//   //         { item: "Selimut", quantity: 1, pricePerItem: 20000 },
//   //         { item: "Sprei", quantity: 2, pricePerItem: 8000 },
//   //       ],
//   //       totalPrice: 36000,
//   //       status: "Pending",
//   //       createdAt: new Date("2025-08-24T15:45:00Z"),
//   //     },
//   //     {
//   //       customerName: "Dewi Lestari",
//   //       customerPhone: "081377788899",
//   //       address: "Jl. Diponegoro No. 12, Medan",
//   //       laundryItems: [
//   //         { item: "Jaket", quantity: 2, pricePerItem: 12000 },
//   //         { item: "Rok", quantity: 3, pricePerItem: 6000 },
//   //       ],
//   //       totalPrice: 42000,
//   //       status: "On Process",
//   //       createdAt: new Date("2025-08-24T15:45:00Z"),
//   //     },
//   //   ],
//   //   (err, result) => {
//   //     if (err) {
//   //       return console.log("gagal menambahkan data laundry");
//   //     }
//   //     console.log(result);
//   //   }
//   // );

//   //? Menampilkan semua data laundry
//   // db.collection("laundry")
//   //   .find()
//   //   .toArray((err, result) => {
//   //     if (err) {
//   //       return console.log("gagal menampilkan data laundry");
//   //     }
//   //     console.log(result);
//   //   });

//   //? Menampilkan data laundry berdasarkan id
//   // db.collection("laundry")
//   //   .find({ _id: ObjectId("68ac67686faf4046b8c967f6") })
//   //   .toArray((err, result) => {
//   //     if (err) {
//   //       return console.log("gagal menampilkan data laundry");
//   //     }
//   //     console.log(result);
//   //   });

//   //? Mengubah data berdasarkan id
//   // ini sebuah promise
//   // db.collection("laundry")
//   //   .updateOne(
//   //     { _id: ObjectId("68ac67686faf4046b8c967f6") },
//   //     {
//   //       $set: {
//   //         customerName: "Raziq Maulana",
//   //         customerPhone: "082134567890",
//   //         address: "Komplek Griya Asri Blok B2, Surabaya",
//   //         laundryItems: [
//   //           { item: "Kaos", quantity: 5, pricePerItem: 3000 },
//   //           { item: "Celana Pendek", quantity: 3, pricePerItem: 4000 },
//   //         ],
//   //         totalPrice: 27000,
//   //         status: "Finished",
//   //         createdAt: new Date("2025-08-24T15:45:00Z"),
//   //       },
//   //     }
//   //   )
//   //   .then((result) => {
//   //     console.log(result);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });

//   //? Mengubah data lebih dari 1, berdasarkan kriteria
//   // ini sebuah promise
//   // db.collection("laundry")
//   //   .updateMany({ status: "Pending" }, { $set: { status: "On Process" } })
//   //   .then((result) => {
//   //     console.log(result);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });

//   //? Menghapus data berdasarkan id
//   // ini sebuah promise
//   // db.collection("laundry")
//   //   .deleteOne({ _id: ObjectId("68ac67686faf4046b8c967f6") })
//   //   .then((result) => {
//   //     console.log(result);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });

//   //? Menghapus data lebih dari 1, berdasarkan kriteria
//   // ini sebuah promise
//   // db.collection("laundry")
//   //   .deleteMany({ status: "Pending" })
//   //   .then((result) => {
//   //     console.log(result);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });
// });

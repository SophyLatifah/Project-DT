import { useEffect, useState } from "react";

export default function Tracking() {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const storedOrder = localStorage.getItem("orderData");
  //   if (storedOrder) {
  //     setOrder(JSON.parse(storedOrder));
  //   }
  // }, []);

  // if (!order) {
  //   return (
  //     <div className="p-6">
  //       <h2 className="text-2xl font-bold">No order found</h2>
  //       <p className="text-gray-600">Silakan buat order dulu 👕</p>
  //     </div>
  //   );
  // }

  // const steps = [
  //   "Order Received",
  //   "Washing",
  //   "Drying",
  //   "Ironing",
  //   "Ready for Pickup/Delivery",
  //   "On the way",
  //   "Delivered",
  // ];

useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders"); 
        if (!res.ok) throw new Error("Gagal fetch data orders");
        const data = await res.json();
        console.log("Order dari API:", data);

        setOrder(data);
      } catch (err) {
        console.error("Error fetch order:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

  if (!order) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">No order found</h2>
        
        <p className="text-gray-600">Silakan buat order dulu 👕</p>
      </div>
    );
  }

  const steps = [
    "Order Received",
    "Washing",
    "Drying",
    "Ironing",
    "Ready for Pickup/Delivery",
    "On the way",
    "Delivered",
  ];


  return (
    <div className="p-6">
      {/* Order Details */}
      <div className="bg-[#FFB701] p-6 rounded-lg mb-5 shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-white">Order Details</h3>

        {/* Grid 2 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {/* Kolom Kiri */}
          <div className="grid grid-cols-[120px_1fr] gap-y-2">
            <span>Order ID</span>
            <span className="font-medium">: {order.orderId}</span>

            <span>Order Date</span>
            <span className="font-medium">: {order.orderDate}</span>

            <span>Name</span>
            <span className="font-medium">: {order.name}</span>

            <span>Phone</span>
            <span className="font-medium">: +62xxxxxxxxxx</span>

            <span>Address</span>
            <span className="font-medium">: {order.address}</span>
          </div>

          {/* Kolom Kanan */}
          <div className="grid grid-cols-[120px_1fr] gap-y-2">
            <span>Quantity</span>
            <span className="font-medium">: {order.quantity}</span>

            <span>Payment</span>
            <span className="font-medium">: {order.payment}</span>

            <span>Total Cost</span>
            <span className="font-medium">: 
              Rp {order.totalCost.toLocaleString("id-ID")}
            </span>

            <span>ETA</span>
            <span className="font-medium">: {order.eta}</span>

            <span>Service Type</span>
            <span className="font-medium">: {order.service}</span>
          </div>
        </div>
      </div>

      {/* Tracking Status */}
      <h3 className="text-xl font-semibold mb-4">Track Your Order!</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg text-center font-medium shadow-md 
              ${
                step === order.status
                  ? "bg-[#219EBC] text-white"
                  : "bg-[#8ECAE6] text-black"
              }
            `}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}


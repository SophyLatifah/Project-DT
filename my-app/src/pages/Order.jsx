import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Order() {

  const Navigate = useNavigate();
  const [Username, setUsername] = useState("");

  //state untuk form
  const [partner, setPartner] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [service, setService] = useState("Cuci Lipat");
  const [notes, setNotes] = useState("");
  const [payment, setPayment] = useState("Transfer Bank");
  const [promo, setPromo] = useState("");

  // hitung total cost otomatis
  const pricePerItem = 1500;
  const deliveryFee = 7000;
  const totalCost = quantity > 0 ? quantity * pricePerItem + deliveryFee : 0;

  useEffect(() => {
    // Ambil username dari localStorage
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!partner || !address || !quantity || !service || !payment) 
    {
      alert("Please fill in all required fields.");
      return;
    }

    // bikin object order
    const orderData = {
    orderId: Date.now(),
    orderDate: new Date().toLocaleDateString("id-ID"),
    name: Username,
    partner,
    address,
    quantity,
    service,
    notes,
    payment,
    promo,
    totalCost,
    eta: "2 hari",
    status: "Order Received"
    }
    
    // Simpan ke localStorage
     localStorage.setItem("orderData", JSON.stringify(orderData));

    // redirect ke halaman tracking
    Navigate("/tracking");
  };

  return (
    <div className="mih-h-screen bg-gray-50 p-6">
      <section >
        <h2 className="font-extrabold text-4xl">Hai, {Username || "Username"}!</h2>
        <p className="mt-2 text-xl">Yuk pilih layanan laundry mu.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Form Order */}
        <div className="bg-[#8ECAE6] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Start Your Order
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Laundry Partner & Address
              </label>
              <input
                type="text"
                value={partner}
                onChange={(e) => setPartner(e.target.value)}
                className="w-full bg-gray-100  p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Pickup & Delivery Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-gray-100 p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Clothing Quantity
              </label>
              <input
                type="number"
                min="0"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full bg-gray-100  p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Service Type</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="bg-gray-100 w-full p-2 border rounded"
              >
                <option value="Cuci Lipat">Cuci Lipat</option>
                <option value="Cuci Setrika">Cuci Setrika</option>
                <option value="Dry Clean">Dry Clean</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-gray-100  p-2 border rounded"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Form Payment */}
        <div className="bg-[#8ECAE6] p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Start Your Payment
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Total Cost</label>
                <input
                  type="text"
                  value={`Rp ${totalCost.toLocaleString("id-ID")}`}
                  readOnly
                  className="w-full p-2 border rounded bg-gray-100"
                />
              </div>

              <div className="text-sm text-gray-700 p-2 rounded">
                <p>Details:</p>
                <p>1. The price for washing clothes is Rp 1,500 per piece.</p>
                <p>2. The delivery and pickup service fee is Rp 7,000.</p>
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Payment Method
                </label>
                <select
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-full bg-gray-100 p-2 border rounded"
                >
                  <option value="Transfer Bank">Transfer Bank</option>
                  <option value="COD">COD</option>
                  <option value="E-Wallet">E-Wallet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Promo</label>
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  className="bg-gray-100 w-full p-2 border rounded"
                />
              </div>
            </form>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full py-3 bg-[#FFB701] text-black font-semibold rounded hover:bg-yellow-400 transition"
          >
            Pick Up Now
          </button>
        </div>
      </section>
    </div>
  );
}

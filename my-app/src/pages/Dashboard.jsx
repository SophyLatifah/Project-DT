import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const Navigate = useNavigate();
  const [Username, setUsername] = useState("");

  
  useEffect(() => {
    // Ambil username dari localStorage
    const storedName = localStorage.getItem("username");
    if (storedName) {
      setUsername(storedName);
    }
  }, []);

  return (
    <div>
      {/* Kotak sambutan */}
      <section className="mt-25">
        <div className="mt-10 gap-8  px-10 mt-4 mx-auto pb-12">
          {/* Cards Section */}
          <div className="pb-10 px-10 p-3 rounded-lg shadow-md bg-[#FFB701] ">
            <h2 className="mt-5 font-extrabold text-white text-4xl">Hai, {Username || "Username"}!</h2>
            <p className="mt-4 text-xl">Sudah siap kami jemput cucianmu hari ini?</p>

            {/* Tombol Order */}
          <button
            onClick={() => Navigate("/order")}
              className="mt-15 px-6 py-2 bg-white font-semibold rounded"
            >
              Order Now
          </button>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section>

      </section>
    </div>
  );
}

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
      <section className="">
        <div className="gap-8  mx-auto items-center">
          {/* Cards Section */}
          <div className="pb-10 px-10 p-3 rounded-lg shadow-md bg-[#FFB701] ">
            <h2 className="mt-5 font-extrabold text-white text-4xl">Hai, {Username || "Username"}!</h2>
            <p className="mt-4 text-xl">Sudah siap kami jemput cucianmu hari ini?</p>

            {/* Tombol Order */}
          <div className="flex w-full items-center">
          <button
            onClick={() => Navigate("/order")}
              className="ml-auto text-center px-6 py-2  bg-white font-semibold rounded"
            >
              Order Now
          </button>
          </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section>
        <h2 className="text-lg font-bold mt-10">TOP LAUNDRY PARTNERS!</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5 max-w-5xl px-5 mx-auto pb-12">
          {/* Cards 1*/}
          <div className="p-6 border rounded-lg shadow-md bg-[#8ECAE6]">
            <h2 className="text-4xl text-center">🧼</h2>
            <h3 className="text-xl text-center text-white font-semibold ">Fresh & Fold Laundry</h3>
            <p className="mt-5 text-black text-base">
            <>
                <li>Cimahi Tengah</li>
                <li>Spesialis cuci lipat harian, wangi tahan lama.</li>
            </>
            </p>
          </div>

          {/* Cards 2*/}
          <div className="p-6 border rounded-lg shadow-md bg-[#209EBB]">
            <h2 className="text-4xl text-center">🧼</h2>
            <h3 className="text-xl text-center text-white font-semibold ">BubbleWash Clean</h3>
            <p className="mt-5 text-black text-base">
            <>
                <li>Cimahi Utara</li>
                <li>Ramah lingkungan dengan detergen organik.</li>
            </>
            </p>
          </div>

          {/* Cards 3*/}
          <div className="p-6 border rounded-lg shadow-md bg-[#8ECAE6]">
            <h2 className="text-4xl text-center">🧼</h2>
            <h3 className="text-xl text-center text-white font-semibold ">Rapih Bersih Laundry</h3>
            <p className="mt-5 text-black text-base">
            <>
                <li>Cimahi Tengah</li>
                <li>Spesialis cuci lipat harian, wangi tahan lama.</li>
            </>
            </p>
          </div>

          {/* Cards 4*/}
          <div className="p-6 border rounded-lg shadow-md bg-[#209EBB]">
            <h2 className="text-4xl text-center">🧼</h2>
            <h3 className="text-xl text-center text-white font-semibold ">EcoWash Cimahi</h3>
            <p className="mt-5 text-black text-base">
            <>
                <li>Cimahi Tengah</li>
                <li>Spesialis cuci lipat harian, wangi tahan lama.</li>
            </>
            </p>
          </div>

          

        </div>
      </section>
    </div>
  );
}

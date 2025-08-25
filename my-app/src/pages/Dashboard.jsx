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

        <div>
          {/* Cards 1*/}
          <div>

          </div>

          {/* Cards 2*/}
          <div>

          </div>

          {/* Cards 3*/}
          <div>

          </div>

          {/* Cards 4*/}
          <div>

          </div>
          
        </div>
      </section>
    </div>
  );
}

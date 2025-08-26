import { useNavigate } from "react-router-dom";
import LaundryImg from "../assets/Laundry.jpg";

export default function Home() {
  const Navigate = useNavigate();

  return (
    <div>
    <section 
      className="mt-16 pb-15 pt-15 bg-[#209EBB] w-full max-w-full">
      <div className="max-w-4xl px-10">
      
      <h1 className="text-4xl font-bold text-white">WELCOME TO KLEANZY!</h1>
      <p className="mt-2 text-white">Solusi laundry praktis, cepat, dan terpercaya.</p>
 
      <button
      onClick={() => Navigate("/login")}
        className="mt-15 px-6 py-2 bg-[#FFB701] text-white font-semibold rounded hover:bg-yellow-500 shadow-md transition-colors"
      >
        Login
      </button>
      </div>
    </section>

    <section>
      <h2 className="text-lg text-center font-bold mt-10">OUR SERVICE</h2>
    
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl px-10 mt-4 mx-auto pb-12">
        {/* Card 1 */}
        <div className=" p-6 shadow-xl rounded-lg shadow-md bg-[#8ECAE6]">
          <h2 className="text-4xl text-center">🚗</h2>
          <h3 className="text-xl text-center text-white font-semibold">Antar Jemput Cucian</h3>
          <p className="mt-2 text-black text-center text-base">Tinggal pesan, kurir kami siap jemput cucian kotor Anda dan antar kembali baju bersih siap pakai.</p>
        </div>

        {/* Card 2 */}
        <div className="shadow-xl bg-[#209EBB] p-6 rounded-lg">
          <h2 className="text-4xl text-center">🔍</h2>
          <h3 className="text-xl text-center text-white font-semibold"> Cari Laundry Terdekat</h3>
          <p className="mt-2 text-black text-center">Temukan tempat laundry terbaik di sekitar Anda.</p>
        </div>

        {/* Card 3 */}
        <div className=" p-6 rounded-lg shadow-xl bg-[#8ECAE6]">
          <h2 className="text-4xl text-center">🧺</h2>
          <h3 className="text-xl text-center text-white font-semibold">Metode Pencucian</h3>
          <p className="mt-2 text-black text-center">Bebas pilih metode pencucian pakaian yang paling cocok untuk Anda.</p>
        </div>
      </div>
    </section>

    </div>
  );
}

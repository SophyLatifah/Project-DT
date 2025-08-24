import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();

  return (
    <div>
    <section className="mt-16 pb-15 pt-15 bg-[#209EBB] w-full max-w-full">
      <div className="max-w-4xl px-10">
      <h1 className="text-4xl font-bold text-white">WELCOME TO KLEANZY!</h1>
      <p className="mt-2 text-white">Solusi laundry praktis, cepat, dan terpercaya.</p>

      <button
      onClick={() => Navigate("/login")}
        className="mt-15 px-6 py-2 bg-[#FFB701] text-white font-semibold rounded"
      >
        Login
      </button>
      </div>
    </section>

    <section>
      <h2 className="text-lg text-center font-bold mt-2">OUR SERVICE</h2>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl px-10 mt-4 mx-auto">
        {/* Card 1 */}
        <div className=" p-6 border rounded-lg shadow-md bg-[#8ECAE6]">
    
          <h3 className="text-4xl text-center text-white text-lg font-semibold">🚗 Antar Jemput Cucian</h3>
          <p className="mt-2 text-black text-center">Tinggal pesan, kurir kami siap jemput cucian kotor Anda dan antar kembali baju bersih siap pakai.</p>

        </div>

        {/* Card 2 */}
        <div className="bg-[#209EBB] p-6 rounded-lg shadow-md">

          <h3 className="text-4xl text-center text-white text-lg font-semibold">🔍 Cari Laundry Terdekat</h3>
          <p className="mt-2 text-black text-center">Temukan tempat laundry terbaik di sekitar Anda.</p>
        </div>

        {/* Card 3 */}
        <div className=" p-6 border rounded-lg shadow-md bg-[#8ECAE6]">
          <h3 className="text-4xl text-center text-white text-lg font-semibold">🧺 Metode Pencucian</h3>
          <p className="mt-2 text-black text-center">Bebas pilih metode pencucian pakaian yang paling cocok untuk Anda.</p>
        </div>
      </div>
    </section>

    </div>
  );
}

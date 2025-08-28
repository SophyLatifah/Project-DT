import { useNavigate } from "react-router-dom";


import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";

export default function Home() {
  const Navigate = useNavigate();

  return (
    <div>
    <section 
      className="bg-gradient-to-r from-[#209EBB] to-sky-300 relative mt-16 pb-15 pt-15 w-full max-w-full">
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

      {/* Bubble Sabun */}
        <div className="absolute bottom-0 left-10 w-12 h-12 bg-white/30 rounded-full animate-bubble"></div>
        <div className="absolute bottom-0 left-1/3 w-8 h-8 bg-white/20 rounded-full animate-bubble delay-1000"></div>
        <div className="absolute bottom-0 left-2/3 w-16 h-16 bg-white/25 rounded-full animate-bubble delay-2000"></div>
        <div className="absolute bottom-0 right-10 w-10 h-10 bg-white/30 rounded-full animate-bubble delay-3000"></div>
        <div className="absolute bottom-0 left-100 w-12 h-12 bg-white/30 rounded-full animate-bubble"></div>
        <div className="absolute bottom-0 left-50 w-8 h-8 bg-white/20 rounded-full animate-bubble delay-1000"></div>
        <div className="absolute bottom-0 right-80 w-10 h-10 bg-white/30 rounded-full animate-bubble delay-3000"></div>
        <div className="absolute bottom-0 left-200 w-8 h-8 bg-white/20 rounded-full animate-bubble delay-1000"></div>
        <div className="absolute bottom-0 left-250 w-12 h-12 bg-white/30 rounded-full animate-bubble"></div>
    </section>

    <section>
      <h2 className="text-2xl mb-8 text-center font-bold mt-10">OUR SERVICE</h2>
    
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl px-10 mx-auto pb-12">
        {/* Card 1 */}
        <div 
        className=" p-6 rounded-xl shadow-md bg-[#8ECAE6] transform transition duration-300 hover:scale-105"
        >
          <h2 className="text-4xl text-center">🚗</h2>
          <h3 className="text-xl text-center text-white font-semibold">Antar Jemput Cucian</h3>
          <p className="mt-2 text-black text-center text-base">Tinggal pesan, kurir kami siap jemput cucian kotor Anda dan antar kembali baju bersih siap pakai.</p>
        </div>

        {/* Card 2 */}
        <div className="shadow-xl bg-[#209EBB] p-6 rounded-xl transform transition duration-300 hover:scale-105">
          <h2 className="text-4xl text-center">🔍</h2>
          <h3 className="text-xl text-center text-white font-semibold"> Cari Laundry Terdekat</h3>
          <p className="mt-2 text-black text-center">Temukan tempat laundry terbaik di sekitar Anda.</p>
        </div>

        {/* Card 3 */}
        <div className=" p-6 rounded-xl shadow-xl bg-[#8ECAE6] transform transition duration-300 hover:scale-105">
          <h2 className="text-4xl text-center">🧺</h2>
          <h3 className="text-xl text-center text-white font-semibold">Metode Pencucian</h3>
          <p className="mt-2 text-black text-center">Bebas pilih metode pencucian pakaian yang paling cocok untuk Anda.</p>
        </div>
      </div>
    </section>

    <section className="bg-gray-50 py-16">
      <h2 className="text-2xl font-bold text-center mb-12">
        Apa Kata Pelanggan?
      </h2>

    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
      <div className="bg-white shadow-md p-6 rounded-xl">
        <p className="text-gray-600 italic">
          "Layanan cepat, baju langsung wangi dan rapi. Highly recommended!"
        </p>
        <div className="mt-4 flex items-center space-x-3">
          <img src={user1} alt="user" className="w-10 h-10 rounded-full"/>
          <span className="font-semibold">Rina, Jakarta</span>
        </div>
      </div>

      <div className="bg-white shadow-md p-6 rounded-xl">
        <p className="text-gray-600 italic">
          "Kurirnya ramah, jemput antar tepat waktu. Udah kayak punya asisten pribadi."
        </p>
        <div className="mt-4 flex items-center space-x-3">
          <img src={user2} alt="user" className="w-10 h-10 rounded-full"/>
          <span className="font-semibold">Andi, Bandung</span>
        </div>
      </div>

      <div className="bg-white shadow-md p-6 rounded-xl">
        <p className="text-gray-600 italic">
          "Pilih metode cuci sendiri, jadi sesuai kebutuhan. Keren banget!"
        </p>
        <div className="mt-4 flex items-center space-x-3">
          <img src={user3} alt="user" className="w-10 h-10 rounded-full"/>
          <span className="font-semibold">Lina, Surabaya</span>
        </div>
      </div>
    </div>
  </section>

  <section className="py-12 bg-white">
  <h2 className="text-2xl font-bold text-center mb-8">
    Dipercaya Oleh :
  </h2>
  <div className="flex justify-center items-center gap-12 flex-wrap">
    <img src={logo1} alt="Partner 1" className="h-12 grayscale hover:grayscale-0 transition"/>
    <img src={logo2} alt="Partner 2" className="h-12 grayscale hover:grayscale-0 transition"/>
    <img src={logo3} alt="Partner 3" className="h-12 grayscale hover:grayscale-0 transition"/>
    <img src={logo4} alt="Partner 4" className="h-12 grayscale hover:grayscale-0 transition"/>
  </div>
</section>

    </div>
  );
}

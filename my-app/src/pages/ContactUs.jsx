import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Kami selalu senang mendengar dari Anda! Hubungi Kleanzy untuk
        pertanyaan, masukan, atau kerja sama.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Kiri - Info Kontak */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#209EBB]" />
              <span>
                <strong>Alamat:</strong> Jl. Cimahi No. 123, Jawa Barat
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-[#209EBB]" />
              <span>
                <strong>Telepon/WhatsApp:</strong> +62 891-2345-6789
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-[#209EBB]" />
              <span>
                <strong>Email:</strong> support@kleanzy.com
              </span>
            </li>
          </ul>

          <div className="mt-6">
            <p className="font-medium mb-2">Ikuti kami:</p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/kleanzy.id"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-[#E1306C]"
              >
                <Instagram className="w-5 h-5" /> @kleanzy.id
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
              >
                <Facebook className="w-5 h-5" /> Kleanzy Official
              </a>
            </div>
          </div>
        </div>

        {/* Kanan - Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#209EBB] outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#209EBB] outline-none"
            />
            <textarea
              placeholder="Pesan"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#209EBB] outline-none"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-[#209EBB] text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-[#1b8aa5] transition"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>

      {/* Map Embed */}
      <div className="mt-12 rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

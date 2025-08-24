export default function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="mt-16 px-10 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">CONTACT US</h1>
        <p className="mb-6">
          Kami selalu senang mendengan dari Anda!
          Hubungi Kleanzy untuk pertanyaan, masukan, atau kerja sama.
        </p>

        <div>
        <p>📍 <span className="font-semibold">Alamat : </span>Jl. Cimahi No. 123, Jawa Barat</p>  
        <p>📞 <span className="font-semibold">Telepon/WhatsApp : </span>+62 891-2345-6789</p>  
        <p>✉️ <span className="font-semibold">Email : </span>support@kleanzy.com</p>  
        </div>   

        <div className="mt-6">
        <p>Ikuti kami di media sosial:</p>
        <p>🌐 Instagram: <a href="https://instagram.com/kleanzy.id" className="text-blue-500 underline">@kleanzy.id</a></p>
        <p>🌐 Facebook: Kleanzy Official</p>
        </div>    
      </section>
    </div>
  );
}
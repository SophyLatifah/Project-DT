import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // biar form nggak refresh halaman

    // Simpan username ke localStorage
    localStorage.setItem("username", username);

    // Redirect ke dashboard
    //navigate("/dashboard");
  }; 

  return (
    <div>
      <section className="mt-16 pt-10 flex-grow flex justify-center flex-col space-y-4 px-10">
        <h1 className="text-3xl font-bold text-center text-[#023047] ">WELCOME TO KLEANZY!</h1>
        <p className="mt-2 text-center text-gray-600">Solusi laundry praktis, cepat, dan terpercaya</p>
      </section>

      {/* Login Form */}
      <div className="bg-[#8ECAE6] mx-auto mt-10 p-8 w-96 rounded-lg shadow-2xl">
        <h2 className="text-center font-bold text-lg mb-6 text-white">LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Username :</label>
            <div className="flex bg-white items-center rounded px-2 py-1">
              <input 
                type="text" 
                className="flex-grow outline-none" 
                placeholder="Enter Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required />
            </div>       
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1">Password :</label>
            <div className="flex bg-white items-center rounded px-2 py-1">
              <input 
              type="password" 
              className="flex-row outline-none" 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
              <span className="material-icons text-gray-500"></span>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2"/>
            <label htmlFor="remember" className="text-sm">Remember Me?</label>
          </div>
          <button 
          onClick={() => Navigate("/dashboard")}
            type="submit" 
            className="bg-[#FFB701] w-full py-2 rounded text-white font-semibold">
              Login
              </button>
        </form>
      </div>
    </div>
   );
  }
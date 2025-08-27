import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // biar form nggak refresh halaman
  
  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Login failed");
      return;
    }

    // Simpan token di localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.user.username); 

    Navigate("/dashboard");
  } catch (err) {
    setError("An error occurred. Please try again.");
    console.error("Login error:", err);
  }
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
          {error && (<p className="text-red-500 text-sm mb-4">{error}</p>)}
          <div className="mb-4">
            <label className="block text-sm mb-1">Email :</label>
            <div className="flex bg-white items-center rounded px-2 py-1">
              <input 
                type="email" 
                className="flex-grow outline-none" 
                placeholder="Enter Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            </div>       
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1">Password :</label>
            <div className="flex bg-white items-center rounded px-2 py-1">
              <input 
              type="password" 
              className="flex-grow outline-none" 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2"/>
            <label htmlFor="remember" className="text-sm">Remember Me?</label>
          </div>
          <button 
            type="submit" 
            className="bg-[#FFB701] w-full py-2 rounded text-white font-semibold hover:bg-yellow-500 transition-colors shadow-md">
              Login
              </button>
        </form>
      </div>
    </div>
   );
  }
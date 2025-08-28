// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Login() {
//   const Navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault(); // biar form nggak refresh halaman
  
//   try {
//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.message || "Login failed");
//       return;
//     }

//     // Simpan token di localStorage
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("username", data.user.username); 

//     Navigate("/dashboard");
//   } catch (err) {
//     setError("An error occurred. Please try again.");
//     console.error("Login error:", err);
//   }
//   }; 

//   return (
//     <div>
//       <section className="mt-16 pt-10 flex-grow flex justify-center flex-col space-y-4 px-10">
//         <h1 className="text-3xl font-bold text-center text-[#023047] ">WELCOME TO KLEANZY!</h1>
//         <p className="mt-2 text-center text-gray-600">Solusi laundry praktis, cepat, dan terpercaya</p>
//       </section>

//       {/* Login Form */}
//       <div className="bg-[#8ECAE6] mx-auto mt-10 p-8 w-96 rounded-4xl shadow-2xl">
//         <h2 className="text-center font-bold text-lg mb-6 text-white">LOGIN</h2>
//         <form onSubmit={handleLogin}>
//           {error && (<p className="text-red-500 text-sm mb-4">{error}</p>)}
//           <div className="mb-4">
//             <label className="block text-sm mb-1">Email :</label>
//             <div className="flex bg-white items-center rounded px-2 py-1">
//               <input 
//                 type="email" 
//                 className="flex-grow outline-none" 
//                 placeholder="Enter Email" 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required />
//             </div>       
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm mb-1">Password :</label>
//             <div className="flex bg-white items-center rounded px-2 py-1">
//               <input 
//               type="password" 
//               className="flex-grow outline-none" 
//               placeholder="Enter Password" 
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required 
//               />
//             </div>
//           </div>
//           <div className="mb-4 flex items-center">
//             <input type="checkbox" id="remember" className="mr-2"/>
//             <label htmlFor="remember" className="text-sm">Remember Me?</label>
//           </div>
//           <button 
//             type="submit" 
//             className="bg-[#FFB701] w-full py-2 rounded text-white font-semibold hover:bg-yellow-500 transition-colors shadow-md">
//               Login
//               </button>
//         </form>
//       </div>
//     </div>
//    );
//   }

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.username);
      Navigate("/dashboard");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white">
      {/* Header */}
      <section className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          WELCOME TO KLEANZY!
        </h1>
        <p className="mt-2 text-gray-600">
          Solusi laundry praktis, cepat, dan terpercaya
        </p>
      </section>

      {/* Login Card */}
      <div className="bg-white/80 backdrop-blur-lg mx-auto p-8 w-96 rounded-2xl shadow-2xl">
        <h2 className="text-center font-bold text-lg mb-6 text-gray-700">
          LOGIN
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">📧</span>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="w-4 h-4 text-blue-500 rounded" />
              Remember Me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!username || !email || !password) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     const data = {
//       username,
//       email,
//       password,
//     };

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await res.json();
//       if (!result) {
//         setError(data.message || "Register failed");
//         return;
//       }

//       setSuccess("Register berhasil! Silakan login 🚀");
//       setError("");

//       // Redirect ke halaman login setelah 2 detik
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//       console.error("Register error:", err);
//     }
//   };

//   return (
//     <div>
//       <section className="mt-16 pt-10 flex-grow flex justify-center flex-col space-y-4 px-10">
//         <h1 className="text-3xl font-bold text-center text-[#023047] ">
//           REGISTER ACCOUNT
//         </h1>
//         <p className="mt-2 text-center text-gray-600">
//           Daftar dulu disini ya.... biar bisa login ke dashboard Kleanzy!
//         </p>
//       </section>

//       {/* Register Form */}
//       <div className="bg-[#8ECAE6] mx-auto mt-10 p-8 w-96 rounded-4xl shadow-2xl">
//         <h2 className="text-center font-bold text-lg mb-6 text-white">
//           REGISTRASI
//         </h2>
//         <form onSubmit={handleRegister}>
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//           {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

//           <div className="mb-4">
//             <label className="block text-sm mb-1">Username :</label>
//             <div className="flex bg-white items-center rounded px-2 py-1">
//               <input
//                 type="text"
//                 className="flex-grow outline-none"
//                 placeholder="Enter Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm mb-1">Email :</label>
//             <div className="flex bg-white items-center rounded px-2 py-1">
//               <input
//                 type="email"
//                 className="flex-grow outline-none"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm mb-1">Password :</label>
//             <div className="flex bg-white items-center rounded px-2 py-1">
//               <input
//                 type="password"
//                 className="flex-grow outline-none"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="bg-[#FFB701] w-full py-2 rounded-lg text-white font-semibold hover:bg-yellow-500 transition-colors shadow-md"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    const data = { username, email, password };

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!result) {
        setError(data.message || "Register failed");
        return;
      }

      setSuccess("Register berhasil! Silakan login 🚀");
      setError("");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Register error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-2">
        CREATE YOUR ACCOUNT
      </h1>
      <p className="text-gray-600 mb-8">
        Daftar dulu biar bisa login ke dashboard Kleanzy!
      </p>

      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-700">
          REGISTRASI
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <span className="absolute left-3 top-2.5 text-gray-400">👤</span>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="absolute left-3 top-2.5 text-gray-400">📧</span>
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

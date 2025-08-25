import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DashboardLayout() {
  const location = useLocation();
  const [Username, setUsername] = useState("");

    useEffect(() => {
        const storedName = localStorage.getItem("username");
        if (storedName) {
            setUsername(storedName);
            }
    }, []);

  //bikin judul header dinamis sesuai route
    const getTitle = () => {
        if (location.pathname === "/dashboard") return "Dashboard";
        if (location.pathname === "/order") return "Order";
        if (location.pathname === "/tracking") return "Tracking";
        return "";
    };

    return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header dinamis berdasarkan route */}
        <header className="flex justify-beetwen items-center bg-white p-4 shadow">
          <h1 className="text-3xl ">{getTitle()}</h1>
          <div className="ml-auto flex items-center space-x-4">
          <span className="text font-semibold">👤 {Username || "User"}</span>
          </div>
        </header>
        
        
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet /> {/* <-- di sinilah page child (Dashboard, Order, Tracking) muncul */}
        </main>
      </div>
    </div>
  );
}

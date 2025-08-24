// src/components/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-48 bg-teal-600 text-white h-screen p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold mb-4">Kleanzy</h2>
        <ul className="flex flex-col gap-2">
          <li>Dashboard</li>
          <li>Order</li>
          <li>Tracking</li>
        </ul>
      </div>
      <button className="bg-yellow-400 px-4 py-2 rounded">Logout</button>
    </aside>
  );
};

export default Sidebar;

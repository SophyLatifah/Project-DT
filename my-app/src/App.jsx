import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import Dashboard from "src/pages/Dashboard";
import Order from "src/pages/Order";
import Tracking from "src/pages/Tracking";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </BrowserRouter>
  );
}

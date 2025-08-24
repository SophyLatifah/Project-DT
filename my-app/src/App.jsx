import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";
import About from "./pages/About";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-1 pb-12">
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<Order />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

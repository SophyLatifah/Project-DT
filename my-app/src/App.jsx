import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";

// dashboard pages
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";


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




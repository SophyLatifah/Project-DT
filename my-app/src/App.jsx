import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";

// Layouts
import Main from "./layouts/Main";
import Protected from "./layouts/Protected";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";

// Protected pages
import Dashboard from "./pages/Dashboard";
import Order from "./pages/Order";
import Tracking from "./pages/Tracking";


export default function App() {
  return (

    <>
     
      
      <main className="flex-1 pb-12">
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Main><Home /></Main>} />
        <Route path="/about" element={<Main><About /></Main>} />
        <Route path="/contact" element={<Main><ContactUs /></Main>} />
        <Route path="/login" element={<Main><Login /></Main>} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected> } />
        <Route path="/order" element={<Protected><Order /></Protected>} />
        <Route path="/tracking" element={<Protected> <Tracking /></Protected>} />
        
      </Routes>
      </main>
      <Footer />
    </>

  );
}




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Layouts
import Main from "./layouts/Main";
import Protected from "./layouts/Protected";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Protected pages
import Dashboard from "./pages/admin/Dashboard";
import Order from "./pages/admin/order";
import Tracking from "./pages/admin/Tracking";

export default function App() {
  return (
    <>
      <main className="flex-1 pb-12">
        <Routes>
          {/* General Routes */}

          <Route
            path="/"
            element={
              <Main>
                <Home />
              </Main>
            }
          />
          <Route
            path="/about"
            element={
              <Main>
                <About />
              </Main>
            }
          />
          <Route
            path="/contact"
            element={
              <Main>
                <ContactUs />
              </Main>
            }
          />
          <Route
            path="/login"
            element={
              <Main>
                <Login />
              </Main>
            }
          />
          <Route
            path="/register"
            element={
              <Main>
                <Register />
              </Main>
            }
          />

          {/* Protected Routes */}
          <Route element={<Protected />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order" element={<Order />} />
            <Route path="/tracking" element={<Tracking />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

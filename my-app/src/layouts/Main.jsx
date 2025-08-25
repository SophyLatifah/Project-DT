import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

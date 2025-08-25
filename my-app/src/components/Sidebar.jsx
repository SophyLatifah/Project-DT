import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className=" w-32 bg-[#209EBB] z-40 h-screen p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-10 text-white">KLEANZY</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="text-white hover:font-bold">
          Dashboard
        </Link>
        <Link to="/order" className="text-white hover:font-bold">
          Order
        </Link>
        <Link to="/tracking" className="text-white hover:font-bold">
          Tracking
        </Link>
        <div className="mt-auto flex flex-col justify-between">
        <Link to="/" className="text-white hover:font-bold mt-0  py-3 text-center bg-[#FFB701] font-semibold rounded hover:bg-yellow-500 transition-colors shadow-xl">
          Logout
        </Link>
        </div>
      </nav>
    </aside>
  );
}

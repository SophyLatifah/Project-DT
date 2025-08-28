import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className=" w-40 bg-[#209EBB] z-30 h-screen p-6 flex flex-col fixed left-0 top-0">
      <h2 className="text-xl font-bold mb-10 text-white">KLEANZY</h2>
      <nav className=" flex flex-col space-y-4">
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
        <Link to="/" className="text-white hover:font-bold py-3 text-center bg-[#FFB701] font-semibold rounded-4xl hover:bg-yellow-500 transition-colors shadow-xl block">
          Logout
        </Link>
        </div>
      </nav>
    </aside>
  );
}

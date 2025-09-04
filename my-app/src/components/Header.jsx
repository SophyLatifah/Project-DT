import { Link, NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 right-0 h-16 flex justify-between items-center shadow bg-white w-full z-50 px-4 py-4">
      <h1 className="font-extrabold">KLEANZY</h1>

      <nav className="space-x-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold"
              : "hover:text-yellow-500 transition-colors"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold"
              : "hover:text-yellow-500 transition-colors"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-500 font-bold"
              : "hover:text-yellow-500 transition-colors"
          }
        >
          Contact Us
        </NavLink>
      </nav>

      <div className="flex space-x-4">
        <Button>
          <Link
            to="/login"
            className="bg-[#FFB701] text-white px-4 py-2 font-semibold rounded hover:bg-yellow-500 transition-colors shadow-xl"
          >
            Login
          </Link>
        </Button>

        <Button>
          <Link
            to="/register"
            className="bg-[#FFB701] text-white px-4 py-2 font-semibold rounded hover:bg-yellow-500 transition-colors shadow-xl"
          >
            Sign Up
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 h-16 flex justify-around items-center shadow">
      <h1 className="font-extrabold">KLEANZY</h1>

      <nav className="space-x-4">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/about" className="/about">
          About Us
        </Link>
        <Link to="/contact" className="">
          Contact Us
        </Link>
      </nav>

      <Button>
        <Link 
          to ="login"
          className="bg-[#FFB701] text-white px-4 py-2 font-semibold rounded"
        >
          Login
          </Link>
      </Button>
    </header>
  );
};

export default Header;

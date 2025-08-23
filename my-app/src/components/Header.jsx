import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex justify-around items-center shadow">
      <h1 className="">Home Page</h1>

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
        <Link href="/login">Login</Link>
      </Button>
    </header>
  );
};

export default Header;

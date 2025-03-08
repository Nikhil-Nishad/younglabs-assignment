import { Link } from "react-router-dom";
import  ModeToggle  from "./mode-toggle";
function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">
          Younglabs
        </Link>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

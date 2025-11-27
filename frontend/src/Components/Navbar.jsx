import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="w-full h-20 flex items-center justify-between px-8 
    bg-opacity-20 backdrop-blur-xl absolute top-0 left-0 z-50">

      {/* Logo Image */}
      <Link to={"https://linkedin.com/in/amit-kumar-mahato-529b2531b"} className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-45 w-auto object-contain hover:opacity-80 transition"
        />
      </Link>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        <Link
          to={"https://github.com/Amit-Mahato-0001"}
          className="px-5 py-2 bg-white text-black rounded-full font-semibold shadow-lg hover:opacity-90 transition flex items-center gap-2"
        >
          GitHub <i className="ri-github-fill text-xl"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

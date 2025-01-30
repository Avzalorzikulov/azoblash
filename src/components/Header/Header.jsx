import logo from "/logo.svg";
import search from "/search.svg";
import karzinka from "/karzinka.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {  
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md w-full">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 md:h-16 block" />
      </div>
      {/* Burger Menu Button */}
      <button
        className="md:hidden flex flex-col items-center justify-center z-20 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
        <span className="block w-6 h-0.5 bg-gray-700"></span>
      </button>
      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:space-x-10 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 z-10`}
      >
        {[
          { name: "Home", path: "home", to: "/" },
          { name: "Shop", path: "shop", to: "/shop" },
          { name: "Plant Care", path: "plantCare" },
          { name: "Blogs", path: "blogs" },
        ].map(({ name, path, to }) => (
          <Link
            key={path}
            to={`${to}`}
            className={`text-gray-700 hover:text-green-600 px-4 py-2 rounded-md transition text-lg md:text-base ${
              activeLink === path ? "bg-green-100" : ""
            }`}
            onClick={() => handleLinkClick(path)}
          >
            {name}
          </Link>
        ))}
      </nav>
      {/* Icons and Buttons */}
      <div className="flex items-center space-x-4">
        <img src={search} alt="Search" className="w-5 h-5 md:w-6 md:h-6" />
        <Link to="/shopcard">
          <img src={karzinka} alt="Cart" className="w-5 h-5 md:w-6 md:h-6" />
        </Link>
        <button className="bg-green-600 text-white rounded px-3 py-1 md:px-4 md:py-2 hover:bg-green-700 transition text-sm md:text-base">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;

import logo from '../../../public/logo.svg'; 
import search from '../../../public/search.svg';
import karzinka from '../../../public/karzinka.svg';
import { useState } from 'react';
import './Header.css'; // Importing the Header.css for active link styles

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for burger menu

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="logo h-16" />
      </div>
      <button 
        className="md:hidden flex flex-col items-center justify-center" 
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
      >
        <span className="block w-8 h-1 bg-gray-700 mb-1"></span>
        <span className="block w-8 h-1 bg-gray-700 mb-1"></span>
        <span className="block w-8 h-1 bg-gray-700"></span>
      </button>
      <nav className={`flex md:space-x-10 ${isMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>
        <a 
          href="#" 
          className={`text-gray-700 ${activeLink === 'home' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('home')}
        >
          Home
        </a>
        <a 
          href="#" 
          className={`text-gray-700 ${activeLink === 'shop' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('shop')}
        >
          Shop
        </a>
        <a 
          href="#" 
          className={`text-gray-700 ${activeLink === 'plantCare' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('plantCare')}
        >
          Plant Care
        </a>
        <a 
          href="#" 
          className={`text-gray-700 ${activeLink === 'blogs' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('blogs')}
        >
          Blogs
        </a>
      </nav>
      <div style={{marginLeft:300}} className="flex items-center">
        <img style={{marginLeft:-35}}  src={search} alt="" />
        <img style={{marginLeft:30}}  src={karzinka} alt="" />
        <button className="ml-2 bg-green-600 text-white rounded px-4 py-2">Login</button>
      </div>
      <hr />
    </header>
  );
};

export default Header;

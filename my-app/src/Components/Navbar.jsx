import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-slate-600 text-white">
      <div className="flex justify-between items-center p-4">
        <div className="text-lg font-bold">My Portfolio</div>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        {/* Desktop menu */}
        <div className={`hidden md:flex space-x-4`}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-pink-500">{item}</Link>  
          ))}
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-2 py-4">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-pink-500">{item}</Link> 
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;



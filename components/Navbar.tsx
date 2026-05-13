import React from 'react';
import { Link } from 'react-router-dom';
import { SUZUKI_LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-200 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 text-suzukiBlue text-2xl font-bold uppercase tracking-wider">
             <img src={SUZUKI_LOGO_URL} alt="Suzuki Logo" className="w-8 h-8" />
             <span>SUZUKI BANDUNG</span>
          </Link>
          <div className="hidden md:block">
            <Link to="/" className="text-gray-700 hover:text-suzukiBlue px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/produk" className="text-gray-700 hover:text-suzukiBlue px-3 py-2 rounded-md text-sm font-medium">Produk</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
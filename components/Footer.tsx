
import React from 'react';
import { SALES_INFO } from '../constants';

const Footer: React.FC = () => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${SALES_INFO.phone}&text=${encodeURIComponent(`Halo ${SALES_INFO.name}, saya ingin bertanya tentang mobil Suzuki.`)}`;

  return (
    <footer className="bg-suzukiBlue text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-md text-gray-300">© 2024 Suzuki Dealership. All Rights Reserved.</p>
          <div className="flex justify-center mt-4 sm:mt-0">
             <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                Hubungi Alfin
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
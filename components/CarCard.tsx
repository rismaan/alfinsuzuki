
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };
  
  const formatShortPrice = (price: number) => {
    return `${Math.floor(price / 1_000_000)}jt`;
  };

  const startingPrice = car.variants.length > 0 ? Math.min(...car.variants.map(v => v.price)) : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="relative">
        {/* Top-right promo badge */}
        {car.promo && (
          <div className="absolute top-2 right-2 bg-cyan-200 text-gray-800 text-center text-xs font-bold p-2 rounded-lg z-10 shadow-md">
            <span className="block tracking-wider">PROMO</span>
            <span className="block text-base font-extrabold -mt-1">{formatShortPrice(startingPrice)}</span>
          </div>
        )}

        <img className="w-full h-56 object-cover" src={car.image} alt={`Promo Mobil ${car.name} Suzuki Bandung`} />
        
        {/* Bottom-left sale tags */}
        {car.saleTags && car.saleTags.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-2">
            {car.saleTags.map(tag => (
              <span key={tag} className="bg-suzukiBlue/80 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
        <p className="text-gray-600 mt-2">Mulai dari</p>
        <p className="text-suzukiBlue text-2xl font-semibold mt-1">{formatPrice(startingPrice)}</p>
        <Link 
          to={`/car/${car.id}`} 
          className="mt-4 inline-block w-full text-center bg-cyan-200 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-cyan-300 transition-colors duration-300"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default CarCard;

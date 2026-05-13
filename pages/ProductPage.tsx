import React from 'react';
import { CARS } from '../constants';
import CarCard from '../components/CarCard';

const ProductPage: React.FC = () => {
  return (
    <div className="py-16 bg-transparent">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-suzukiBlue mb-12">
          Produk Mobil Suzuki Bandung
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

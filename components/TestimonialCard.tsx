
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="text-center p-4">
      <img 
        src={testimonial.imageUrl} 
        alt={`Testimoni ${testimonial.name} - Pelanggan Suzuki Bandung`} 
        className="w-32 h-32 rounded-lg mx-auto object-cover shadow-md"
      />
      <h4 className="mt-4 font-semibold text-lg text-gray-800">{testimonial.name}</h4>
      <p className="text-gray-500">{testimonial.car}</p>
    </div>
  );
};

export default TestimonialCard;
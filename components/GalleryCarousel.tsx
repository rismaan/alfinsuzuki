
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

interface GalleryCarouselProps {
  items: Testimonial[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  const handleNext = () => {
    next();
    resetTimer();
  };

  const handlePrev = () => {
    prev();
    resetTimer();
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] group bg-gray-100">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={items[index].imageUrl}
            alt={`Suzuki Delivery Moment ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay for aesthetic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Always visible but styled subtly */}
      <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 z-20 pointer-events-none">
        <button
          onClick={handlePrev}
          className="p-2 md:p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-suzukiBlue transition-all shadow-lg pointer-events-auto active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 md:p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-suzukiBlue transition-all shadow-lg pointer-events-auto active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
              resetTimer();
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      
      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-20">
        <div className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-widest rounded-full uppercase shadow-xl">
          Customer Happiness
        </div>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <div className="px-3 py-1 bg-suzukiRed text-white text-[10px] font-bold tracking-widest rounded-full uppercase shadow-xl">
          Verified
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;

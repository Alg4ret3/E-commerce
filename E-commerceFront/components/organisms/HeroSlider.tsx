import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms';

export const HeroSlider: React.FC<{ banners: any[] }> = ({ banners }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % banners.length), 8000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <section className="relative h-[90vh] bg-black overflow-hidden">
      {banners.map((banner, i) => (
        <div key={banner.id} className={`absolute inset-0 transition-all duration-1000 ${i === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}>
          <img src={banner.img} alt="" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <span className="text-white text-[11px] font-bold tracking-[0.5em] mb-6 uppercase animate-fashion-fade">{banner.subtitle}</span>
            <h1 className="text-white text-6xl md:text-9xl font-serif italic mb-10 animate-fashion-fade delay-200">{banner.title}</h1>
            <div className="animate-fashion-fade delay-500">
              <Link to="/catalog">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" size="lg">{banner.cta}</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-4 z-20">
        {banners.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-[1px] transition-all duration-500 ${i === current ? 'w-16 bg-white' : 'w-8 bg-white/20'}`} />
        ))}
      </div>
    </section>
  );
};

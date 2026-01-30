import React from 'react';
import { Button } from '../atoms/Button';
import { Typography } from '../atoms/Typography';

interface BannerSlideProps {
  imageUrl: string;
  title: string;
  description: string;
  showTopGradient?: boolean;
}

export const BannerSlide: React.FC<BannerSlideProps> = ({ imageUrl, title, description, showTopGradient = false }) => {
  return (
    <div className="relative h-[85vh] sm:h-screen w-full flex items-end sm:items-center px-6 sm:px-24 pb-20 sm:pb-0 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent sm:bg-linear-to-r sm:from-black/60 sm:via-black/20 sm:to-transparent" />
      
      {showTopGradient && (
        <div className="absolute inset-x-0 top-0 h-64 bg-linear-to-b from-black via-black/75 via-black/40 via-black/15 to-transparent z-10 pointer-events-none" />
      )}
      
      <div className="relative z-10 max-w-xl sm:max-w-3xl text-left">
        <Typography variant="small" className="mb-4 sm:mb-6 text-white/80 tracking-[0.3em]">
          Nuevas Llegadas
        </Typography>
        <Typography variant="h1" className="mb-4 sm:mb-8 text-white text-4xl sm:text-7xl leading-[1.1] sm:leading-none editorial-spacing drop-shadow-sm">
          {title}
        </Typography>
        <Typography variant="body" className="mb-8 sm:mb-12 text-white/90 font-light max-w-xl line-clamp-3 sm:line-clamp-none mx-auto md:mx-0">
          {description}
        </Typography>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg" className="bg-white text-black border-white hover:bg-transparent hover:text-white px-10 text-[10px] sm:text-xs">Descubrir</Button>
          <Button variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-black px-10 text-[10px] sm:text-xs">Archivo</Button>
        </div>
      </div>
    </div>
  );
};

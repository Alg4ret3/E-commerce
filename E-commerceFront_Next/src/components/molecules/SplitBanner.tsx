'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';

interface SplitBannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  description: string;
}

export const SplitBanner: React.FC<SplitBannerProps> = ({ imageUrl, title, subtitle, description }) => {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[75vh] md:min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div className="relative w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-auto overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent" />
      </div>

      {/* Right Side - Content */}
      <div className="relative w-full md:w-1/2 bg-background flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-24">
        {/* Decorative border element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent md:hidden" />
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent md:hidden" />
        
        <div className="max-w-xl w-full space-y-8 sm:space-y-10">
          {/* Overline */}
          {subtitle && (
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary" />
              <Typography 
                variant="small" 
                className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-primary font-medium"
              >
                {subtitle}
              </Typography>
            </div>
          )}

          {/* Main Title */}
          <Typography 
            variant="h1" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95] editorial-spacing"
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography 
            variant="body" 
            className="text-sm sm:text-base md:text-lg text-secondary font-light leading-relaxed max-w-lg border-l-2 border-border pl-6"
          >
            {description}
          </Typography>

          {/* Decorative element */}
          <div className="flex items-center gap-2 pt-4">
            <div className="w-2 h-2 bg-primary" />
            <div className="w-16 h-px bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
};

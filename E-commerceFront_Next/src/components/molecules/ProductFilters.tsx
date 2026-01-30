'use client';

import React from 'react';
import { Typography } from '../atoms/Typography';
import { X } from 'lucide-react';

interface ProductFiltersProps {
  onFilterChange: (filters: { sizes: string[]; colors: string[]; maxPrice: number }) => void;
  activeFilters: { sizes: string[]; colors: string[]; maxPrice: number };
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({ onFilterChange, activeFilters }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Negro', hex: '#000000' },
    { name: 'Blanco', hex: '#ffffff', border: true },
    { name: 'Gris', hex: '#8e8e8e' },
    { name: 'Beige', hex: '#f5f5dc' },
    { name: 'Azul Marino', hex: '#000080' },
  ];

  const toggleSize = (size: string) => {
    const newSizes = activeFilters.sizes.includes(size)
      ? activeFilters.sizes.filter((s: string) => s !== size)
      : [...activeFilters.sizes, size];
    onFilterChange({ ...activeFilters, sizes: newSizes });
  };

  const toggleColor = (color: string) => {
    const newColors = activeFilters.colors.includes(color)
      ? activeFilters.colors.filter((c: string) => c !== color)
      : [...activeFilters.colors, color];
    onFilterChange({ ...activeFilters, colors: newColors });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...activeFilters, maxPrice: parseInt(e.target.value) });
  };

  return (
    <div className="flex flex-col gap-12 w-full max-w-[240px]">
      {/* Active Filters Summary (Optional) */}
      {(activeFilters.sizes.length > 0 || activeFilters.colors.length > 0) && (
        <div className="flex flex-wrap gap-2 pb-6 border-b border-neutral-100">
          <button 
            onClick={() => onFilterChange({ sizes: [], colors: [], maxPrice: 1000000 })}
            className="text-[10px] tracking-widest uppercase font-medium flex items-center gap-1 hover:text-black text-neutral-400"
          >
            Limpiar Todo <X size={10} />
          </button>
        </div>
      )}

      {/* Price Filter */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <Typography variant="small" className="text-primary tracking-[0.2em]">Precio Máximo</Typography>
          <span className="text-[10px] font-medium font-sans">${activeFilters.maxPrice.toLocaleString()}</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="1000000" 
          step="10000"
          value={activeFilters.maxPrice} 
          onChange={handlePriceChange}
          className="w-full h-px bg-neutral-200 appearance-none cursor-pointer accent-black"
        />
      </div>

      {/* Size Filter */}
      <div>
        <Typography variant="small" className="text-primary mb-6 block tracking-[0.2em]">Talla</Typography>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`py-2 text-[10px] font-medium border transition-all ${
                activeFilters.sizes.includes(size)
                  ? 'bg-black text-white border-black'
                  : 'bg-transparent text-neutral-400 border-neutral-100 hover:border-neutral-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <Typography variant="small" className="text-primary mb-6 block tracking-[0.2em]">Color</Typography>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleColor(color.name)}
              title={color.name}
              className={`w-6 h-6 rounded-none border transition-all relative ${
                activeFilters.colors.includes(color.name)
                  ? 'ring-1 ring-black ring-offset-2'
                  : 'hover:scale-110'
              } ${color.border ? 'border-neutral-200' : 'border-transparent'}`}
              style={{ backgroundColor: color.hex }}
            >
              {activeFilters.colors.includes(color.name) && (
                <div className={`absolute inset-0 flex items-center justify-center ${color.name === 'Blanco' ? 'text-black' : 'text-white'}`}>
                  <div className="w-1 h-1 bg-current rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

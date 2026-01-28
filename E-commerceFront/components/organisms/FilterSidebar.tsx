import React from 'react';
import { Input } from '../atoms';
import { AVAILABLE_COLORS } from '../../constants';

export const FilterSidebar: React.FC<{
  filterCategory: string;
  setFilterCategory: (c: string) => void;
  selectedColors: string[];
  toggleColor: (c: string) => void;
  selectedSizes: string[];
  toggleSize: (s: string) => void;
  priceRange: number;
  setPriceRange: (p: number) => void;
  clearFilters: () => void;
  search: string;
  setSearch: (s: string) => void;
}> = (props) => (
  <aside className="lg:w-1/5 space-y-16">
    <div className="flex justify-between items-center border-b pb-4">
      <h3 className="text-xs font-bold uppercase tracking-widest">Filtros</h3>
      <button onClick={props.clearFilters} className="text-[10px] uppercase font-bold text-gray-300 hover:text-black">Limpiar</button>
    </div>

    <section>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-6">Búsqueda</h4>
      <Input placeholder="Palabra clave..." value={props.search} onChange={e => props.setSearch(e.target.value)} />
    </section>

    <section>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-6">Categorías</h4>
      <div className="space-y-4">
        {['todos', 'ropa', 'telas', 'accesorios'].map(cat => (
          <button 
            key={cat}
            onClick={() => props.setFilterCategory(cat)}
            className={`block text-[11px] uppercase tracking-widest transition-colors ${props.filterCategory === cat ? 'font-bold text-black border-l border-black pl-4' : 'text-gray-400 pl-0'}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>

    <section>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-6">Color</h4>
      <div className="grid grid-cols-5 gap-3">
        {AVAILABLE_COLORS.map(color => (
          <button
            key={color.name}
            onClick={() => props.toggleColor(color.name)}
            className={`w-7 h-7 rounded-full border border-gray-100 flex items-center justify-center relative transition-all ${props.selectedColors.includes(color.name) ? 'ring-1 ring-black ring-offset-2' : ''}`}
            style={{ backgroundColor: color.hex }}
          >
            {props.selectedColors.includes(color.name) && <i className={`fa-solid fa-check text-[7px] ${color.name === 'Blanco' || color.name === 'Crema' ? 'text-black' : 'text-white'}`}></i>}
          </button>
        ))}
      </div>
    </section>

    <section>
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-300 mb-6">Precio Máximo</h4>
      <input type="range" className="w-full accent-black h-[1px] bg-gray-100" min="0" max="1000000" step="10000" value={props.priceRange} onChange={e => props.setPriceRange(Number(e.target.value))} />
      <div className="flex justify-between mt-4 text-[9px] font-bold">
        <span className="text-gray-300">$0</span>
        <span className="text-black">${props.priceRange.toLocaleString()}</span>
      </div>
    </section>
  </aside>
);

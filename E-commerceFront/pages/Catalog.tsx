
import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MOCK_PRODUCTS, AVAILABLE_COLORS, AVAILABLE_SIZES } from '../constants';
import { ProductCard } from '../components/molecules';
import { FilterSidebar } from '../components/organisms';
import { Button } from '../components/atoms';

const Catalog: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const [filterCategory, setFilterCategory] = useState<string>('todos');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState(1000000);

  const toggleColor = (c: string) => setSelectedColors(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  const toggleSize = (s: string) => setSelectedSizes(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  
  const clearFilters = () => {
    setFilterCategory('todos');
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange(1000000);
    setSearch('');
  };

  const filtered = useMemo(() => {
    const genderParam = queryParams.get('gender');
    const subParam = queryParams.get('sub');

    return MOCK_PRODUCTS.filter(p => {
      const matchesGender = !genderParam || p.gender === genderParam || p.gender === 'unisex';
      const matchesSub = !subParam || p.subcategory === subParam;
      const matchesCategory = filterCategory === 'todos' || p.category.toLowerCase() === filterCategory;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPrice = p.price <= priceRange;
      const matchesColor = selectedColors.length === 0 || p.colors.some(c => selectedColors.includes(c.name));
      const matchesSize = selectedSizes.length === 0 || p.sizes.some(s => selectedSizes.includes(s));
      return matchesGender && matchesSub && matchesCategory && matchesSearch && matchesPrice && matchesColor && matchesSize;
    });
  }, [location.search, filterCategory, search, priceRange, selectedColors, selectedSizes]);

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="mb-20">
        <h1 className="text-6xl md:text-8xl font-serif italic mb-6">
          {queryParams.get('gender')?.toUpperCase() || 'Colecciones'}
        </h1>
        <p className="text-gray-400 font-light tracking-wide uppercase text-[10px] tracking-[0.3em]">
          {queryParams.get('sub') ? `Línea: ${queryParams.get('sub')}` : 'Selección Curada de Objetos'}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        <FilterSidebar 
          filterCategory={filterCategory} 
          setFilterCategory={setFilterCategory}
          selectedColors={selectedColors}
          toggleColor={toggleColor}
          selectedSizes={selectedSizes}
          toggleSize={toggleSize}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          clearFilters={clearFilters}
          search={search}
          setSearch={setSearch}
        />

        <div className="lg:w-4/5">
          <div className="flex justify-between items-center mb-12 pb-6 border-b">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{filtered.length} Objetos Encontrados</span>
            <select className="bg-transparent border-none text-[10px] font-bold uppercase tracking-widest focus:ring-0 cursor-pointer text-gray-600">
              <option>Relevancia</option>
              <option>Precio Menor</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-20">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          {filtered.length === 0 && (
            <div className="py-40 text-center flex flex-col items-center">
              <span className="text-4xl font-serif italic mb-6">Sin Resultados</span>
              <p className="text-gray-400 font-light mb-10">Intenta restablecer tus parámetros de búsqueda.</p>
              <Button variant="outline" size="sm" onClick={clearFilters}>Limpiar Filtros</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;

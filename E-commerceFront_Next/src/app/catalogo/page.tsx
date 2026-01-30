'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from '@/components/organisms/Navbar';
import { FeaturedProducts } from '@/components/organisms/FeaturedProducts';
import { Footer } from '@/components/organisms/Footer';
import { Typography } from '@/components/atoms/Typography';
import { ProductFilters } from '@/components/molecules/ProductFilters';
import { medusa } from '@/lib/medusa';

interface Product {
  id: string;
  title: string;
  thumbnail: string;
  variants: any[];
}

interface FilterState {
  sizes: string[];
  colors: string[];
  maxPrice: number;
}

export default function CatalogPage() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    colors: [],
    maxPrice: 1000000,
  });

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const { products } = await medusa.store.product.list({
          limit: 100, // Fetch more for client-side filtering demo
        });
        setAllProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Price Check
      const price = product.variants?.[0]?.prices?.[0]?.amount / 100 || 0;
      if (price > filters.maxPrice) return false;

      // Size Check (Simple mock check since real data might not have these attributes easily accessible)
      // In a real scenario, we'd check product.variants.options
      if (filters.sizes.length > 0) {
        // Simplified check: if any variant has a title matching the size
        const hasSize = product.variants?.some((v: any) => 
          filters.sizes.some(s => v.title.includes(s) || v.options?.some((o: any) => o.value === s))
        );
        if (!hasSize) return false;
      }

      // Color Check (Similar logic to size)
      if (filters.colors.length > 0) {
        const hasColor = product.variants?.some((v: any) => 
          filters.colors.some(c => v.title.includes(c) || v.options?.some((o: any) => o.value === c))
        );
        if (!hasColor) return false;
      }

      return true;
    });
  }, [allProducts, filters]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-b-2 border-primary"></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="px-6 pt-40 pb-24 max-w-7xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <Typography variant="small" className="mb-6 block tracking-[0.3em]">NariñoTex Store</Typography>
          <Typography variant="h1" className="mb-8">Archivo de Productos</Typography>
          <Typography variant="body" className="max-w-2xl font-light text-neutral-400">
            Piezas textiles de autoría local con proyección global. Cada prenda representa el equilibrio entre tradición y modernidad arquitectónica.
          </Typography>
        </header>

        <div className="flex flex-col md:flex-row gap-16 border-t border-neutral-100 pt-20">
          {/* Sidebar Filters */}
          <aside className="md:sticky md:top-32 h-fit">
            <ProductFilters 
              activeFilters={filters} 
              onFilterChange={setFilters} 
            />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-10 pb-4 border-b border-neutral-50">
              <Typography variant="small" className="text-neutral-300">
                Mostrando {filteredProducts.length} de {allProducts.length} productos
              </Typography>
              <div className="flex gap-4">
                <button className="text-[10px] tracking-widest uppercase font-medium text-primary border-b border-primary">Destacados</button>
                <button className="text-[10px] tracking-widest uppercase font-medium text-neutral-300 hover:text-primary transition-colors">Recientes</button>
              </div>
            </div>
            
            <FeaturedProducts 
              products={filteredProducts} 
              hideHeader 
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

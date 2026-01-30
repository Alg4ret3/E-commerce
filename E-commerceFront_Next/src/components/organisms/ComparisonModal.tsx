'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useComparison } from '@/context/ComparisonContext';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { X, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const ComparisonModal: React.FC = () => {
  const { comparisonList, isComparisonOpen, setIsComparisonOpen, removeFromComparison } = useComparison();
  const { addToCart } = useCart();

  if (!isComparisonOpen) return null;

  const comparisonAttributes = [
    { label: 'Precio', key: 'price' },
    { label: 'Composición', key: 'material', default: 'Seda Premium' },
    { label: 'Peso', key: 'weight', default: '220 GSM' },
    { label: 'Descripción', key: 'description', default: 'Tejido editorial de alta resistencia con acabado satinado.' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] bg-background/98 backdrop-blur-2xl overflow-y-auto p-6 md:p-12 lg:p-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16 px-4">
            <div>
              <Typography variant="small" className="mb-2 block tracking-[0.3em] text-neutral-400">Herramienta de Análisis</Typography>
              <Typography variant="h1" className="text-4xl sm:text-5xl editorial-spacing">Comparativa Técnica</Typography>
            </div>
            <button 
              onClick={() => setIsComparisonOpen(false)}
              className="p-4 bg-muted hover:bg-primary hover:text-background transition-all"
            >
              <X size={24} strokeWidth={1} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden">
            {comparisonList.map((product) => (
              <div key={product.id} className="bg-card flex flex-col group min-h-[600px]">
                {/* Product Image & Meta */}
                <div className="p-8 pb-4">
                  <div className="relative aspect-[3/4] bg-muted overflow-hidden border border-border mb-8">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <button 
                      onClick={() => removeFromComparison(product.id)}
                      className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-md shadow-sm border border-border lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
                      aria-label="Eliminar de la comparativa"
                    >
                      <X size={14} strokeWidth={1} />
                    </button>
                  </div>
                  <Typography variant="small" className="font-bold mb-2 uppercase tracking-widest text-primary h-12 line-clamp-2">{product.name}</Typography>
                </div>

                {/* Attributes */}
                <div className="flex-1 divide-y divide-border/50">
                  {comparisonAttributes.map((attr) => (
                    <div key={attr.key} className="p-8">
                      <Typography variant="small" className="text-neutral-400 mb-2">{attr.label}</Typography>
                      <Typography variant="body" className="text-sm font-light text-secondary">
                        {(product as any)[attr.key] || attr.default}
                      </Typography>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <div className="p-8 bg-muted/20">
                  <Button 
                    variant="primary" 
                    className="w-full py-4 text-[9px] tracking-[0.3em]"
                    onClick={() => {
                      addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
                      setIsComparisonOpen(false);
                    }}
                  >
                    Añadir a Bolsa
                  </Button>
                </div>
              </div>
            ))}

            {/* Empty Slots */}
            {Array.from({ length: 4 - comparisonList.length }).map((_, i) => (
              <div key={i} className="bg-card/30 flex flex-col items-center justify-center text-center p-12 border-l border-border first:border-l-0">
                <Typography variant="body" className="text-neutral-300 italic mb-6">Slot vacío</Typography>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-dashed border-neutral-300 text-neutral-400 hover:border-primary hover:text-primary"
                  onClick={() => setIsComparisonOpen(false)}
                >
                  <Plus size={14} className="mr-2" /> Añadir
                </Button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

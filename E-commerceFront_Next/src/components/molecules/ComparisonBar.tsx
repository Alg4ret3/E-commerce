'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useComparison } from '@/context/ComparisonContext';
import { Typography } from '@/components/atoms/Typography';
import { X, ArrowRightLeft } from 'lucide-react';

export const ComparisonBar: React.FC = () => {
  const { comparisonList, removeFromComparison, setIsComparisonOpen } = useComparison();

  if (comparisonList.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[90] w-full max-w-2xl px-6"
      >
        <div className="bg-background/95 backdrop-blur-xl border border-border shadow-2xl p-4 flex items-center justify-between gap-8 rounded-none">
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
            <div className="flex flex-col gap-1 min-w-fit pr-6 border-r border-border">
              <div className="flex items-center gap-2 text-primary">
                <ArrowRightLeft size={14} strokeWidth={1} />
                <Typography variant="small" className="font-bold tracking-widest">Comparar</Typography>
              </div>
              <Typography variant="small" className="text-[9px] text-neutral-400">{comparisonList.length} / 4 productos</Typography>
            </div>

            <div className="flex gap-4">
              {comparisonList.map((product) => (
                <div key={product.id} className="relative group shrink-0">
                  <div className="w-12 h-16 bg-muted border border-border overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <button 
                    onClick={() => removeFromComparison(product.id)}
                    className="absolute -top-2 -right-2 bg-primary text-background p-1.5 rounded-full shadow-lg lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
                    aria-label="Eliminar producto"
                  >
                    <X size={10} strokeWidth={2} />
                  </button>
                </div>
              ))}
              
              {comparisonList.length < 4 && (
                <div className="w-12 h-16 border border-dashed border-border flex items-center justify-center text-neutral-300">
                  <span className="text-xs">+</span>
                </div>
              )}
            </div>
          </div>

          <button 
            onClick={() => setIsComparisonOpen(true)}
            disabled={comparisonList.length < 2}
            className="shrink-0 bg-primary text-background px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity disabled:opacity-30 disabled:grayscale"
          >
            Comparar Ahora
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

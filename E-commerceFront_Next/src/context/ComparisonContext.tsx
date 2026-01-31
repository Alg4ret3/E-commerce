'use client';

import React, { createContext, useContext, useState } from 'react';

export interface ComparisonProduct {
  id: string;
  name: string;
  price: string;
  image: string;
  description?: string;
  material?: string;
  weight?: string;
}

interface ComparisonContextType {
  comparisonList: ComparisonProduct[];
  addToComparison: (product: ComparisonProduct) => void;
  removeFromComparison: (id: string) => void;
  clearComparison: () => void;
  isComparisonOpen: boolean;
  setIsComparisonOpen: (isOpen: boolean) => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [comparisonList, setComparisonList] = useState<ComparisonProduct[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  const addToComparison = (product: ComparisonProduct) => {
    setComparisonList(prev => {
      if (prev.find(p => p.id === product.id)) return prev;
      if (prev.length >= 4) return prev; // Max 4 products
      return [...prev, product];
    });
  };

  const removeFromComparison = (id: string) => {
    setComparisonList(prev => prev.filter(p => p.id !== id));
  };

  const clearComparison = () => setComparisonList([]);

  return (
    <ComparisonContext.Provider value={{ 
      comparisonList, 
      addToComparison, 
      removeFromComparison, 
      clearComparison,
      isComparisonOpen,
      setIsComparisonOpen
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) throw new Error('useComparison must be used within a ComparisonProvider');
  return context;
};

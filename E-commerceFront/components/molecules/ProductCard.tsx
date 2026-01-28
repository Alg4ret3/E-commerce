import React from 'react';
import { Product } from '../../types';
import { Link } from 'react-router-dom';
import { Badge } from '../atoms';
import { useCart } from '../../App';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToComparison } = useCart();
  
  return (
    <div className="group bg-white flex flex-col h-full animate-fashion-fade">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
          />
        </Link>
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
          <button 
            onClick={() => addToComparison(product)}
            className="w-10 h-10 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
          >
            <i className="fa-solid fa-right-left text-xs"></i>
          </button>
          <button className="w-10 h-10 bg-white flex items-center justify-center hover:bg-[#800000] hover:text-white transition-all shadow-sm">
            <i className="fa-regular fa-heart text-xs"></i>
          </button>
        </div>
        {product.stock < 5 && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-white/90 backdrop-blur-sm !text-[#800000]">Últimos {product.stock}</Badge>
          </div>
        )}
      </div>
      <div className="py-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="text-[9px] uppercase text-gray-400 font-bold tracking-[0.2em]">{product.gender || product.category}</div>
          <div className="text-[10px] font-bold text-[#800000]">${product.price.toLocaleString()}</div>
        </div>
        <Link to={`/product/${product.id}`} className="font-serif italic text-xl mb-4 group-hover:text-[#800000] transition-colors">{product.name}</Link>
        <div className="mt-auto">
          <Link to={`/product/${product.id}`}>
            <span className="text-[10px] font-bold uppercase tracking-widest border-b border-transparent hover:border-black transition-all">Ver Detalles</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

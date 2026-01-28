import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from '../molecules';
import { NAV_CATEGORIES } from '../../constants';
import { useCart } from '../../App';

export const Header: React.FC = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black flex items-center justify-center text-white font-black text-xl group-hover:bg-[#800000] transition-colors">N</div>
          <div className="hidden lg:block leading-none">
            <span className="block font-black text-lg tracking-tighter uppercase group-hover:text-[#800000] transition-colors">NARIÑOTEX</span>
            <span className="block text-[8px] uppercase tracking-[0.4em] text-gray-300 mt-1">Alta Costura</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 h-full">
          <NavDropdown title="Hombres" items={NAV_CATEGORIES.hombres} gender="hombre" />
          <NavDropdown title="Mujeres" items={NAV_CATEGORIES.mujeres} gender="mujer" />
          <Link to="/catalog?cat=telas" className="hover:text-[#800000] py-4 font-bold uppercase tracking-[0.3em] text-[10px]">Telas</Link>
          <Link to="/tickets" className="hover:text-[#800000] py-4 font-bold uppercase tracking-[0.3em] text-[10px]">Eventos</Link>
        </nav>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 border-r pr-8 border-gray-100 h-8">
            <Link to="/comparison" className="text-gray-300 hover:text-black transition-colors"><i className="fa-solid fa-right-left text-sm"></i></Link>
            <Link to="/auth" className="text-gray-300 hover:text-black transition-colors"><i className="fa-regular fa-user text-sm"></i></Link>
          </div>
          
          <Link to="/cart" className="relative p-2 group">
            <i className="fa-solid fa-cart-shopping text-gray-300 group-hover:text-black transition-colors"></i>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#800000] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black">
                {cart.length}
              </span>
            )}
          </Link>
          
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-400">
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Drawer - Simplified */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-[60] p-8 animate-fashion-fade">
          <div className="flex flex-col gap-8 text-2xl font-serif italic">
            <Link to="/catalog?gender=hombre" onClick={() => setIsMenuOpen(false)}>Hombres</Link>
            <Link to="/catalog?gender=mujer" onClick={() => setIsMenuOpen(false)}>Mujeres</Link>
            <Link to="/catalog?cat=telas" onClick={() => setIsMenuOpen(false)}>Textiles</Link>
            <Link to="/tickets" onClick={() => setIsMenuOpen(false)}>Eventos</Link>
          </div>
        </div>
      )}
    </header>
  );
};

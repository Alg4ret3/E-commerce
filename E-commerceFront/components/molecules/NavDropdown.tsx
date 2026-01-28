import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const NavDropdown: React.FC<{ title: string, items: { name: string, slug: string }[], gender: string }> = ({ title, items, gender }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className={`hover:text-[#800000] transition-colors py-4 font-bold flex items-center gap-2 uppercase tracking-[0.3em] text-[10px] ${isOpen ? 'text-[#800000]' : ''}`}
        onClick={() => navigate(`/catalog?gender=${gender}`)}
      >
        {title}
        <i className={`fa-solid fa-chevron-down text-[7px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      <div className={`absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-2xl transition-all duration-500 origin-top z-50 ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="py-4">
          {items.map((item) => (
            <Link 
              key={item.slug} 
              to={`/catalog?gender=${gender}&sub=${item.slug}`}
              className="block px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-black hover:bg-gray-50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="border-t mt-4 pt-4">
            <Link 
              to={`/catalog?gender=${gender}`}
              className="block px-8 py-2 text-[9px] font-black uppercase tracking-[0.3em] text-[#800000]"
              onClick={() => setIsOpen(false)}
            >
              Todo {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

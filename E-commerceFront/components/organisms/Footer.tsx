import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => (
  <footer className="bg-white border-t pt-24 pb-12">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
      <div>
        <h4 className="font-serif italic text-3xl mb-8">NARIÑOTEX</h4>
        <p className="text-gray-400 text-sm font-light leading-loose mb-10">Fomentando la excelencia artesanal y el desarrollo sostenible en el suroccidente colombiano.</p>
        <div className="flex gap-6 text-gray-300">
          <a href="#" className="hover:text-black"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-black"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>
      <div>
        <h5 className="font-bold uppercase tracking-[0.3em] mb-10 text-[9px] text-gray-300">Colecciones</h5>
        <ul className="flex flex-col gap-4 text-[10px] font-bold tracking-widest text-black">
          <li><Link to="/catalog?gender=mujer" className="hover:text-[#800000]">MUJERES</Link></li>
          <li><Link to="/catalog?gender=hombre" className="hover:text-[#800000]">HOMBRES</Link></li>
          <li><Link to="/catalog?cat=telas" className="hover:text-[#800000]">TELERÍA PREMIUM</Link></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold uppercase tracking-[0.3em] mb-10 text-[9px] text-gray-300">Soporte</h5>
        <ul className="flex flex-col gap-4 text-[10px] font-bold tracking-widest text-black">
          <li><Link to="/info" className="hover:text-[#800000]">ENVÍOS</Link></li>
          <li><Link to="/info" className="hover:text-[#800000]">DEVOLUCIONES</Link></li>
          <li><Link to="/info" className="hover:text-[#800000]">CONTACTO</Link></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold uppercase tracking-[0.3em] mb-10 text-[9px] text-gray-300">Newsletter</h5>
        <div className="flex border-b border-gray-100 pb-2">
          <input type="email" placeholder="TU EMAIL" className="bg-transparent w-full text-[10px] font-bold tracking-widest outline-none" />
          <button className="text-black hover:text-[#800000]"><i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-6 mt-20 pt-8 border-t border-gray-50 flex justify-between items-center">
      <span className="text-gray-300 text-[8px] font-bold tracking-[0.5em] uppercase">&copy; 2024 NARIÑOTEX</span>
      <span className="text-gray-300 text-[8px] font-bold tracking-[0.5em] uppercase">Hecho en Colombia</span>
    </div>
  </footer>
);

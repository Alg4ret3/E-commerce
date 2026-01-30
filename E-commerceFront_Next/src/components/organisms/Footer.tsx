import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '../atoms/Typography';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="mb-8 block">
              <Image 
                src="/assets/logo.svg" 
                alt="NariñoTex" 
                width={100} 
                height={32} 
                className="h-8 w-auto dark:invert dark:brightness-0" 
              />
            </Link>
            <Typography variant="body" className="text-sm leading-relaxed max-w-xs text-secondary">
              Excelencia textil y diseño de vanguardia. Cada hilo cuenta una historia de pasión y maestría artesanal desde el corazón de Nariño.
            </Typography>
          </div>
          
          <div>
            <Typography variant="small" className="mb-8 block text-neutral-400">Tienda</Typography>
            <ul className="space-y-4 text-[10px] tracking-widest uppercase font-medium text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Todos los Productos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nuevas Llegadas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Más Vendidos</a></li>
            </ul>
          </div>
          
          <div>
            <Typography variant="small" className="mb-8 block text-neutral-400">Ayuda</Typography>
            <ul className="space-y-4 text-[10px] tracking-widest uppercase font-medium text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Soporte</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Envíos & Devoluciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
            </ul>
          </div>

          <div>
            <Typography variant="small" className="mb-8 block text-neutral-400">Mundo NariñoTex</Typography>
            <p className="text-xs text-secondary mb-6 font-light">Suscríbete para recibir noticias sobre nuestras últimas colecciones y eventos exclusivos.</p>
            <div className="flex border-b border-border focus-within:border-primary transition-colors">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent py-3 text-sm w-full focus:outline-none placeholder:text-neutral-500 font-light text-primary"
              />
              <button className="text-[10px] tracking-[0.2em] uppercase font-medium px-4 text-primary hover:text-secondary transition-colors">Unirme</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border text-[10px] tracking-widest uppercase font-medium text-neutral-500">
          <p>© 2026 NariñoTex. Todos los derechos reservados.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

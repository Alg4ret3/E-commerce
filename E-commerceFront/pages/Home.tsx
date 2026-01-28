
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Button } from '../components/atoms';
import { ProductCard, SectionTitle } from '../components/molecules';
import { HeroSlider } from '../components/organisms';
import { Link } from 'react-router-dom';

const BANNERS = [
  {
    id: 1,
    title: "Alta Costura & Herencia",
    subtitle: "COLECCIÓN PRIVADA 2025",
    desc: "Redefiniendo el lujo artesanal con fibras premium y técnicas ancestrales.",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop",
    cta: "Explorar Colección"
  },
  {
    id: 2,
    title: "Vanguardia Textil",
    subtitle: "LABORATORIO DE DISEÑO",
    desc: "Donde la innovación se encuentra con la tradición del tejido nariñense.",
    img: "https://images.unsplash.com/photo-1490481651871-ab68624d5517?q=80&w=2000&auto=format&fit=crop",
    cta: "Ver Innovaciones"
  }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSlider banners={BANNERS} />

      <section className="py-32">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Nuevas Siluetas" 
            subtitle="Nuestra curaduría de temporada fusiona la elegancia clásica con el dinamismo de la moda urbana actual."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
            {MOCK_PRODUCTS.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="py-40 bg-black text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
          </div>
          <div>
            <span className="text-[#D2B48C] text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block">Manifesto 2025</span>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-10 leading-tight">La Narrativa de la Fibra</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-12">Explora los procesos que transforman la materia prima en objetos de deseo. Cada hilo cuenta una historia de herencia y evolución.</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">Descubrir Film</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

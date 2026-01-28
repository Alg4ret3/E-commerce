
import React from 'react';
import { MOCK_STANDS } from '../constants';
import { SectionTitle } from '../components/molecules';
import { Button } from '../components/atoms';

const Stands: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="Tu espacio comercial" 
        subtitle="Posiciona tu marca en los eventos más importantes del sector textil. Reserva tu stand ahora."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
        {MOCK_STANDS.map(stand => (
          <div key={stand.id} className="bg-white border p-1 border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-500">
            <div className="aspect-video overflow-hidden">
              <img src={stand.image} alt={stand.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-serif mb-2">{stand.name}</h3>
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">{stand.dimensions}</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-[#800000] block">${stand.price.toLocaleString()}</span>
                  <span className="text-[10px] text-gray-400 uppercase">Inversión Total</span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#D2B48C]">Beneficios incluidos:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {stand.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fa-solid fa-circle-check text-green-500 text-[10px]"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="primary" className="w-full">Reservar Stand</Button>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-gray-50 p-16 rounded-xl">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <i className="fa-solid fa-users text-[#800000] text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">Gran Afluencia</h4>
            <p className="text-sm text-gray-500">+10.000 visitantes esperados por edición.</p>
          </div>
          <div>
            <i className="fa-solid fa-handshake text-[#800000] text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">Networking</h4>
            <p className="text-sm text-gray-500) ">Rueda de negocios con compradores internacionales.</p>
          </div>
          <div>
            <i className="fa-solid fa-bullhorn text-[#800000] text-3xl mb-4"></i>
            <h4 className="font-bold mb-2">Visibilidad</h4>
            <p className="text-sm text-gray-500">Presencia en medios nacionales y redes sociales.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stands;

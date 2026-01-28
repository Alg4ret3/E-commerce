
import React from 'react';
import { MOCK_EVENTS } from '../constants';
import { SectionTitle } from '../components/molecules';
import { Button } from '../components/atoms';

const Tickets: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle 
        title="Eventos & Pasarelas" 
        subtitle="Adquiere tus boletas para los eventos más exclusivos de la industria de la moda en la región."
      />
      
      <div className="grid grid-cols-1 gap-12">
        {MOCK_EVENTS.map(event => (
          <div key={event.id} className="bg-white border rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="md:w-1/3 h-64 md:h-auto">
              <img src={event.image} className="w-full h-full object-cover" alt={event.name} />
            </div>
            <div className="md:w-2/3 p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-[#800000] font-bold text-sm uppercase tracking-widest mb-4">
                  <span><i className="fa-regular fa-calendar-check mr-2"></i> {event.date}</span>
                  <span><i className="fa-solid fa-location-dot mr-2"></i> {event.location}</span>
                </div>
                <h2 className="text-4xl font-serif mb-6">{event.name}</h2>
                <p className="text-gray-500 mb-8 leading-relaxed max-w-xl">{event.description}</p>
              </div>
              <div className="flex items-center justify-between border-t pt-8">
                <div>
                  <span className="text-xs text-gray-400 uppercase font-bold block mb-1">Precio desde</span>
                  <span className="text-3xl font-bold text-[#800000]">${event.price.toLocaleString()}</span>
                </div>
                <Button variant="primary" size="lg">Comprar Entradas</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-[#800000] text-white rounded-lg text-center">
        <h3 className="text-3xl font-serif mb-4">¿Deseas participar como diseñador?</h3>
        <p className="mb-8 opacity-80">Estamos buscando nuevos talentos para nuestras próximas ediciones. Envíanos tu portafolio.</p>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#800000]">Contactar Curaduría</Button>
      </div>
    </div>
  );
};

export default Tickets;

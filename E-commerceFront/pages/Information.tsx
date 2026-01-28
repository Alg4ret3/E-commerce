
import React from 'react';
import { SectionTitle } from '../components/molecules';
import { Input, Button } from '../components/atoms';

const Information: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Sobre NARIÑOTEX" subtitle="Conoce nuestra visión de desarrollo para la industria de la moda en Colombia." />
        
        <div className="prose prose-lg max-w-none text-gray-600 mb-20 leading-relaxed">
          <p>
            Nariñotex nace como una plataforma integral para conectar a los artesanos, diseñadores e industriales del sistema moda en el departamento de Nariño con mercados nacionales e internacionales. 
            Nuestra misión es tejer redes de valor que potencien el talento local a través de la tecnología y la innovación comercial.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 not-prose">
            <div className="bg-[#1A1A1A] text-white p-10">
              <h3 className="text-2xl font-serif mb-4 text-[#D2B48C]">Nuestra Misión</h3>
              <p className="text-sm opacity-80">Transformar la industria textil regional mediante la digitalización y el acceso a eventos de talla mundial.</p>
            </div>
            <div className="border p-10">
              <h3 className="text-2xl font-serif mb-4">Nuestra Visión</h3>
              <p className="text-sm text-gray-400">Ser el principal referente de la moda ética y artesanal del suroccidente colombiano para el año 2030.</p>
            </div>
          </div>
        </div>

        <section className="bg-gray-50 p-12 mb-20">
          <SectionTitle title="Preguntas Frecuentes" centered />
          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              { q: "¿Hacen envíos a todo el país?", a: "Sí, realizamos envíos a todo el territorio colombiano sin costo adicional por compras superiores a $150.000." },
              { q: "¿Los productos son artesanales?", a: "La gran mayoría de nuestra colección de prendas es tejida a mano por artesanos locales, garantizando piezas únicas." },
              { q: "¿Cómo puedo ser expositor?", a: "En la sección de Stands puedes encontrar toda la información para reservar tu espacio en nuestra próxima feria." }
            ].map((faq, i) => (
              <details key={i} className="group border-b pb-4 cursor-pointer">
                <summary className="font-bold flex justify-between items-center list-none">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform"><i className="fa-solid fa-chevron-down"></i></span>
                </summary>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-serif mb-6">Contáctanos</h3>
            <p className="text-gray-500 mb-8">¿Tienes alguna duda o quieres cotizar una producción a gran escala? Nuestro equipo está listo para asesorarte.</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-envelope text-[#800000]"></i>
                <span className="text-sm font-bold">contacto@narinotex.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-phone text-[#800000]"></i>
                <span className="text-sm font-bold">+57 300 000 0000</span>
              </div>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-location-dot text-[#800000]"></i>
                <span className="text-sm font-bold">Pasto, Nariño, Colombia</span>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-white shadow-xl p-8 border">
            <Input label="Nombre" />
            <Input label="Email" type="email" />
            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Mensaje</label>
              <textarea className="w-full border border-gray-200 px-4 py-3 text-sm focus:border-[#800000] outline-none h-32"></textarea>
            </div>
            <Button className="w-full">Enviar Mensaje</Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Information;

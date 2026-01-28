
import React from 'react';
import { SectionTitle } from '../components/molecules';
import { Badge } from '../components/atoms';

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <div className="bg-white border p-8 text-center mb-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-3xl text-gray-400 mb-6">
              <i className="fa-solid fa-user"></i>
            </div>
            <h3 className="text-xl font-serif">Camila Restrepo</h3>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Miembro desde 2023</p>
          </div>
          <nav className="flex flex-col border bg-white">
            <button className="p-4 text-left font-bold text-xs uppercase tracking-widest border-b hover:bg-gray-50 transition-colors text-[#800000]">Mi Perfil</button>
            <button className="p-4 text-left font-bold text-xs uppercase tracking-widest border-b hover:bg-gray-50 transition-colors">Mis Pedidos</button>
            <button className="p-4 text-left font-bold text-xs uppercase tracking-widest border-b hover:bg-gray-50 transition-colors">Mis Entradas</button>
            <button className="p-4 text-left font-bold text-xs uppercase tracking-widest border-b hover:bg-gray-50 transition-colors">Direcciones</button>
            <button className="p-4 text-left font-bold text-xs uppercase tracking-widest hover:bg-red-50 text-red-600 transition-colors">Cerrar Sesión</button>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:w-3/4">
          <SectionTitle title="Mis Pedidos Recientes" />
          
          <div className="space-y-6">
            {[1, 2].map(order => (
              <div key={order} className="bg-white border p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-bold uppercase tracking-wider">Orden #NTX-{1000 + order}</span>
                    <Badge className="bg-green-100 text-green-700">Entregado</Badge>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-400 uppercase">
                    <span>Fecha: 12 Mayo 2024</span>
                    <span>Total: $340.000</span>
                  </div>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                      <img src={`https://picsum.photos/seed/${order}${i}/100/100`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <button className="text-xs font-bold uppercase tracking-widest border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-all">Ver Detalle</button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 p-10 rounded-lg flex justify-between items-center">
            <div>
              <h4 className="text-lg font-serif mb-2">Estado de tus Boletas</h4>
              <p className="text-sm text-gray-500">Tienes 2 entradas activas para el próximo Fashion Week.</p>
            </div>
            <button className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">Descargar QR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

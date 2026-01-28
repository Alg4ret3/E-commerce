
import React from 'react';
import { useCart } from '../App';
import { Input, Button } from '../components/atoms';
import { SectionTitle } from '../components/molecules';

const Checkout: React.FC = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle title="Finalizar Pedido" subtitle="Completa tus datos para recibir tus productos." />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          {/* Shipping Form */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">1</span>
              Información de Envío
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Nombres" />
              <Input label="Apellidos" />
              <div className="md:col-span-2">
                <Input label="Dirección" placeholder="Calle, Carrera, Apto..." />
              </div>
              <Input label="Ciudad" />
              <Input label="Teléfono" />
            </div>
          </section>

          {/* Payment Method */}
          <section>
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">2</span>
              Método de Pago
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label className="border-2 p-6 cursor-pointer hover:border-[#800000] transition-all flex flex-col items-center gap-4 text-center">
                <input type="radio" name="pay" className="accent-[#800000]" />
                <i className="fa-solid fa-credit-card text-2xl text-gray-400"></i>
                <span className="text-xs font-bold uppercase">Tarjeta Crédito</span>
              </label>
              <label className="border-2 p-6 cursor-pointer hover:border-[#800000] transition-all flex flex-col items-center gap-4 text-center">
                <input type="radio" name="pay" className="accent-[#800000]" />
                <i className="fa-solid fa-building-columns text-2xl text-gray-400"></i>
                <span className="text-xs font-bold uppercase">PSE (Débito)</span>
              </label>
              <label className="border-2 p-6 cursor-pointer hover:border-[#800000] transition-all flex flex-col items-center gap-4 text-center">
                <input type="radio" name="pay" className="accent-[#800000]" />
                <i className="fa-solid fa-money-bill-transfer text-2xl text-gray-400"></i>
                <span className="text-xs font-bold uppercase">Wompi / Efecty</span>
              </label>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border p-8 sticky top-24">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 pb-4 border-b">Tu Orden</h3>
            <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-gray-500">{item.product.name} (x{item.quantity})</span>
                  <span className="font-bold">${(item.product.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 mb-8 pt-6 border-t">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Envío</span>
                <span className="text-green-600 font-bold uppercase text-[10px]">Gratis</span>
              </div>
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-[#800000]">${subtotal.toLocaleString()}</span>
              </div>
            </div>
            <Button className="w-full" size="lg" onClick={() => alert("¡Pedido Procesado! Gracias por confiar en Nariñotex.")}>Pagar Ahora</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

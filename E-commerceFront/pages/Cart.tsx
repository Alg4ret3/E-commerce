
import React from 'react';
import { useCart } from '../App';
import { Button } from '../components/atoms';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <i className="fa-solid fa-basket-shopping text-7xl text-gray-200 mb-8"></i>
        <h2 className="text-4xl font-serif mb-6">Tu bolsa está vacía</h2>
        <p className="text-gray-500 mb-12">Parece que aún no has agregado tesoros textiles a tu bolsa.</p>
        <Link to="/catalog">
          <Button variant="primary" size="lg">Ir a comprar</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-12">Tu Bolsa de Compras</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item, index) => (
            <div key={index} className="flex gap-6 py-8 border-b last:border-0 group">
              <div className="w-32 aspect-[3/4] bg-gray-100 overflow-hidden">
                <img src={item.product.image} className="w-full h-full object-cover" alt={item.product.name} />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif">{item.product.name}</h3>
                    <button onClick={() => removeFromCart(index)} className="text-gray-400 hover:text-red-600 transition-colors">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                    <span>Talla: <span className="text-black">{item.selectedSize}</span></span>
                    <span>Color: <span className="text-black">{item.selectedColor}</span></span>
                    <span>Cant: <span className="text-black">{item.quantity}</span></span>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <p className="font-bold text-[#800000]">${(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-8 sticky top-24">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-8 border-b pb-4">Resumen</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Envío</span>
                <span className="text-green-600 font-bold">Gratis</span>
              </div>
              <div className="pt-4 border-t flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-[#800000]">${subtotal.toLocaleString()}</span>
              </div>
            </div>
            <Link to="/checkout">
              <Button className="w-full" size="lg">Finalizar Compra</Button>
            </Link>
            <p className="text-center mt-6 text-xs text-gray-400 leading-relaxed uppercase tracking-tighter">
              Paga seguro con MercadoPago, Visa, Mastercard & PSE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { Button, Badge } from '../components/atoms';
import { useCart } from '../App';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="p-20 text-center">Producto no encontrado</div>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Por favor selecciona talla y color obligatoriamente.");
      return;
    }
    addToCart(product, selectedSize, selectedColor, quantity);
    alert("¡Agregado al carrito!");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square bg-gray-100 overflow-hidden cursor-pointer hover:opacity-75">
                <img src={`https://picsum.photos/seed/${product.id}${i}/300/300`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-8 pb-8 border-b">
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-[#D2B48C]/20 text-[#800000]">{product.collection}</Badge>
              <div className="flex text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fa-solid fa-star ${i >= Math.floor(product.rating) ? 'text-gray-200' : ''}`}></i>
                ))}
              </div>
            </div>
            <h1 className="text-5xl font-serif mb-4 leading-tight">{product.name}</h1>
            <p className="text-3xl font-bold text-[#800000] mb-6">${product.price.toLocaleString()}</p>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-8 mb-10">
            {/* Size Selector */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Seleccionar Talla <span className="text-red-600">*</span></h4>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-12 flex items-center justify-center border-2 transition-all ${selectedSize === size ? 'border-[#800000] bg-[#800000] text-white shadow-lg' : 'border-gray-200 hover:border-gray-400'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Seleccionar Color <span className="text-red-600">*</span></h4>
              <div className="flex flex-wrap gap-4">
                {product.colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`group flex items-center gap-2 px-3 py-2 border-2 transition-all ${selectedColor === color.name ? 'border-[#800000] ring-1 ring-[#800000]' : 'border-transparent'}`}
                  >
                    <span className="w-6 h-6 rounded-full border" style={{ backgroundColor: color.hex }}></span>
                    <span className="text-xs uppercase font-bold text-gray-500">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Cantidad</h4>
              <div className="flex items-center gap-4">
                <div className="flex border border-gray-200">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-100 transition-colors">-</button>
                  <span className="px-6 py-2 border-x font-bold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-100 transition-colors">+</button>
                </div>
                <span className="text-xs text-gray-400">{product.stock} unidades disponibles</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleAddToCart} size="lg" className="flex-grow">Agregar al Carrito</Button>
            <button className="w-16 h-16 border-2 border-gray-200 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all">
              <i className="fa-regular fa-heart text-xl"></i>
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t space-y-4">
            <div className="flex justify-between text-sm">
              <span className="font-bold text-gray-400 uppercase">Material:</span>
              <span>{product.material}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-bold text-gray-400 uppercase">Envío:</span>
              <span className="text-green-600 font-bold">Gratis en Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

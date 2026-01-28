
import React from 'react';
import { useCart } from '../App';
import { Button } from '../components/atoms';
import { SectionTitle } from '../components/molecules';
import { Link } from 'react-router-dom';

const Comparison: React.FC = () => {
  const { comparisonList, removeFromComparison } = useCart();

  if (comparisonList.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <SectionTitle title="Comparar Productos" subtitle="No hay productos en tu lista de comparación." centered />
        <Link to="/catalog">
          <Button variant="primary">Explorar Colección</Button>
        </Link>
      </div>
    );
  }

  const features = ['Precio', 'Material', 'Colección', 'Tallas Disponibles'];

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionTitle title="Comparativa Detallada" subtitle="Analiza y elige la mejor opción para tu estilo." />
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-6 border-b border-gray-100 min-w-[200px]">
                <span className="text-xs uppercase font-bold text-gray-400">Características</span>
              </th>
              {comparisonList.map(product => (
                <th key={product.id} className="p-6 border-b border-gray-100 min-w-[300px]">
                  <div className="relative group">
                    <button 
                      onClick={() => removeFromComparison(product.id)}
                      className="absolute -top-4 -right-4 w-8 h-8 bg-white shadow-md rounded-full text-red-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                    <div className="aspect-[3/4] mb-4 bg-gray-100">
                      <img src={product.image} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-serif text-lg">{product.name}</h3>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-6 border-b border-gray-100 font-bold uppercase text-xs text-gray-500">Precio</td>
              {comparisonList.map(p => (
                <td key={p.id} className="p-6 border-b border-gray-100 text-[#800000] font-bold text-xl">${p.price.toLocaleString()}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 border-b border-gray-100 font-bold uppercase text-xs text-gray-500">Material</td>
              {comparisonList.map(p => (
                <td key={p.id} className="p-6 border-b border-gray-100 text-sm">{p.material}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 border-b border-gray-100 font-bold uppercase text-xs text-gray-500">Colección</td>
              {comparisonList.map(p => (
                <td key={p.id} className="p-6 border-b border-gray-100 text-sm italic">{p.collection}</td>
              ))}
            </tr>
            <tr>
              <td className="p-6 border-b border-gray-100 font-bold uppercase text-xs text-gray-500">Tallas</td>
              {comparisonList.map(p => (
                <td key={p.id} className="p-6 border-b border-gray-100 flex flex-wrap gap-2">
                  {p.sizes.map(s => <span key={s} className="px-2 py-1 bg-gray-100 text-[10px] rounded">{s}</span>)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-6"></td>
              {comparisonList.map(p => (
                <td key={p.id} className="p-6">
                  <Link to={`/product/${p.id}`}>
                    <Button variant="primary" size="sm" className="w-full">Comprar</Button>
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;

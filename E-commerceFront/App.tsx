
import React, { useState, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Product, CartItem } from './types';
import MainLayout from './components/templates/MainLayout';
import { sdk } from './lib/medusa';

// Temporary verification
sdk.store.product.list().then(({ products }) => {
  console.log("Medusa Connection Verified! Products found:", products.length);
}).catch(err => {
  console.error("Medusa Connection Failed:", err);
});

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Comparison from './pages/Comparison';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Tickets from './pages/Tickets';
import Stands from './pages/Stands';
import Information from './pages/Information';

// Context
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string, color: string, quantity: number) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  comparisonList: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [comparisonList, setComparisonList] = useState<Product[]>([]);

  const addToCart = (product: Product, size: string, color: string, quantity: number) => {
    setCart(prev => [...prev, { product, selectedSize: size, selectedColor: color, quantity }]);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  const addToComparison = (product: Product) => {
    if (comparisonList.length >= 4) return alert("Máximo 4 productos para comparar");
    if (!comparisonList.find(p => p.id === product.id)) {
      setComparisonList(prev => [...prev, product]);
    }
  };

  const removeFromComparison = (productId: string) => {
    setComparisonList(prev => prev.filter(p => p.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, comparisonList, addToComparison, removeFromComparison }}>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/stands" element={<Stands />} />
            <Route path="/info" element={<Information />} />
          </Routes>
        </MainLayout>
      </Router>
    </CartContext.Provider>
  );
};

export default App;

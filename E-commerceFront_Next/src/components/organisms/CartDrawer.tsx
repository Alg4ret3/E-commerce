'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
             transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-background z-[110] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-8 py-8 border-b border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <ShoppingBag size={18} strokeWidth={1} className="text-neutral-400" />
                <Typography variant="h3" className="text-xs font-sans uppercase tracking-[0.3em] font-medium text-primary">Archivo de Bolsa ({totalItems})</Typography>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-neutral-400 hover:text-primary transition-colors"
                aria-label="Cerrar bolsa"
              >
                <X size={18} strokeWidth={1} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Typography variant="body" className="text-neutral-400 italic mb-8">Tu bolsa está vacía</Typography>
                  <Button variant="outline" size="md" onClick={() => setIsCartOpen(false)}>Explorar Catálogo</Button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-6 group">
                      <div className="w-24 aspect-[3/4] bg-muted overflow-hidden border border-border">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <Typography variant="small" className="text-[10px] uppercase tracking-widest font-medium text-primary line-clamp-1">{item.name}</Typography>
                            <button 
                              onClick={() => removeFromCart(item.id, item.size, item.color)}
                              className="text-neutral-300 hover:text-primary transition-colors p-1"
                            >
                              <Trash2 size={12} strokeWidth={1} />
                            </button>
                          </div>
                          <div className="flex gap-4 mb-3">
                            {item.size && <span className="text-[8px] uppercase tracking-widest text-neutral-400">Talla: <span className="text-primary font-medium">{item.size}</span></span>}
                            {item.color && <span className="text-[8px] uppercase tracking-widest text-neutral-400">Color: <span className="text-primary font-medium">{item.color}</span></span>}
                          </div>
                          <Typography variant="body" className="text-[11px] font-serif italic text-neutral-500">{item.price}</Typography>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center border border-border/50">
                            <button 
                              onClick={() => updateQuantity(item.id, -1, item.size, item.color)}
                              className="p-2 text-neutral-400 hover:bg-muted transition-colors"
                            >
                              <Minus size={10} strokeWidth={1} />
                            </button>
                            <span className="text-[10px] px-2 font-sans text-neutral-600 w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1, item.size, item.color)}
                              className="p-2 text-neutral-400 hover:bg-muted transition-colors"
                            >
                              <Plus size={10} strokeWidth={1} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="px-8 py-10 border-t border-border/50 bg-background">
                <div className="flex justify-between items-baseline mb-10">
                  <Typography variant="small" className="text-[9px] text-neutral-400 uppercase tracking-[0.4em]">Subtotal Final</Typography>
                  <Typography variant="h3" className="text-xl font-sans font-medium text-primary">${totalPrice.toLocaleString('es-CO', { minimumFractionDigits: 0 })} COP</Typography>
                </div>
                <div className="space-y-6">
                  <button className="w-full bg-primary text-background py-5 text-[10px] uppercase tracking-[0.3em] font-medium hover:opacity-90 transition-all border border-primary">
                    Proceder al Pago
                  </button>
                  <Typography variant="small" className="text-center block text-neutral-400 text-[8px] tracking-[0.2em] font-light leading-relaxed uppercase">
                    IVA incluido • Envíos asegurados por DHL
                  </Typography>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

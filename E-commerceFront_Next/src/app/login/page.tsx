'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/organisms/Navbar';
import { Footer } from '@/components/organisms/Footer';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-20 flex items-center justify-center">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 bg-card border border-border shadow-2xl overflow-hidden min-h-[600px]">
          
          {/* Visual Side (Hidden on mobile) */}
          <div className="hidden lg:block relative bg-muted overflow-hidden">
            <motion.img 
              key={isLogin ? 'login-img' : 'register-img'}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              src={isLogin 
                ? "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200" 
                : "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200"
              }
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
              alt="Auth visual"
            />
            <div className="absolute inset-0 bg-primary/10" />
            <div className="relative z-10 h-full p-16 flex flex-col justify-end text-white">
              <Typography variant="small" className="text-white/60 mb-4 tracking-[0.4em]">NariñoTex Archive</Typography>
              <Typography variant="h2" className="text-white mb-6 editorial-spacing">
                {isLogin ? "Bienvenido de Nuevo" : "Únete al Legado"}
              </Typography>
              <Typography variant="body" className="text-white/80 text-sm font-light leading-relaxed max-w-xs">
                {isLogin 
                  ? "Accede a tu cuenta corporativa para gestionar pedidos y colecciones exclusivas."
                  : "Crea tu perfil profesional para acceder a nuestro catálogo completo y servicios técnicos."
                }
              </Typography>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 sm:p-16 flex flex-col justify-center">
            <div className="mb-12">
              <Typography variant="small" className="text-neutral-400 mb-2 tracking-[0.2em] uppercase">Cuenta</Typography>
              <Typography variant="h3" className="font-sans font-light tracking-tight">
                {isLogin ? "Iniciar Sesión" : "Crear Perfil"}
              </Typography>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="name-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Nombre Completo</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-primary transition-colors" size={16} strokeWidth={1} />
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-muted/30 border border-border py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-neutral-500"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Email Corporativo</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-primary transition-colors" size={16} strokeWidth={1} />
                  <input 
                    type="email" 
                    placeholder="example@narinotex.com"
                    className="w-full bg-muted/30 border border-border py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-neutral-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Contraseña</label>
                  {isLogin && (
                    <Link href="#" className="text-[10px] uppercase tracking-widest text-neutral-400 hover:text-primary transition-colors">¿Olvidó su contraseña?</Link>
                  )}
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-primary transition-colors" size={16} strokeWidth={1} />
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full bg-muted/30 border border-border py-4 pl-12 pr-12 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-neutral-500"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} strokeWidth={1} /> : <Eye size={16} strokeWidth={1} />}
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full py-4" size="lg">
                  {isLogin ? "Acceder" : "Completar Registro"}
                </Button>
              </div>
            </form>

            <div className="mt-10 text-center">
              <button 
                onClick={toggleAuth}
                className="text-[10px] tracking-widest uppercase font-medium text-neutral-500 hover:text-primary transition-all"
              >
                {isLogin 
                  ? "¿No tiene cuenta? Regístrese aquí" 
                  : "¿Ya tiene cuenta? Inicie sesión"
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

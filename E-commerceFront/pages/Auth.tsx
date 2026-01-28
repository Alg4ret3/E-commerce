
import React, { useState } from 'react';
import { Input, Button } from '../components/atoms';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-20 px-4">
      <div className="bg-white w-full max-w-md p-12 shadow-2xl rounded-sm">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#800000] mx-auto flex items-center justify-center text-white font-bold text-3xl mb-6">N</div>
          <h2 className="text-3xl font-serif mb-2">{isLogin ? 'Bienvenido de nuevo' : 'Crear una cuenta'}</h2>
          <p className="text-gray-400 text-sm">Entra al mundo de la moda Nariñotex</p>
        </div>

        <form className="space-y-6">
          {!isLogin && (
            <Input label="Nombre Completo" placeholder="Ej: Juan Pérez" />
          )}
          <Input label="Correo Electrónico" type="email" placeholder="tu@email.com" />
          <Input label="Contraseña" type="password" placeholder="••••••••" />
          
          {isLogin && (
            <div className="flex justify-end">
              <button type="button" className="text-xs text-gray-400 hover:text-[#800000] transition-colors">¿Olvidaste tu contraseña?</button>
            </div>
          )}

          <Button type="submit" className="w-full" size="lg">
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </Button>
        </form>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-500 mb-4">
            {isLogin ? '¿Aún no tienes cuenta?' : '¿Ya tienes una cuenta?'}
          </p>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-bold uppercase tracking-widest text-[#800000] hover:underline"
          >
            {isLogin ? 'Crea una ahora' : 'Ingresa aquí'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

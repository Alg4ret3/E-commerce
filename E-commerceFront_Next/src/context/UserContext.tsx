'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  country: string;
  isDefault: boolean;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  addresses: Address[];
  isLoggedIn: boolean;
}

interface UserContextType {
  user: User;
  updateProfile: (data: Partial<Pick<User, 'name' | 'phone'>>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  removeAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  logout: () => void;
}

const mockUser: User = {
  name: "Santiago de Nariño",
  email: "santiago@narinotex.archive",
  phone: "+57 321 456 7890",
  isLoggedIn: true,
  addresses: [
    {
      id: '1',
      label: 'Atelier Principal',
      street: 'Carrera 27 #18-45',
      city: 'Pasto',
      country: 'Colombia',
      isDefault: true
    }
  ]
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(mockUser);

  const updateProfile = (data: Partial<Pick<User, 'name' | 'phone'>>) => {
    setUser(prev => ({ ...prev, ...data }));
  };

  const addAddress = (address: Omit<Address, 'id'>) => {
    const newAddress = { ...address, id: Math.random().toString(36).substr(2, 9) };
    setUser(prev => ({
      ...prev,
      addresses: [...prev.addresses, newAddress]
    }));
  };

  const removeAddress = (id: string) => {
    setUser(prev => ({
      ...prev,
      addresses: prev.addresses.filter(a => a.id !== id)
    }));
  };

  const setDefaultAddress = (id: string) => {
    setUser(prev => ({
      ...prev,
      addresses: prev.addresses.map(a => ({
        ...a,
        isDefault: a.id === id
      }))
    }));
  };

  const logout = () => {
    setUser(prev => ({ ...prev, isLoggedIn: false }));
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      updateProfile, 
      addAddress, 
      removeAddress, 
      setDefaultAddress,
      logout 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};

import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <span className={`inline-block px-3 py-1 bg-gray-100 text-black text-[9px] font-bold uppercase tracking-widest ${className}`}>
    {children}
  </span>
);

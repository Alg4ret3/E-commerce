import React from 'react';

export const Input: React.FC<{ label?: string; type?: string; placeholder?: string; value?: string; onChange?: (e: any) => void; className?: string }> = ({
  label, type = "text", placeholder, value, onChange, className = ""
}) => (
  <div className={`w-full ${className}`}>
    {label && <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{label}</label>}
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      className="w-full border-b border-gray-200 py-3 text-sm focus:border-black outline-none transition-all bg-transparent font-light" 
    />
  </div>
);

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  type = 'button' 
}) => {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-[0.2em] transition-all duration-500 disabled:opacity-50 text-[10px]";
  const variants = {
    primary: "bg-[#800000] text-white hover:bg-black",
    secondary: "bg-[#D2B48C] text-black hover:bg-[#b89a74]",
    outline: "border border-black text-black hover:bg-black hover:text-white",
    ghost: "text-black hover:bg-gray-100",
    dark: "bg-black text-white hover:bg-[#800000]"
  };
  const sizes = {
    sm: "px-6 py-2.5",
    md: "px-10 py-4",
    lg: "px-14 py-5 text-[11px]"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

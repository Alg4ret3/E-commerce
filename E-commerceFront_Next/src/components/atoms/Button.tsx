import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-none font-medium transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer uppercase tracking-widest text-[10px] sm:text-xs';
  
  const variants = {
    primary: 'bg-primary text-background hover:opacity-90 shadow-sm border border-primary',
    secondary: 'bg-muted text-primary hover:opacity-80 border border-border',
    outline: 'border border-border text-primary hover:bg-primary hover:text-background',
    ghost: 'text-secondary hover:text-primary hover:bg-muted',
  };
  
  const sizes = {
    sm: 'px-6 py-2',
    md: 'px-10 py-3',
    lg: 'px-14 py-4',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props as any}
    >
      {children}
    </motion.button>
  );
};

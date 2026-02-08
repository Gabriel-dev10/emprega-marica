import React from 'react';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600 shadow-sm",
    secondary: "bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 focus:ring-primary-500",
    outline: "bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    ghost: "bg-transparent text-neutral-600 hover:text-primary-600 hover:bg-neutral-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
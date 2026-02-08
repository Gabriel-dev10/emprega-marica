import React from 'react';
import { CardProps } from '../../types';

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-xl border border-neutral-100 shadow-sm overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
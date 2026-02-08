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
        bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary-200 dark:hover:border-primary-700' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
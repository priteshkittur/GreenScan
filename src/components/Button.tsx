import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-medium transition-all ${
      variant === 'primary'
        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    } flex items-center gap-2`}
  >
    {children}
  </button>
);
import { ButtonHTMLAttributes } from 'react';

export const Button = ({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input {...props} className="w-full px-3 py-2 border rounded" />
  );
};

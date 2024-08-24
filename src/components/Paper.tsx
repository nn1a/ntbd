import React from 'react';

interface PaperProps {
  children: React.ReactNode;
  className?: string;
  elevation?: number;
}

const Paper: React.FC<PaperProps> = ({ children, className = '', elevation = 1 }) => {
  const shadowClass = {
    0: 'shadow-none',
    1: 'shadow-sm',
    2: 'shadow',
    3: 'shadow-md',
    4: 'shadow-lg',
    5: 'shadow-xl',
    6: 'shadow-2xl',
  }[elevation];

  return <div className={`rounded-lg bg-white p-6 ${shadowClass} ${className}`}>{children}</div>;
};

export default Paper;

import React from 'react';

interface GridProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  columns?: number;
  gap?: string;
  container?: boolean;
  item?: boolean;
}

const Grid: React.FC<GridProps> = ({
  children,
  className = '',
  style,
  columns = 12,
  gap = '4',
  container = true,
  item = false,
}) => {
  const containerStyle: React.CSSProperties = {
    display: container ? 'grid' : 'block',
    gridTemplateColumns: container ? `repeat(${columns}, 1fr)` : undefined,
    gap: container ? gap : undefined,
    ...style,
  };

  return (
    <div className={`${className} ${item ? 'col-span-1' : ''}`} style={containerStyle}>
      {children}
    </div>
  );
};

export default Grid;

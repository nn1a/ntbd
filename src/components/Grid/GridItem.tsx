import React from 'react';

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  span?: number;
}

const GridItem: React.FC<GridItemProps> = ({ children, className = '', style, span = 1 }) => {
  const itemStyle: React.CSSProperties = {
    gridColumn: `span ${span}`,
    ...style,
  };

  return (
    <div className={className} style={itemStyle}>
      {children}
    </div>
  );
};

export default GridItem;

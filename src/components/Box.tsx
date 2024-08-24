import React from 'react';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  p?: string;
  m?: string;
  bgColor?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  display?: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none';
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

const Box: React.FC<BoxProps> = ({
  children,
  className = '',
  style,
  p = '0',
  m = '0',
  bgColor = 'transparent',
  borderRadius = '0',
  borderColor = 'transparent',
  borderWidth = '0',
  display = 'block',
  flexDirection = 'row',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
}) => {
  const containerStyle: React.CSSProperties = {
    padding: p,
    margin: m,
    backgroundColor: bgColor,
    borderRadius: borderRadius,
    border: `${borderWidth} solid ${borderColor}`,
    display: display,
    flexDirection: flexDirection,
    alignItems: alignItems,
    justifyContent: justifyContent,
    ...style,
  };

  return (
    <div className={className} style={containerStyle}>
      {children}
    </div>
  );
};

export default Box;

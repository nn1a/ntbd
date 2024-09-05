import React from 'react';

export interface MenuItem {
  label?: string;
  href?: string;
  align?: 'left' | 'right';
  icon?: React.ReactNode;
  onClick?: () => void;
  isBrandItem?: boolean;
  isLogo?: boolean;
}

interface NavbarProps {
  menuItems?: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems = [] }) => {
  return (
    <nav className="h-16 bg-gray-200 shadow-lg z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          {menuItems
            .filter((item) => item.isLogo || item.isBrandItem)
            .map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex cursor-pointer items-center space-x-2"
                onClick={item.onClick}
                aria-label={item.label || ''}
              >
                {item.isLogo && (
                  <div className="flex h-11 w-8 items-center">
                    {typeof item.icon === 'string' ? (
                      <img src={item.icon} alt="Logo" className="h-full w-full" />
                    ) : (
                      item.icon
                    )}
                  </div>
                )}
                {item.isBrandItem && !item.isLogo && (
                  <span className="cursor-pointer text-xl font-bold">{item.label}</span>
                )}
              </a>
            ))}

          <ul className="flex space-x-4">
            {menuItems
              .filter((item) => !item.isLogo && !item.isBrandItem && item.align !== 'right')
              .map((item, index) => (
                <li key={index} className="list-none">
                  {item.href ? (
                    <a href={item.href} className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <button
                      onClick={item.onClick}
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.label}</span>
                    </button>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <ul className="flex space-x-4">
          {menuItems
            .filter((item) => !item.isLogo && !item.isBrandItem && item.align === 'right')
            .map((item, index) => (
              <li key={index} className="list-none">
                {item.href ? (
                  <a href={item.href} className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <button
                    onClick={item.onClick}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </button>
                )}
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

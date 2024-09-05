import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface MenuItem {
  label?: string;
  href?: string;
  icon?: React.ReactNode;
  subItems?: MenuItem[];
  align?: 'left' | 'right';
  onClick?: () => void;
  isLogo?: boolean;
  isBrandItem?: boolean;
}

interface LeftSidebarProps {
  menuItems: MenuItem[];
}

const getPaddingClass = (depth: number): string => {
  switch (depth) {
    case 1:
      return 'pl-2';
    case 2:
      return 'pl-4';
    case 3:
      return 'pl-6';
    case 4:
      return 'pl-8';
    default:
      return 'pl-0';
  }
};

const Sidebar: React.FC<LeftSidebarProps> = ({ menuItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<Set<string>>(new Set());
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  useEffect(() => {
    setSelectedPath(location.pathname);
    const findAndOpenMenu = (items: MenuItem[], path: string, parentIndex: string = ''): string | null => {
      for (const [index, item] of items.entries()) {
        const itemIndex = parentIndex ? `${parentIndex}-${index}` : `${index}`;
        if (item.href === path) {
          setOpenMenu((prev) => {
            const newOpenMenu = new Set(prev);
            newOpenMenu.add(itemIndex);
            return newOpenMenu;
          });
          return itemIndex;
        }
        if (item.subItems) {
          const subItemIndex = findAndOpenMenu(item.subItems, path, itemIndex);
          if (subItemIndex) {
            setOpenMenu((prev) => new Set(prev).add(itemIndex));
            return subItemIndex;
          }
        }
      }
      return null;
    };

    findAndOpenMenu(menuItems, location.pathname);
  }, [location.pathname, menuItems]);

  const toggleMenu = (index: string) => {
    setOpenMenu((prev) => {
      const newOpenMenu = new Set(prev);
      if (newOpenMenu.has(index)) {
        newOpenMenu.delete(index);
      } else {
        newOpenMenu.add(index);
      }
      return newOpenMenu;
    });
  };

  const handleClick = (href?: string) => {
    if (href) {
      navigate(href);
    }
  };

  const renderMenuItems = (items: MenuItem[], depth: number = 0, parentIndex: string = ''): JSX.Element => {
    return (
      <ul className="list-none p-0">
        {items.map((item, index) => {
          const itemIndex = parentIndex ? `${parentIndex}-${index}` : `${index}`;
          const hasSubItems = item.subItems && item.subItems.length > 0;
          const isOpen = openMenu.has(itemIndex);
          const isSelected = item.href === selectedPath;

          return (
            <li key={itemIndex}>
              <span
                className={`flex cursor-pointer items-center rounded px-4 py-2 ${isSelected ? 'bg-blue-300' : 'hover:bg-blue-200'}`}
                onClick={() => {
                  if (item.href) {
                    handleClick(item.href);
                  }
                  if (hasSubItems) {
                    toggleMenu(itemIndex);
                  }
                }}
              >
                <span className={`relative ${getPaddingClass(depth)}`}></span>
                {item.icon && <span className="mr-2">{item.icon}</span>}

                <span>{item.label}</span>
                {hasSubItems && (
                  <span className={`ml-auto transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                )}
              </span>
              {isOpen && item.subItems && renderMenuItems(item.subItems, depth + 1, itemIndex)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div
      className="w-64 overflow-y-auto border-r border-gray-300 bg-gray-200 p-4"
      style={{ height: 'calc(100vh - 56px)' }}
    >
      {renderMenuItems(menuItems)}
    </div>
  );
};

export default Sidebar;

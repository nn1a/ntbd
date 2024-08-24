import React, { useEffect, useRef, useState } from 'react';

type Option = {
  label: string;
  value: string | number;
};

type SelectProps = {
  label?: string;
  placeHolder?: string;
  options: Option[];
  value: string | number;
  width?: string;
  maxOpenSize?: string;
  onChange: (value: string | number) => void;
};

export const Select: React.FC<SelectProps> = ({
  label,
  placeHolder,
  options,
  value,
  width = 'w-40',
  maxOpenSize = 'max-h-40',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState<'down' | 'up'>('down');
  const selectRef = useRef<HTMLDivElement>(null);
  const handleOptionClick = (value: string | number) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollAndResize = () => {
      if (selectRef.current) {
        const rect = selectRef.current.getBoundingClientRect();
        const isBelow = rect.bottom + 200 > window.innerHeight;

        setDropdownDirection(isBelow ? 'up' : 'down');
      }
    };

    console.log(selectRef.current?.getBoundingClientRect());

    handleScrollAndResize();

    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectRef} className={`relative ${width}`}>
      {label && <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>}
      <button
        type="button"
        className="flex w-full cursor-pointer items-center justify-between rounded-md border border-gray-300 bg-white py-2 pl-3 pr-0 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block truncate">{options.find((opt) => opt.value === value)?.label || placeHolder || ''}</span>
        <span className="flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul
          className={`absolute z-10 mt-1 ${maxOpenSize} w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
            dropdownDirection === 'up' ? 'bottom-full mb-2' : 'top-full mt-1'
          }`}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`relative cursor-pointer select-none py-2 pl-3 hover:bg-blue-300 ${
                option.value === value ? 'bg-blue-400 text-white' : 'text-gray-900'
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              <span className={`block truncate ${option.value === value ? 'font-semibold' : 'font-normal'}`}>
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

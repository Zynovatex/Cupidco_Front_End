"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DropdownProps {
  width?: string;
  height?: string;
  values: string[];
  id: string;
  label: string;
  color?: string;
  fontSizeLabel?: string;
  fontSizeValue?: string;
  radius?: string;
  selectedValue?: string | null;
  onSelect?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  width = "w-[100%]",
  height = "h-10",
  values,
  id,
  label,
  color = "text-primary-purple",
  fontSizeLabel = "text-sm md:text-md lg:text-lg",
  fontSizeValue = "text-md",
  radius = "rounded-lg",
  selectedValue,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const IconComponent = isOpen ? FaChevronUp : FaChevronDown;

  return (
    <div className={`peer-focus-within:relative inline-block ${width}`}>
      <button
        id={id}
        onClick={toggleDropdown}
        className={`
          ${height} 
          ${width}
          ${fontSizeValue} 
          ${color} 
          ${radius} 
          bg-[#FFF4F1] 
          hover:bg-[#F9D8D0]
          border-1
          border-[#4D194D]
          focus:border-none 
          font-normal 
          text-left 
          inline-flex 
          items-center 
          justify-between 
          px-4 
          font-Quicksand
          truncate
        `}
        type="button"
      >
        <div className="flex-1 truncate">{selectedValue || label}</div>
        <span
          className="
            ml-2
            text-xs
            text-primary-purple
            flex-shrink-0
        "
        >
          <IconComponent size="1em" className="sm:w-3 sm:h-3" />
        </span>
      </button>

      {isOpen && (
        <div
          className={`
            bg-[#FFF4F1]
            divide-gray-100 
            absolute z-10 
            divide-y 
            shadow 
            mt-1
            ${width}
            ${radius}

          `}
        >
          <ul className={`py-1 ${fontSizeLabel} font-Quicksand`}>
            {values.map((value) => (
              <li key={value}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect && onSelect(value); // Check if onSelect is defined before calling
                    setIsOpen(false);
                  }}
                  className={`
                    block 
                    px-4 
                    py-2 
                    hover:bg-[#F9D8D0] 
                     ${color} 
                    font-medium
                    truncate
                    `}
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

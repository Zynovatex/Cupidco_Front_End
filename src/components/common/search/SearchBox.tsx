"use client";

import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBoxProps {
  width?: string;
  height?: string;
  textSize?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  width = "100%",
  height = "100%",
  textSize = "sm",
  placeholder,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className="relative">
      <div className="absolute mt-2 left-0 flex items-center pl-2 text-4d194d">
        <FiSearch
          className={`text-${inputValue.length > 0 ? "gray-500" : "4d194d"}`}
        />
      </div>
      <input
        type="text"
        className={`border border-[#4d194d] text-[#4d194d] text-${textSize} px-2 py-1 w-full sm:w-${width} md:w-${width} lg:w-${width} h-${height} bg-white focus:outline-none focus:border-[#4d194d] focus:ring-transparent pl-8 rounded-full font-PlayfairDisplay`}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;

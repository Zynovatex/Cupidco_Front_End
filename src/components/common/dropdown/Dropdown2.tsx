import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownProps {
  text?: string;
  width?: string;
  options: string[];
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
  optionsBgColor?: string;
  onChange: (selectedOption: string) => void;
}

const Dropdown2: React.FC<DropdownProps> = ({
  options,
  onChange,
  bgColor,
  borderColor,
  width,
  text,
  borderRadius,
  optionsBgColor,
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOption = e.target.value;
    setSelectedOption(newOption);
    if (onChange) {
      onChange(newOption);
    }
  };

  return (
    <div className="">
      {/* dropdown and icon  */}
      <div>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className={`${bgColor} ${borderColor} mt-4 ${width} ${borderRadius} flex text-base md:text-lg text-primary-purple font-playfair-display`}
        >
          {options.map((option, index) => (
            <option key={index} value={option} className={`${optionsBgColor}`}>
              {option}
            </option>
          ))}
        </select>
        <div className="mt-[-37px] flex justify-end text-3xl mr-[6px] md:mr-2">
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
};

export default Dropdown2;

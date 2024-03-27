import React from "react";

interface InputProps {
  id?: string;
  name?: string;
  width?: string;
  value?: string;
  disabled?: boolean;
  bgColor?: string;
  borderColor?: string;
  borderRadius?: string;
  placeholder?: string;
  frontIcon?: React.ReactNode; // Change the type to React.ReactNode
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  width,
  value,
  bgColor,
  disabled,
  borderColor,
  placeholder,
  borderRadius,
  frontIcon,
}) => {
  return (
    <>
      <div className="relative">
        {frontIcon && (
          <div className="absolute left-0 top-0 mt-8 cursor-pointer text-[#4D194D]/[.50] text-xl ml-3">
            {frontIcon}
          </div>
        )}
        <input
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          className={`${width} ${bgColor} ${borderColor} ${borderRadius} font-PlayfairDisplay text-[#4D194D] text-md md:text-lg mt-5 ${
            frontIcon ? "pl-10" : ""
          }`}
        />
      </div>
    </>
  );
};

export default Input;

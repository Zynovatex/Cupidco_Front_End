import React, { useState } from "react";

interface TextFieldProps {
  id: string;
  value?: string;
  name?: string;
  label?: string;
  type?: string;
  width?: string;
  height?: string;
  radius?: string;
  fontSizeLabel?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  bgColor?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  value,
  name,
  label,
  type = "text",
  disabled,
  formatPrice,
  fontSizeLabel = "text-md",
  width = "w-full",
  height = "h-12",
  radius = "rounded-lg",
  required,
  bgColor = "bg-white",
  placeholder = "",
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const inputStyle = {
    boxShadow: isFocused ? `0 0 0 1px #4D194D` : "none",
    border: isFocused ? "none" : "1px solid #4D194D",
  };

  return (
    <div className="relative font-PlayfairDisplay font-normal
    text-primary-purple">
      <input
        value={inputValue}
        name={name}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        style={inputStyle}
        className={`
          peer
          p-5
          ${bgColor}
          border-[1px]
          border-[#4D194D]
          transition
          disabled:opacity-40
          disabled:cursor-not-allowed
          focus:outline-none
          focus:shadow-outline
          ${width} ${height} ${radius}
        `}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        required={required}
      />
      <label
        className={`
        ${fontSizeLabel} 
          absolute
          text-md
          duration-150
          transform
          -translate-y-3
          top-2
          z-10
          origin-[0]
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-85
          peer-focus:-translate-y-5
          peer-focus:bg-input-bg 
          peer-focus:px-2
          peer-disabled:opacity-40
          font-quicksand
          font-normal
          ${formatPrice ? "left-9" : "left-4"}
          ${
            isFocused || inputValue || (required && !disabled)
              ? "scale-85 -translate-y-5 bg-input-bg px-1"
              : ""
          }
        `}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default TextField;

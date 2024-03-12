"use client";

import { useState } from "react";

interface TextFieldProps {
  id: string;
  label: string;
  width?: string;
  maxHeight?: string;
  minHeight?: string;
  radius?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  maxLength?: number;
  bgColor?: string;
}

const TextArea: React.FC<TextFieldProps> = ({
  id,
  label,
  disabled,
  formatPrice,
  bgColor = "bg-white",
  width = "w-[100%]",
  maxHeight = "",
  radius = "rounded-lg",
  required,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    if (maxLength && value.length > maxLength) {
      return;
    }
    setInputValue(value);
  };

  const textareaStyle = {
    boxShadow: isFocused ? `0 0 0 2px #4D194D` : "none",
    border: isFocused ? "none" : "1.8px solid #4D194D",
  };

  return (
    <div className="relative w-full font-playfair-display font-normal text-[16px]">
      <textarea
        id={id}
        disabled={disabled}
        placeholder=" "
        style={textareaStyle}
        className={`
                peer
                font-light
                ${bgColor}
                border-[1px]
                border-[#4D194D]
                transition
                disabled:opacity-40
                disabled:cursor-not-allowed
                focus:outline-none
                focus:shadow-outline
                resize-none
                ${width} ${radius} ${maxHeight}
        `}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        required={required}
      />
      <label
        className={`
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
                ${formatPrice ? "left-9" : "left-4"}
                ${
                  isFocused || inputValue || (required && !disabled)
                    ? "scale-85 -translate-y-5 bg-white px-2"
                    : ""
                }
        `}
        htmlFor={id}
      >
        {label}
      </label>
      {maxLength && (
        <div className=" items-center my-auto  text-xs text-primary-purple">
          {inputValue.length}/{maxLength}
        </div>
      )}
    </div>
  );
};

export default TextArea;

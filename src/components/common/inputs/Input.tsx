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
    boxShadow: isFocused ? `0 0 0 2px #4D194D` : "none",
    border: isFocused ? "none" : "1px solid #4D194D",
  };

  return (
    <div className="relative font-playfair-display font-normal">
      <input
        value={inputValue}
        name={name}
        id={id}
        disabled={disabled}
        placeholder=" "
        type={type}
        style={inputStyle}
        className={`
          peer
          p-4
          pt-6
          ${bgColor}
          border-[1px]
          transition
          disabled:opacity-40
          disabled:cursor-not-allowed
          focus:outline-none
          focus:shadow-outline
          border-[#4D194D]
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
              ? "scale-85 -translate-y-5 bg-input-bg  px-2"
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

export default Input;

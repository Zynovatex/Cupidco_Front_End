"use client";

interface CheckboxComponentProps {
  name: string;
  value: string;
  isSelected?: boolean;
  isRequired?: boolean;
  size?: "sm" | "md" | "lg";
  borderRadius?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?:
    | "font-normal"
    | "font-light"
    | "font-bold"
    | "font-semibold"
    | "font-extrabold";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  name,
  value,
  isSelected,
  isRequired,
  size = "md",
  borderRadius = "rounded-md",
  fontSize,
  fontColor = "text-[#4D194D]",
  fontWeight = "font-normal",
  onChange,
}) => {
  const sizeClass =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        name={name}
        value={value}
        defaultChecked={isSelected}
        required={isRequired}
        onChange={onChange}
        className={`
            form-checkbox 
            border-2 
            bg-transparent
            outline-transparent
          border-[#4D194D]
            focus:outline-none 
            focus:ring-transparent
            ${sizeClass} ${borderRadius}
            transition duration-300
            decoration-none
          checked:bg-[#4D194D]
          checked:hover:bg-[#4D194D]
          selection:bg-[#4D194D]
          checked:focus:bg-[#4D194D]`}
      />
      <span className={`ml-2 ${fontColor} ${fontSize} ${fontWeight}`}>
        {name}
      </span>
    </label>
  );
};

export default CheckboxComponent;

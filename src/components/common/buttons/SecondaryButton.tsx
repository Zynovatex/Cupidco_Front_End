"use-client";

import React, { ReactNode } from "react";

type Icon = ReactNode;

interface ButtonProps {
  label: string;
  width?: string;
  height?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  fontSize?: string;
  icon?: Icon;
  iconPosition?: "left" | "right";
  iconColor?: string;
  radius?: string;
  invert?: boolean; // Added invert prop
}

const SecondaryButton: React.FC<ButtonProps> = ({
  label,
  width = "w-[50%]",
  height = "py-3 sm:py-3 md:py-4 lg:py-4",
  fontSize = "text-sm sm:text-md md:text-xl lg:text-2xl",
  onClick,
  disabled,
  icon: Icon,
  iconPosition = "left",
  radius = "rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl",
  invert = false, // Default value for invert prop
}) => {
  const baseStyles = `inline-flex items-center justify-center font-Vollkorn border-2 px-5 transition ${width} ${height} ${radius} ${fontSize}`;

  // Conditional styles based on the invert prop
  const conditionalStyles = invert
    ? "text-white border-white hover:bg-white hover:text-primary-purple"
    : "text-primary-purple border-primary-purple hover:text-white hover:bg-primary-purple";

  return (
    <button
      className={`${baseStyles} ${conditionalStyles} ${disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
        }`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && iconPosition === "left" && (
        <div className="mr-2 text-sm md:text-lg lg:text-xl">{Icon}</div>
      )}

      <span>{label}</span>
      {Icon && iconPosition === "right" && (
        <div className="ml-2 text-sm md:text-lg lg:text-xl">{Icon}</div>
      )}
    </button>
  );
};

export default SecondaryButton;

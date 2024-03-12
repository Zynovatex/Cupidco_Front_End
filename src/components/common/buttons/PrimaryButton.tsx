"use client";

import React, { ReactNode } from "react";

type Icon = ReactNode;

interface ButtonProps {
  label: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  fontSize?: string;
  icon?: Icon;
  iconPosition?: "left" | "right";
  iconColor?: string;
  radius?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  bgColor?: string;
  textColor?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  label,
  width = "w-[50%]",
  height = "py-3 sm:py-3 md:py-4 lg:py-9",
  fontSize = "text-sm sm:text-md md:text-xl lg:text-2xl",
  onClick,
  disabled,
  icon: Icon,
  iconPosition = "left",
  radius = "rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl",
  bgColor = "bg-primary-purple",
  textColor = "text-white",
}) => {
  return (
    <button
      className={`
        ${width} ${height} ${radius} ${fontSize}
        inline-s}
        inline-flex
        items-center
        justify-center
        ${disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"} 
        ${bgColor} 
        ${textColor} // Apply dynamic text color
        transition 
        hover:drop-shadow-lg 
        font-playfair-display
        px-5
      `}
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

export default PrimaryButton;

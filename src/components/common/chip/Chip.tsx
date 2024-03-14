'use client';
import React from "react";

interface ChipProps {
  text: string;
  fontColor?: string;
  width?: string;
  height?: string;
}

const Chip: React.FC<ChipProps> = ({ text, fontColor, width }) => {
  return (
    <div
      className={`grid select-none items-center justify-center whitespace-nowrap rounded-lg py-1.5 px-3 font-Quicksand text-md 
      ${fontColor} ${width} bg-[#ffe4e4] shadow-md`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Chip;

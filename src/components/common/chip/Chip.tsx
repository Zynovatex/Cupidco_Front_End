import React from "react";

interface ChipProps {
  text: string;
  fontColor: string;
  backgroundColor: string;
}

const Chip: React.FC<ChipProps> = ({ text, fontColor, backgroundColor }) => {
  return (
    <div
      className={`grid select-none items-center justify-center whitespace-nowrap rounded-lg py-1.5 px-3 font-Quicksand text-xs ${fontColor} ${backgroundColor}`}
    >
      <span>{text}</span>
    </div>
  );
};

export default Chip;

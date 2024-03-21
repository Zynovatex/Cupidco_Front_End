import React from "react";

interface InteractionButtonProps {
  text: string;
  icon?: React.ReactNode;
  label: React.ReactNode;
  width?: string | number;
  height?: string | number;
  buttonColor?: string;
  fontSize?: string; // Added fontSize prop
  textPosition?: "left" | "right" | "center"; // Added textPosition prop
  fontFamily?: string;
}

const InteractionButton: React.FC<InteractionButtonProps> = ({
  text,
  icon,
  label,
  width,
  height,
  buttonColor = "#4d194d",
  fontSize = "text-xl",
  textPosition = "center", // Default to center position if not provided
  fontFamily = "font-PlayfairDisplay",
}) => {
  // Define classes based on textPosition prop
  const textClasses =
    textPosition === "left"
      ? "text-left"
      : textPosition === "center"
      ? "text-center"
      : "text-right";

  return (
    <div
      className="font-playfairdisplay flex flex-wrap items-center justify-center border rounded-md"
      style={{ backgroundColor: buttonColor, width, height }}
    >
      <div className="mr-10 text-[#4D194D]">{icon}</div>
      <div
        className={`text-[#4D194D] flex-grow w-full sm:w-auto sm:flex-shrink-0 ${textClasses} ${fontFamily} ${fontSize}`}
        style={{ fontSize }}
      >
        {text}
      </div>
      <span className="ml-10 text-white bg-[#4D194D] rounded-2xl w-8 h-8 flex items-center justify-center">
        <span className="text-center">{label}</span>
      </span>
    </div>
  );
};

export default InteractionButton;

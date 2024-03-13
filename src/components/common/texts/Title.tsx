"use-client";

import React, { ReactNode } from "react";

type Icon = ReactNode;

interface TitleProps {
  text: string;
  italic?: boolean;
  center?: boolean;
  right?: boolean;
  icon?: Icon;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?:
    | "font-normal"
    | "font-light"
    | "font-bold"
    | "font-semibold"
    | "font-extrabold";
  uppercase?: boolean;
}

const Title: React.FC<TitleProps> = ({
  text,
  italic,
  center,
  right,
  icon,
  fontFamily = "font-playfair-display",
  fontSize = "text-4xl",
  fontColor = "text-[#4D194D]",
  fontWeight = "font-semibold",
  uppercase,
}) => {
  return (
    <span
      className={`flex items-center ${fontFamily} ${fontColor} ${fontSize} ${fontWeight} ${
        italic ? "italic" : ""
      } ${center ? "justify-center" : ""} ${right ? "justify-end" : ""} ${
        uppercase ? "uppercase" : ""
      }`}
    >
      {text}
      {icon && <div className="ml-2">{icon}</div>}
    </span>
  );
};

export default Title;

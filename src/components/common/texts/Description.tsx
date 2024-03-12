"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface DescriptionProps {
  text: string;
  href?: string;
  italic?: boolean;
  center?: boolean;
  right?: boolean;
  fontFamily?: string;
  fontSize?: string;
  fontColor?: string;
  fontWeight?:
    | "font-light"
    | "font-regular"
    | "font-medium"
    | "font-semibold"
    | "font-bold";
  children?: ReactNode;
}

const Description: React.FC<DescriptionProps> = ({
  text,
  href,
  italic,
  center,
  right,
  fontFamily = "font-Quicksand",
  fontSize = "text-sm sm:text-md md:text-lg lg:text-xl",
  fontColor = "text-[#6D2E46]",
  fontWeight = "font-regular",
  children,
}) => {
  const content = (
    <span
      className={`
            flex items-center 
            ${fontFamily} 
            ${fontColor} 
            ${fontSize} 
            ${fontWeight} 
            ${italic ? "italic" : ""} 
            ${center ? "justify-center" : ""} 
            ${right ? "justify-end" : ""}`}
    >
      {text}
    </span>
  );

  return href ? (
    <Link href={href}>{content}</Link>
  ) : (
    <>
      {content}
      {children}
    </>
  );
};

export default Description;

"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";

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
  icon?: IconType;
  iconPosition?: "left" | "right";
  children?: ReactNode;
}

const Description: React.FC<DescriptionProps> = ({
  text,
  href,
  italic,
  center,
  right,
  fontFamily = "font-Vollkorn",
  fontSize = "text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl  ",
  fontColor = "text-[#6D2E46]",
  fontWeight = "font-regular",
  icon: Icon,
  iconPosition = "right",
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
        ${right ? "justify-end" : ""}
      `}
    >
      {iconPosition === "left" && Icon && <Icon className="mr-2" />}
      {text}
      {iconPosition === "right" && Icon && <Icon className="ml-2" />}
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

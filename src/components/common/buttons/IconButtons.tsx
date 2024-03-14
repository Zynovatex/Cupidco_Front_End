'use client';
import React from "react";
import { ReactNode } from "react";

interface InteractionIconsProps {
  width?: string;
  height?: string;
  spacing?: number;
  children: ReactNode;
}

const InteractionIcons: React.FC<InteractionIconsProps> = ({
  width,
  height,
  spacing,
  children,
}) => {
  return (
    <div className={`flex items-center space-x-${spacing} p-4`}>
      {React.Children.map(children, (child) => (
        <div style={{ marginRight: `${spacing}px` }}>
          {React.cloneElement(child as React.ReactElement<any>, {
            width: width,
            height: height,
          })}
        </div>
      ))}
    </div>
  );
};

export default InteractionIcons;

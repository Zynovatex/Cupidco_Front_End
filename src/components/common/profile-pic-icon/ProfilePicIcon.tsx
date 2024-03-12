"use-client";

import React from "react";

interface ProPicIconProps {
  imageName: string;
  icon: React.ReactNode;
}

const ProPicIcon: React.FC<ProPicIconProps> = ({ imageName, icon }) => {
  const imagePath = `/images/${imageName}`;

  const iconPositionClass =
    "bottom-0 right-0 translate-x-12/12 -translate-y-11/12";

  return (
    <div className="relative inline-block">
      <div
        className="
          relative w-16 
          h-16 overflow-hidden 
          rounded-full
      "
      >
        <img
          src={imagePath}
          alt="Profile"
          className="
            object-cover 
            w-full h-full
          "
        />

        <div
          className={`
            absolute 
            z-20 p-1 
            flex items-center 
            justify-center ${iconPositionClass}
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ProPicIcon;

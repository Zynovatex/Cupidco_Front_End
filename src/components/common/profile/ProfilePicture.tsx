"use-client";

import React from "react";

interface ProfilePictureProps {
  imageName: string;
  active: boolean;
  position: "top-right" | "bottom-right";
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  imageName,
  active,
  position,
}) => {
  const imagePath = `/images/${imageName}`;

  const positionClasses = {
    "top-right": "top-0 right-1 translate-x-1/4 translate-y-1/5",
    "bottom-right": "bottom-0 right-9 translate-x-12/12 -translate-y-8/12",
  };

  const positionClass = positionClasses[position];

  return (
    <div className=" w-4 h-4 sm:w-[10%] sm:h-[10%] md:w-[20%] md:[20%] lg:w-[30%] lg:h-[30%]">
      <div className="relative inline-block">
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <img
            src={imagePath}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className={`
        absolute 
        z-20 p-1 flex items-center justify-center ${positionClass}`}
        >
          <span
            className={`block w-3 h-3 rounded-full ${
              active ? "bg-online-state" : "bg-offline-state"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;

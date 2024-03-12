"use client";

import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

interface SocialMediaProps {
  network: string;
  size?: string;
  url?: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({
  network,
  size = "7",
  url,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    updateMedia();
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsHovered(false);
  };

  return (
    <div className="relative">
      <div
        className={`
          rounded-full 
          bg-primary-purple 
          flex items-center 
          justify-center 
          cursor-pointer 
          w-${size} 
          h-${size} 
          overflow-hidden
        `}
        onClick={() => url && openNewWindow(url)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SocialIcon network={network} fgColor="#fff" bgColor="#4D194D" />
      </div>
      <div
        className={`
          absolute 
          left-1/2 
          transform 
          -translate-x-1/2 
          mt-1 
          bg-primary-purple 
          w-[60%]
          h-1 
          rounded-full
          transition-opacity
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      ></div>
    </div>
  );
};

export default SocialMedia;

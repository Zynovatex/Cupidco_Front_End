"use client";

import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 164, height = 71 }) => {
  return (
    <div className="flex items-center">
      <Image
        width={width}
        height={height}
        src="/logo/logo.png"
        alt="Cupidco Logo"
        className=""
      />
    </div>
  );
};

export default Logo;

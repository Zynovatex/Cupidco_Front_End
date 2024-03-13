"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Login from "./Login";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const startClosing = () => {
    setIsClosing(true);
    timeoutIdRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
  };

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      startClosing();
    }
  };

  const modalAnimation = isClosing ? "animate-slideDown" : "animate-slideUp";

  if (!isOpen && !isClosing) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-[#FFB4A2] bg-opacity-30 transition-opacity duration-500 flex justify-center items-center ${
          isOpen || isClosing ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBgClick}
      >
        <div
          className={`relative rounded-2xl 
          w-[80%] max-xs:w-[96%] max-w-7xl
          lg:w-[80%] sm:w-[80%] xl:h-[80%] xl:w-[80%] 2xl:w-[40%] h-[80%] px-10 2xl:h-[68%]
          md:py-36 lg:px-0 py-52 sm:py-24 lg:py-2
          mx-auto max-sm:h-[76%] sm:h-[74%] md:h-[84%]
          bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500 flex justify-center items-center`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ForgetPasswordBg.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Background"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <Login onClose={onClose} />
        </div>
      </div>
    </>
  );
};

export default LoginModal;

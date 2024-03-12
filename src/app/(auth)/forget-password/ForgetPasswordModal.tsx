"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ForgetPassword from "@/components/common/cards/ForgetPassword";
 
interface ForgetPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgetPasswordModal: React.FC<ForgetPasswordModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
    }
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

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
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
        className={`fixed inset-0 bg-[#FFB4A2] bg-opacity-50 z-50 transition-opacity duration-500 flex justify-center items-center ${
          isOpen || isClosing ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBgClick}
      >
        <div
          className={`relative rounded-2xl w-[80%] max-w-7xl lg:w-[80%] sm:w-[90%] xl:h-[80%] h-auto px-10 md:py-16 lg:px-0 2xl:h-[40%] 2xl:w-[40%] py-52 sm:py-24 lg:py-20 mx-auto sm:pb-24 max-sm:h-[36%] bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500 flex justify-center items-center`}
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

          {/* ForgetPassword Component */}
          <div className="relative z-10 items-center flex justify-center w-full">
            <ForgetPassword
              step={currentStep}
              onStepChange={handleStepChange}
              onCloseModal={startClosing}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordModal;

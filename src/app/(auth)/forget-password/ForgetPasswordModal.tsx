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
        className={`fixed inset-0 bg-[#FFB4A2] bg-opacity-50 z-50 transition-opacity duration-500 flex justify-center  items-center ${
          isOpen || isClosing ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBgClick}
      >
        <div
          className={`relative   rounded-2xl p-5  md:p-10 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%]  bg-transparent ${modalAnimation} transition-all   duration-500 flex justify-center items-center `}
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
          <div className=" ">
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

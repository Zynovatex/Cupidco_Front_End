"use client";
import React, { useState, useEffect, useRef } from "react";
import PrimaryButton from "../common/buttons/PrimaryButton";
import SecondaryButton from "../common/buttons/SecondaryButton";
import Title from "../common/texts/Title";

interface PopupwithIcoProps {
  icon: React.ReactNode;
  title?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  isOpen: boolean;
  onClose: () => void;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const PopupwithIco: React.FC<PopupwithIcoProps> = ({
  icon,
  title = "Default Title",
  primaryButtonText = "Next",
  secondaryButtonText,
  isOpen,
  onClose,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

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
    <div
      className={`fixed inset-0 overflow-y-auto  bg-[#FFB4A2] bg-opacity-50 z-50 transition-opacity duration-500 flex justify-center items-center ${
        isOpen || isClosing ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBgClick}
    >
      <div
        className={`flex justify-center items-center min-h-screen p-1 px-2 py-20 transition-transform duration-500 ${modalAnimation}`}
      >
        <div
          className="bg-cover bg-center bg-no-repeat lg:w-[80%] xl:w-[80%] 2xl:w-[80%] p-4 md:p-10 md:py-8 py-8 max-sm:py-6 sm:w-auto rounded-2xl relative"
          style={{ backgroundImage: "url(/images/FormBg.png)" }}
        >
          {icon && (
            <div className="absolute -top-16 left-1/2 md:-top-11 max-sm:-top-9 max-md:-top-10 transform -translate-x-1/2 bg-[#4D194D] rounded-full flex items-center justify-center text-white w-32 h-32 xl:w-24 xl:h-24 lg:w-20 lg:h-20 md:w-20 md:h-20 sm:w-16 sm:h-16 max-sm:w-16 max-sm:h-16">
              <div className="w-full h-full flex items-center justify-center p-3 sm:p-2">
                {icon}
              </div>
            </div>
          )}
          <div className="2xl:py-10 xl:py-8 lg:py-4 py-4 flex flex-col items-center text-center">
            <Title
              text={title}
              center={true}
              fontSize="text-xl sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-4xl"
            />
          </div>
          <div className="flex flex-col items-center text-center">
            <div
              className={`flex ${
                secondaryButtonText ? "flex-row gap-4 sm:gap-5" : "flex-col"
              } items-center w-full`}
            >
              {secondaryButtonText && (
                <SecondaryButton
                  label={secondaryButtonText}
                  onClick={onSecondaryClick}
                  height="p-2"
                  width="w-full"
                  fontSize="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md max-sm:text-sm"
                />
              )}
              <PrimaryButton
                label={primaryButtonText}
                onClick={onPrimaryClick}
                height="p-2"
                textColor="text-white"
                width="w-[60%]"
                fontSize="2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-md max-sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupwithIco;

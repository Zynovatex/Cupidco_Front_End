'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import Title from "../common/texts/Title";
import Logo from "../common/logo/Logo";
import TextField from "../common/inputs/Input";
import TextArea from "../common/inputs/TextArea";
import PrimaryButton from "../common/buttons/PrimaryButton";

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => enableScroll();
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
        className={`fixed inset-0 bg-[#FFB4A2] bg-opacity-50 z-50 transition-opacity duration-500 flex justify-start items-center ${isOpen || isClosing ? "opacity-100" : "opacity-0"}`}
        onClick={handleBgClick}
      >
        <div
          className={`relative rounded-2xl 
                w-[80%]
                md:px-10
                px-4
                py-10
                max-xs:w-[96%] 
                max-w-7xl 
                lg:w-[80%]
                sm:w-[80%]
                xl:w-[60%]
                h-auto
                mx-auto
                bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/DefaultBg.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Background"
              className="rounded-xl shadow-xl"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={startClosing}
            className="absolute top-0 right-0 m-4 z-10 text-primary-purple"
            aria-label="Close modal"
          >
            <IoCloseCircle size="2em" />
          </button>

          {/* Logo */}
          <div className="absolute top-0 left-0 m-4 z-10">
            <Logo />
          </div>

          {/* Title */}
          <div className="relative w-full flex justify-center mt-10">
            <Title
              text="Contact Us"
              center={true}
              fontSize="text-2xl md:text-4xl"
            />
          </div>

          {/* Contents */}
          <div className="flex-1 relative mt-5 flex flex-col gap-5">

            {/* Name */}
            <TextField id="name" bgColor="bg-transparent" label="Full Name" />

            {/* Email */}
            <TextField id="email" bgColor="bg-transparent" label="Email" />

            {/* Opinion */}
            <TextArea id="opinion" label="Your Opinion" bgColor="bg-transparent" maxLength={200} maxHeight="h-[200px]" />

            {/* Button */}
            <PrimaryButton
              label="Send"
              fontSize="text-md md:text-md lg:text-xl"
              height="py-2"
              width="w-full"
              radius="rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import Title from "../common/texts/Title";
import Logo from "../common/logo/Logo";
import TextArea from "../common/inputs/TextArea";
import PrimaryButton from "../common/buttons/PrimaryButton";
import TextField from "../common/inputs/TextField";
import InputField from "../common/inputs/InputField";

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
        className={`fixed inset-0 z-50 bg-[#FFB4A2] bg-opacity-30 transition-opacity duration-500 flex justify-center items-center py-3 ${isOpen || isClosing ? "opacity-100" : "opacity-0"
          }`}
        onClick={handleBgClick}
      >
        <div
          className={`relative rounded-2xl w-[95%] md:w-[70%] h-[90%] md:h-[90%] bg-transparent ${modalAnimation}  transition-all overflow-hidden duration-500 flex justify-center lg:justify-end  items-center md:px-5 px-0`}
        >
          {/* bg image  */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ContactBackground.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Background"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* close button  */}
          <button
            onClick={startClosing}
            className="absolute top-[-8px] right-[-9px] m-4 z-10 text-secondary-color"
            aria-label="Close modal"
          >
            <IoCloseCircle size="2em" />
          </button>

          {/* login container  */}
          <div className="w-[90%] text-center relative lg:w-[50%] h-auto py-5 px-5 ">
            {/* bg image  */}
            <div className="w-auto p-5  rounded-lg" style={{ backgroundImage: "url(/images/DefaultBg.png)" }}>
              {/* <Image
                src="/images/HomeSc2.png"
                layout="fill"
                objectFit="cover"
                objectPosition="right-bottom"
                alt="Background"
                priority
                className="rounded-lg"
              /> */}

              <div className="relative">
                {/* Logo */}
                <div className="w-28 mb-3 ">
                  <Logo />
                </div>

                {/* Title */}
                <div className="w-full flex justify-center">
                  <Title
                    text="Contact Us"
                    center={true}
                    fontSize="text-2xl md:text-4xl"
                  />
                </div>

                {/* Contents */}
                <div className="mt-2 flex flex-col gap-5">

                  {/* Name */}
                  <InputField id="name" label="Full Name" name="Name" type="text" />

                  {/* Email */}
                  <InputField id="email" label="Email" name="mail" type="email" />

                  {/* Opinion */}
                  <TextArea id="opinion" label="Your Opinion" bgColor="bg-transparent" maxHeight="xl:h-[200px] h-[150px]" />

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
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
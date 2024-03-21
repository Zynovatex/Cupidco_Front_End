"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoHeart } from "react-icons/io5";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import PopupwithIco from "@/components/modals/PopupwithIco";

interface PackagesCardProps {
  title: string;
  cost: string;
  features: string[];
  buttonText: string;
  overlayDescription: string;
}

const PackagesCard: React.FC<PackagesCardProps> = ({
  title,
  cost,
  features,
  buttonText,
  overlayDescription,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const truncate = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  const truncatedDescription = truncate(overlayDescription, 400);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleCloseOverlay = (event: MouseEvent) => {
    if (
      overlayRef.current &&
      !overlayRef.current.contains(event.target as Node)
    ) {
      setShowOverlay(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseOverlay);

    return () => {
      document.removeEventListener("mousedown", handleCloseOverlay);
    };
  }, []);

  const handleBuyButtonClick = () => {
    setIsModalOpen(true);
    toggleOverlay();
  };

  return (
    <div
      className="relative bg-custom-gradient rounded-xl p-6 xl:w-[350px] xl:h-[650px] lg:w-[250px] lg:h-[500px]
        md:w-[200px] md:h-[450px] w-[250px] h-[400px] text-white flex flex-col justify-between shadow-xl overflow-hidden"
    >
      {/* Title at the Start */}
      <div className="flex flex-col items-center">
        <Title text={title} fontColor="text-white" />
      </div>

      {/* Circle with cost in the Center */}
      <div className="flex items-center justify-center border-8 border-white rounded-full xl:w-48 xl:h-48 lg:w-32 lg:h-32 md:w-28 md:h-28 sm:w-24 sm:h-24 h-20 w-20 mx-auto lg:mt-10 mt-6">
        <Description
          text={cost}
          fontColor="text-white"
          fontWeight="font-bold"
        />
      </div>

      {/* Features in the Center */}
      <ul className="flex flex-col items-center justify-center flex-grow gap-3">
        {features.map((feature, index) => (
          <li key={index}>
            <Description text={feature} fontColor="text-white" />
          </li>
        ))}
      </ul>

      {/* Button at the End */}
      <div className="self-center w-full">
        <PrimaryButton
          label={showOverlay ? "Close" : buttonText}
          fontSize="text-md sm:text-sm lg:text-lg"
          height="h-10 xl:h-12"
          width="w-auto xl:w-60"
          radius="rounded-lg"
          bgColor={showOverlay ? "bg-primary-purple" : "bg-white"}
          textColor={showOverlay ? "text-white" : "text-primary-purple"}
          onClick={toggleOverlay}
        />
      </div>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`absolute inset-0 z-10 transform transition-transform ${showOverlay
            ? "translate-y-0 duration-500 ease-in"
            : "translate-y-full duration-300 ease-in-out"
          }`}
      >
        <Image
          src="/images/DefaultBg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inset-0 flex flex-col justify-between items-center text-center xl:p-10 p-5">
          <div className="flex flex-col items-center">
            <Title text={title} />
          </div>
          <div className="overflow-y-auto lg:h-[80%] md:h-[60%] h-[70%]" style={{ scrollbarWidth: 'none' }}>
            <div className="flex flex-col items-center text-justify">
              <Description
                text={overlayDescription}
                fontSize="text-xs md:text-md lg:text-md xl:text-xl"
              />
            </div>
          </div>
          <PrimaryButton
            label="Buy Package"
            fontSize="text-md sm:text-sm lg:text-lg"
            height="h-10 xl:h-12"
            width="w-auto xl:w-60"
            radius="rounded-lg"
            bgColor="bg-primary-purple"
            textColor="text-white"
            onClick={handleBuyButtonClick}
          />
        </div>
      </div>
      <PopupwithIco
        icon={<IoHeart size={68} />}
        title="Congratulations! Your Free Account Have Been Successfully Upgraded"
        primaryButtonText="Home"
        isOpen={isModalOpen}
        onPrimaryClick={() => { }}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default PackagesCard;

"use client";

import React from "react";
import Title from "../texts/Title";
import Description from "../texts/Description";
import PrimaryButton from "../buttons/PrimaryButton";

const Usertab = () => {
  return (
    <div className="bg-[#4D194D] h-full relative rounded-xl w-full">
      <div>
        <div className="rounded-xl h-full overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="/images/ImageGallery4.jpg"
            alt=""
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-full w-full"
            src="/images/ProfilePicture.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-4">
        <Title
          text="Hiruni Shashikala"
          fontSize="text-lg sm:text-md md:text-xl lg:text-2xl xl:text-xl"
          center={true}
          fontColor="text-white"
        />
      </div>
      <div>
        <Description
          text="Colombo, Sri Lanka"
          fontSize="text-md sm:text-xs md:text-xs lg:text-sm xl:text-md"
          center={true}
          fontColor="text-white"
        />
      </div>

      <div className="flex items-center justify-center mt-4 mb-20">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
          <span className="text-[#4D194D] text-center">93% Matching</span>
        </div>
      </div>

      <div className="mt-150 flex flex-col items-center">
        <PrimaryButton
          label="Request Horoscope"
          bgColor="bg-white"
          textColor="text-primary-purple"
          width="w-[90%] mx-6"
          height="py-2"
          fontSize="text-sm"
          radius="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Usertab;

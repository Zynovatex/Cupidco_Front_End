"use client";

import React from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaStar, FaCrown } from "react-icons/fa";
import PrimaryButton from "../buttons/PrimaryButton";
import Title from "../texts/Title";

interface Packages2CardProps {
  title: string;
  likeState?: boolean;
  unlikeState?: boolean;
  starState?: boolean;
  premiumState?: boolean;
}

const Packages2Card: React.FC<Packages2CardProps> = ({
  title,
  likeState,
  unlikeState,
  starState,
  premiumState,
}) => {
  return (
    <div className="px-10 max-sm:px-2 md:px-2 py-8 w-[18%] 2xl:w-[18%] xl:w-[18%] max-sm:w-[80%] sm:w-[28%] rounded-2xl overflow-hidden shadow-lg bg-gradient-custom text-white flex flex-col items-center p-4 space-y-4">
      <Title
        text={title}
        fontColor="white"
        center={true}
        fontSize="text-2xl lg:text-xl"
      />

      <div
        className="
            bg-white 
            p-2 
            rounded-full 
            xl:w-40 
            lg:w-28 
            md:w-28 
            sm:w-8
            max-sm:w-40

            xl:py-6 
            lg:py-4 
            md:py-4 
            sm:py-6 
            max-sm:py-6
            items-center 
            flex justify-around
            "
      >
        {premiumState && (
          <FaCrown className="text-primary-purple h-[80%] w-[80%]" />
        )}
        {starState && !premiumState && (
          <FaStar className="text-primary-purple h-[80%] w-[80%]" />
        )}
        {likeState && !starState && !premiumState && (
          <BiSolidLike className="text-primary-purple h-[80%] w-[80%]" />
        )}
        {unlikeState && !likeState && !starState && !premiumState && (
          <BiSolidDislike className="text-primary-purple h-[80%] w-[80%]" />
        )}
      </div>
      <div>
        <PrimaryButton
          label={"See Package"}
          bgColor="bg-white"
          textColor="text-primary-purple"
          fontSize={"2xl:text-lg md:text-sm"}
          height="p-2"
          width="w-full"
          radius="md:rounded-md rounded-lg"
        />
      </div>
    </div>
  );
};

export default Packages2Card;

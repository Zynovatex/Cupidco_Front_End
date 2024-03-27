"use client";

import Image from "next/image";
import React from "react";
import Description from "../texts/Description";

interface ReviewCardProps {
  description: string;
  image: string;
  name: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  description,
  image,
  name,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10 bg-[#EBADA1] bg-opacity-35 rounded-lg shadow-md md:p-10 p-5 items-center">
      <div className="w-full flex justify-center md:justify-start">
        <Image
          src={image}
          width={200}
          height={200}
          alt={`${name}'s review image`}
          objectFit="cover"
          className="rounded-md aspect-auto"
        />
      </div>
      <div className="flex flex-col gap-5 justify-center text-justify">
        <Description
          text={description}
          fontColor="text-[#6D2E46]"
          fontWeight="font-light"
          fontSize="text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl"
          fontFamily="font-PlayfairDisplay"
        />

        <div className="flex justify-end">
          <h5 className="text-lg font-semibold text-[#4D194D] font-PlayfairDisplay">
            - {name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

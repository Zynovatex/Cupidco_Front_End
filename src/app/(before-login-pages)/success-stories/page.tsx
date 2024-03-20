"use client";

import React from "react";

import Image from "next/image";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

interface SuccessStory {
  profile1Image: string;
  profile1Name: string;
  profile2Image: string;
  profile2Name: string;
  description: string;
  date: string;
}

interface SuccessStoriesProps {
  successStories: SuccessStory[];
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ successStories }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-auto flex flex-col gap-5 justify-start items-center md:py-24 py-20 md:px-10 px-5"
      style={{ backgroundImage: "url(/images/DefaultBg.png)" }}
    >
      {/* Title */}
      <div className="relative bg-gradient-custom rounded-t-xl py-6 w-full">
        <Title
          text="Our Success Stories"
          fontColor="text-white"
          center={true}
          fontSize="text-xl max:sm:text-md md:text-xl lg:text-2xl xl:text-4xl"
        />
      </div>

      {/* Success Stories List */}
      {successStories.map((story, index) => (
        <div
          key={index}
          className="w-full bg-custom-gradient shadow-lg rounded-xl flex flex-col justify-start items-center p-5 md:gap-5 gap-2"
        >
          {/* Profiles */}
          <div className="flex justify-around max-sm:w-full sm:w-full md:w-full lg:w-[50%]">
            {/* Profile 1 */}
            <div className="flex flex-col items-center md:gap-5 gap-2 mt-5">
              <div className="relative 2xl:h-[300px] 2xl:w-[300px] lg:h-[150px] lg:w-[150px] md:w-[150px] md:h-[150px] h-[100px] w-[100px] rounded-lg overflow-hidden">
                <Image
                  src={story.profile1Image}
                  alt={story.profile1Name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Description
                text={story.profile1Name}
                fontSize="max-sm:text-xs sm:text-sm md:text-md lg:text-md xl:text-xl 2xl:text-2xl"
                fontColor="text-white"
                fontFamily="font-playfair-display"
              />
            </div>

            {/* Divider */}
            <div className="mt-5 border-l border-white 2xl:h-[300px] lg:h-[150px] md:h-[150px] h-[100px] "></div>

            {/* Profile 2 */}
            <div className="flex flex-col items-center md:gap-5 gap-2 mt-5">
              <div className="relative 2xl:h-[300px] 2xl:w-[300px] lg:h-[150px] lg:w-[150px] md:w-[150px] md:h-[150px] h-[100px] w-[100px] rounded-lg overflow-hidden">
                <Image
                  src={story.profile2Image}
                  alt={story.profile2Name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Description
                text={story.profile2Name}
                fontColor="text-white"
                fontSize="max-sm:text-xs sm:text-sm md:text-md lg:text-md xl:text-xl 2xl:text-2xl"
                fontFamily="font-playfair-display"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex justify-center items-center md:text-center md:w-[80%] w-full text-justify">
            <Description
              fontSize="max-sm:text-xs sm:text-sm md:text-md lg:text-md xl:text-xl 2xl:text-2xl"
              text={story.description}
              fontFamily="font-playfair-display"
              fontColor="text-white"
            />
          </div>

          {/* Date */}
          <div className="flex justify-center items-center text-center">
            <Description
              fontSize="max-sm:text-xs sm:text-sm md:text-md lg:text-md xl:text-xl 2xl:text-2xl"
              text={story.date}
              fontFamily="font-playfair-display"
              fontColor="text-white"
            />
          </div>

          {/* Button */}
          <div className="flex md:justify-end justify-center items-center w-full">
            <SecondaryButton
              label="View More"
              fontSize="text-md md:text-sm lg:text-lg"
              height="py-0 md:py-0 lg:px-0"
              width="px-2 md:px-2 lg:px-4"
              radius="rounded-md"
              invert={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuccessStories;

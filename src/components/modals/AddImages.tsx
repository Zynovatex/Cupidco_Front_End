"use-client";

import React from "react";

import Image from "next/image";
import PrimaryButton from "../common/buttons/PrimaryButton";

import LanguageButton from "../common/buttons/LanguageButton";

import Title from "../common/texts/Title";

const AddImage = () => {
  return (
    <>
      <div className="fixed inset-0 z-50  flex justify-center items-center">
        <div
          className="relative rounded-2xl w-[60%] max-xs:w-[60%] md:h-[80%]  px-10 max-sm:px-2
        md:py-36 py-22 sm:py-24 lg:py-2 max-sm:h-[60%] bg-transparent overflow-hidden flex flex-col 
        justify-center items-center "
        >
          <div>
            <Image
              src="/images/EditProfileBg.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Background"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="relative mt-0  bg-red-300">
            <Title text=" Add images" center={true} fontSize="text-xl" />
          </div>

          <div className=" relative rounded-2xl w-[60%] max-sm:h-[50%] max-sm:w-[70%] h-[70%]  px-10 max-sm:px-2 sm:py-24 lg:py-2   overflow-hidden justify-center items-center">
            
            <Image
              src="/images/DefaultImage.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Background"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div className="mt-5 relative ">
            <PrimaryButton
              label="Choose files"
              height="py-1"
              width="w-full"
              radius="rounded-xl"
            />
          </div>

          <div className="mt-5 relative ">No file selected</div>

         
          <div className="absolute bottom-0 right-0 mr-5 mb-5 bg-red-400 ">
            <LanguageButton label="Add videos" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddImage;

"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import React from "react";

export default function SitemapSection1() {
  return (
    <div className="relative ">
      <div
        className="bg-cover bg-center bg-no-repeat h-screen py-8 px-4 md:py-12  lg:py-20 lg:px-14 flex flex-col items-center justify-center "
        style={{ backgroundImage: "url(/images/SitemapBackground.jpeg)" }}
      >
        <div>
          <Title
            text="Site Map"
            fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl"
            center={true}
            fontWeight="font-bold"
            uppercase={false}
          />
        </div>

        <div className=" text-center md:w-[80%] max-w-screen-2xl ">
          <Description
            italic={true}
            text='Welcome to your personalize "Client Area" at Cupidco.This is where you can manage your profile.interact with potential matches,and access resources to enhance your journey towards marriage. '
          />
        </div>
      </div>
    </div>
  );
}

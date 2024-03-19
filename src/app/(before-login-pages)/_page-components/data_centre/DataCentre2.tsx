"use client";
import React from "react";
import Image from "next/image";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

const DataCentre2 = () => {
  return (
    <div className="relative items-center py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HomeSc2.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          priority
        />
      </div>
      {/* Content */}
      <div className="container mx-auto p-5 px-4 md:px-6 lg:px-8 z-10 relative space-y-8">
        {/* Title */}
        <div className="text-center">
          <Title
            text="Data Centre"
            center={true}
            fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          />
        </div>
        {/* Description */}
        <div className="space-y-8 px-4 sm:px-9 text-justify">
          <Description
            text="Our Data Centre is the engine that drives the magic of Cupidco. This is where the love stories unfold, and where we ensure your proposals go off without a hitch."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Description
            text="At the heart of our Data Centre, powerful servers work tirelessly to connect couples and make their dreams come true. These servers are equipped with cutting-edge technology to ensure seamless interactions and heartfelt connections."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Description
            text="Our environment is carefully controlled to provide the perfect backdrop for your proposal journeys. We maintain precise temperature and humidity levels to guarantee a comfortable and reliable experience."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Description
            text="Security is our top priority, just like your special moment. Our Data Centre is safeguarded by stringent access controls, advanced security systems, and constant surveillance. We're committed to protecting your privacy as much as we're committed to bringing hearts together."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Description
            text="Our dedicated team of experts is always on the watch, making sure everything runs smoothly. Your proposals are too important for us to leave anything to chance."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Description
            text="Stay tuned for more insights into the inner workings of our Data Centre and how we're dedicated to delivering the most exceptional proposal experiences through Cupidco."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DataCentre2;

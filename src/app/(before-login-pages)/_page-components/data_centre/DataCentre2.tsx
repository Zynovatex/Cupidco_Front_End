"use client";
import React from "react";
import Image from "next/image";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Title2 from "@/components/common/texts/Title2";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import { IoMdSend } from "react-icons/io";

const DataCentre2 = () => {
  return (
    <div className="relative items-center py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          priority
        />
      </div>
      {/* Content */}
      <div className="container mx-auto px-8 lg:px-8 z-10 relative space-y-8 sm:w-[80%]">
        {/* Title */}
        <div className="text-center">
          <Title
            text="Data Center"
            center={true}
            fontWeight="font-bold"
            fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        />
      {/* Description */}
      <div className="mt-5 text-justify">
        <Description
          text="Welcome to the heart of our Marriage Proposal App, where all your precious moments and essential details are securely stored and managed. Our Data Center is designed to provide you with a seamless and reliable experience, ensuring that every step of your journey towards the perfect personal is smooth and unforgettable."
          fontWeight="font-regular"
          fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
          
        />
        </div>
      </div>
      <div>
        {/* Subtitle */}
        <Title
            text="Secure Storage"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-bold"
        />
        <div className="mt-5 text-justify">
        <Description
          text="Your privacy and security are our top priorities. Our Data Center employs state-of-the-art encryption and security protocols to safeguard your personal information and proposal plans. Rest assured that your data is protected with the highest level of confidentiality."
          fontWeight="font-regular"
          fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
        />
        </div>
        </div>
        <div>
        <Title
            text="Proposal Planning"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-bold"
        />
        <div className="mt-5 text-justify">
        <Description
          text="With our instuitive interface and comprehensive tools, organizing your proposal has never been easier. From setting reminders for important dates to creating perzonalized messages, our Data Center empowers you to plan every aspects of your proposal with precision and creativity."
          fontWeight="font-regular"
          fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
        />
        </div>
        </div>
        <div>
        <Title
            text="Memory Lane"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-bold"
        />
        <div className="mt-5 text-justify">
        <Description
          text="Relive the magic of your relationship with our Memory Lane feature. Access all your cherished moments, from your first date to your most recent adventures, conveniently stored in one place. Let the nostalgia inspire you as you embark on this new chapter together."
          fontWeight="font-regular"
          fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
        />
        </div>
        </div>
        <div>
        <Title
            text="Vendor Integration"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-bold"
        />
        <div className="mt-5 text-justify">
        <Description
          text="Connect seamlessly with vendors and services to bring your proposal vision to life. Whether you're searching for the perfect ring or booking a romantic dinner, our Data Center streamlines the process, saving you time and stress along the way."
          fontWeight="font-regular"
          fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
        />
        </div>
        </div>
        <div>
        <Title
            text="Collaboration Tools"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-bold"
        />
        <div className="mt-5 text-justify">
        <Description
          text="Share your proposal plans with loved ones and enlist their support with our collaboration tools. Collaborate on ideas, gather feedback, and coordinate surprise elements effortlessly, ensuring that your proposal is a collaborative celebration of your love."
          fontWeight="font-regular"
          fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
        />
        </div>
        </div>
        <div>
        <Title
            text="24/7 Accessibility"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-bold"
        />
        <div className="mt-5 text-justify">
        <Description
          text="Our Data Center is available whenever and wherever inspiration strikes. Whether you're brainstorming ideas during your lunch break or finalizing details late at night, our platform is accessible 24/7 to accommodate your schedule and preferences."
          fontWeight="font-regular"
          fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl"
        />
      </div>
      </div>
      <div className="relative w-[60%] md:w-[50%] lg:w-[30%] flex mx-auto md:mx-0">
          <PrimaryButton
            label="Contact Us"
            fontSize="text-md md:text-md lg:text-xl"
            height="py-2"
            width="w-full"
            radius="rounded-lg"
            icon={<IoMdSend />}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default DataCentre2;

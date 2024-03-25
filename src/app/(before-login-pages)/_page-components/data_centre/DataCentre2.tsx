"use client";
import React from "react";
import Image from "next/image";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Title2 from "@/components/common/texts/Title2";

const DataCentre2 = () => {
  return (
    <div className="relative items-center py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-50">
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
      <div className="container mx-auto p-5 z-10 relative space-y-8">
        {/* Title */}
        <div className="text-center">
          <Title
            text="Data Center"
            center={true}
            fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          />
        </div>
        {/* Description */}
        <div className="space-y-8 px-4 sm:px-9 text-justify">
          <Description
            text="Welcome to the heart of our Marriage Proposal App, where all your precious moments and essential details are securely stored and managed. Our Data Center is designed to provide you with a seamless and reliable experience, ensuring that every step of your journey towards the prefect personal is smooth and unforgettable."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          {/* Subtitle */}
          <Title2
            label="Secure Storage"
          />
          <Description
            text="Your privacy and security are our top priorities. Our Data Center employs state-of-the-art encryption and security protocols to safeguard your personal information and proposal plans. Rest assured that your data is protected with the highest level of confidentiality."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Title2
            label="Proposal Planning"
          />
          <Description
            text="With our instuitive interface and comprehensive tools, organizing your proposal has never been easier. From setting reminders for important dates to creating perzonalized messages, our Data Center empowers you to plan every aspects of your proposal with precision and creativity."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Title2
            label="Memory Lane"
          />
          <Description
            text="Relive the magic of your relationship with our Memory Lane feature. Access all your cherished moments, from your first date to your most recent adventures, conveniently stored in one place. Let the nostalgia inspire you as you embark on this new chapter together."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Title2
            label="Vendor Integration"
          />
          <Description
            text="Connect seamlessly with vendors and services to bring your proposal vision to life. Whether you're searching for the perfect ring or booking a romantic dinner, our Data Center streamlines the process, saving you time and stress along the way."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Title2
            label="Collaboration Tools"
          />
          <Description
            text="Share your proposal plans with loved ones and enlist their support with our collaboration tools. Collaborate on ideas, gather feedback, and coordinate surprise elements effortlessly, ensuring that your proposal is a collaborative celebration of your love."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
          <Title2
            label="24/7 Accessibility"
          />
          <Description
            text="Our Data Center is available whenever and wherever inspiration strikes. Whether you're brainstorming ideas during your lunch break or finalizing details late at night, our platform is accessible 24/7 to accommodate your schedule and preferences."
            fontWeight="font-regular"
            fontSize="text-sm sm:text-md lg:text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DataCentre2;

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import React from "react";
import Image from "next/image";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import { FaComment } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export default function SitemapSection2() {
  const SiteMap =
    "Welcome to the heart of our Marriage Proposal App, where all your precious moments and essential details are securely stored and managed. Our Data Center is designed to provide you with a seamless and reliable experience, ensuring that every step of your journey towards the perfect proposal is smooth and unforgettable.";
  const SecureStorage =
    "Your privacy and security are our top priorities. Our Data Center employs state-of-the-art encryption and security protocols to safeguard your personal information and proposal plans. Rest assured that your data is protected with the highest level of confidentiality.";
  const ProposalPlanning =
    "With our intuitive interface and comprehensive tools, organizing your proposal has never been easier. From setting reminders for important dates to creating personalized messages, our Data Center empowers you to plan every aspect of your proposal with precision and creativity.";
  const MemoryLane =
    " Relive the magic of your relationship with our Memory Lane feature. Access all your cherished moments, from your first date to your most recent adventures, conveniently stored in one place. Let the nostalgia inspire you as you embark on this new chapter together.";
  const VendorIntegration =
    "Connect seamlessly with vendors and services to bring your proposal vision to life. Whether you're searching for the perfect ring or booking a romantic dinner, our Data Center streamlines the process, saving you time and stress along the way.";
  const CollaborationTools =
    "Share your proposal plans with loved ones and enlist their support with our collaboration tools. Collaborate on ideas, gather feedback, and coordinate surprise elements effortlessly, ensuring that your proposal is a collaborative celebration of your love.";
  const Accessibility =
    "Our Data Center is available whenever and wherever inspiration strikes. Whether you're brainstorming ideas during your lunch break or finalizing details late at night, our platform is accessible 24/7 to accommodate your schedule and preferences.";

  return (
    <div className="relative items-center py-16 ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/SitemapSection2.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          priority
        />
      </div>
      {/* Content */}
      <div className="container mx-auto -5p px-5 md:px-6 lg:px-8 z-10 relative space-y-8 sm:w-[80%]">
        <div>
          {/* title  */}
          <Title
            text="Site Map"
            fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl"
            center={true}
            fontWeight="font-bold"
          />
        </div>
        {/*  site-map Body, titles, descriptions */}
        <div>
          {/* site-map description  */}
          <div className="mb-5 text-justify">
            <Description text={SiteMap} fontWeight="font-regular" />
          </div>
        </div>
        {/* Secure Storage title, description */}
        <div>
          {/* title  */}

          <Title
            text="Secure Storage"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-light"
          />

          {/* description  */}
          <div className="mb-5 mt-5 text-justify">
            <Description text={SecureStorage} fontWeight="font-regular" />
          </div>
        </div>

        {/* Proposal Planning title, description */}
        <div>
          {/* title  */}
          <Title
            text="Proposal Planning"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-light"
          />
          {/* description  */}
          <div className="mb-5 mt-5 text-justify">
            <Description text={ProposalPlanning} fontWeight="font-regular" />
          </div>
        </div>

        {/* Memory Lane title, description */}
        <div>
          {/* title  */}
          <Title
            text="Memory Lane"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-light"
          />
          {/* description  */}
          <div className="mb-5 mt-5 text-justify">
            <Description text={MemoryLane} fontWeight="font-regular" />
          </div>
        </div>

        {/* Vendor Integration title, description */}
        <div>
          {/* title  */}
          <Title
            text="Vendor Integration"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-light"
          />
          {/* description  */}
          <div className="mb-5 mt-5 text-justify">
            <Description text={VendorIntegration} fontWeight="font-regular" />
          </div>
        </div>

        {/* Collaboration Tools title, description */}
        <div>
          {/* title  */}
          <Title
            text="Collaboration Tools"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-light"
          />
          {/* description  */}
          <div className="mb-5 mt-5 text-justify">
            <Description text={CollaborationTools} fontWeight="font-regular" />
          </div>
        </div>
        {/* 24/7 Accessibility title, description */}

        <div>
          {/* title  */}
          <Title
            text="24/7 Accessibility"
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl"
            center={false}
            fontWeight="font-light"
          />
          {/* description  */}
          <div className="mb-5 mt-5 text-justify">
            <Description text={Accessibility} fontWeight="font-regular" />
          </div>
        </div>
        <div className="relative w-[50%]  flex mx-auto md:mx-0 lg:hidden ">
          <PrimaryButton
            label="Contact us"
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
}

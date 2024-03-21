"use client";

import Image from "next/image";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import PackagesCard from "@/components/common/cards/PackagesCard";

const Packages = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-start py-20 items-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover">
        <Image
          src="/images/Defaultbg.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          priority
        />
      </div>

      {/* Contents */}
      <div className="relative container mx-auto p-5 px-4 sm:px-6 lg:px-8 z-10 space-y-10">
        {/* Title */}
        <div className="text-center">
          <Title
            text="Choose Your Package Option"
            center={true}
            fontSize="max-sm:text-xl md:text-2xl xl:text-4xl"
          />
          <Description
            text="use favorite option more and connect with more partners"
            center={true}
            fontWeight="font-light"
            fontSize="max-sm:text-md xl:text-xl"
          />
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-5">
          <PackagesCard
            title="Basic"
            cost="cost"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            buttonText="Buy Now"
            overlayDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book "
          />
          <PackagesCard
            title="Standard"
            cost="cost"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            buttonText="Buy Now"
            overlayDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
          <PackagesCard
            title="Premium"
            cost="cost"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            buttonText="Buy Now"
            overlayDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;

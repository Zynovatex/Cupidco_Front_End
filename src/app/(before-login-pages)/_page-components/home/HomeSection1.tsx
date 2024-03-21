"use client";

import Register from "@/app/(auth)/register/Register";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import HomeFlipSlider from "@/components/common/sliders/HomeFlipSlider";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Link from "next/link";
import React from "react";

const images = [
  "/images/ImageGallery1.jpg",
  "/images/ImageGallery2.jpg",
  "/images/ImageGallery3.jpg",
];

export default function HomeSection1() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);

  const toggleRegisterModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-left p-20 max-sm:p-10"
      style={{ backgroundImage: "url('/images/homeBackground1.png')" }}
    >
      <div className="max-md:mt-10 mb-10 mt-10 max-md:text-center">
        <Title
          text="Discover your soul's perfect counterpart"
          fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        />
      </div>

      <div className="items-start">
        <div className="grid md:grid-cols-2 xl:mt-0">
          <div className="w-full">
            <div className="text-justify ">
              <Description
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                fontSize="xl:text-2xl"
                fontWeight="font-medium"
              />
            </div>
            <div className="mt-10 flex gap-5 justify-center sm:justify-start">
              <Link href="/learn-more">
                <SecondaryButton
                  label="Learn More"
                  fontSize="text-md sm:text-sm lg:text-lg"
                  height="h-10 xl:h-12"
                  width="w-auto xl:w-60"
                  radius="rounded-lg"
                />
              </Link>
              <PrimaryButton
                label="Register"
                fontSize="text-md sm:text-sm lg:text-lg"
                height="h-10 xl:h-12"
                width="w-auto xl:w-60"
                radius="rounded-lg"
                onClick={toggleRegisterModal}
              />
            </div>
            <Register
              isOpen={isRegisterModalOpen}
              onClose={toggleRegisterModal}
            />
          </div>
          <div className="w-full flex justify-end">
            <div className="hidden md:block w-[35%]">
              <HomeFlipSlider images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

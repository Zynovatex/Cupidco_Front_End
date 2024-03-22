"use client";

import RegisterModal from "@/app/(auth)/register/RegisterModal";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import HomeSwiper from "@/components/common/sliders/HomeSwiper";
import HomeSwiperVerticle from "@/components/common/sliders/HomeSwiperVerticle";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  "/images/HomeImage1.png",
  "/images/HomeImage1.png",
  "/images/HomeImage1.png",
];

const images2 = [
  "/images/HomeImage2.png",
  "/images/HomeImage2.png",
  "/images/HomeImage2.png",
];

export default function HomeSection1() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);

  const toggleRegisterModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen justify-center items-left px-10 py-16 md:py-20 md:px-20"
      style={{ backgroundImage: "url('/images/homeBackground1.png')" }}
    >
      <div>
        <div className=" mb-5 md:mb-10 mt-10  ">
          <Title
            text="Discover your soul's perfect counterpart"
            fontSize="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          />
        </div>

        <div className="text-justify md:w-[70%] md:pr-10">
          <Description
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer "
            fontSize=" md:text-xl xl:text-2xl"
            fontWeight="font-regular"
          />
        </div>

        {/* in web view  */}
        <div className="max-sm:hidden mt-5 flex gap-5 ">
          <Link href="/learn-more">
            <SecondaryButton
              label="Learn More"
              fontSize="text-md sm:text-sm lg:text-lg"
              height="h-9 xl:h-12"
              width="w-40 lg:w-48"
              radius="rounded-lg"
            />
          </Link>
          <PrimaryButton
            label="Register"
            fontSize="text-md sm:text-sm lg:text-lg"
            height="h-9 xl:h-12"
            width=" w-40 lg:w-48"
            radius="rounded-lg"
            onClick={toggleRegisterModal}
          />
        </div>

        {/*in web view images  */}
        <div>
          <div className="sm:ml-[50%] md:ml-[60%] sm:mt-[-60px] md:mt-[-180px] max-md:hidden">
            <div className="flex justify-center ml-28 mt-5">
              <div className="w-52 lg:w-72 z-0 ">
                <HomeSwiper images={images} />
              </div>
            </div>
            <div className="flex justify-center mr-24 mt-[-60px] lg:mt-[-100px] ">
              <div className="w-40 overflow-hidden">
                <HomeSwiperVerticle images={images2} />
              </div>
            </div>
          </div>
        </div>

        {/*in mobile view images  */}
        <div>
          <div className=" md:hidden sm:ml-[50%] md:ml-[60%] sm:mt-[-60px] md:mt-[-80px]">
            <div className="flex justify-center ml-20 mt-5 ">
              <div className="w-40  z-0 ">
                <HomeSwiper images={images} />
              </div>
            </div>
            <div className="flex justify-center mr-20 mt-[-60px] relative">
              <div className="w-28">
                <HomeSwiper images={images2} />
              </div>
            </div>
          </div>

          {/* in mobile view  */}
          <div className="mt-7 flex  justify-center sm:hidden">
            <Link href="/learn-more">
              <SecondaryButton
                label="Learn More"
                fontSize="text-md sm:text-sm lg:text-lg"
                height="h-9 xl:h-12"
                width=" w-60"
                radius="rounded-lg"
              />
            </Link>
          </div>
          <div className="mt-4 flex    justify-center sm:hidden">
            <PrimaryButton
              label="Register"
              fontSize="text-md sm:text-sm lg:text-lg"
              height="h-9 xl:h-12"
              width="w-60"
              radius="rounded-lg "
              onClick={toggleRegisterModal}
            />
          </div>
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={toggleRegisterModal}
          />
        </div>
      </div>
    </div>
  );
}

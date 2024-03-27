"use client";

import HomeCubeSlider from "@/components/common/sliders/HomeCubeSlider";
import Description from "@/components/common/texts/Description";
import Image from "next/image";

const images = [
  "/images/AboutSectionImage.png",
  "/images/AboutSectionImage.png",
  "/images/AboutSectionImage.png",
];

export default function AboutSection3() {
  const Content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also `;

  return (
    <div className="px-8 md:px-16 py-10 md:py-20 3xl:px-32 text-justify md:flex bg-[#f8e7e7]">
      {/* Description  */}
      <div className="md:order-last md:ml-10  ">
        <Description
          text={Content}
          italic={true}
          fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-5xl"
        />
      </div>

      {/* images in web view  */}
      {/* image 01  */}
      <div className="max-lg:hidden mt-[-200px] 3xl:w-[50%]">
        <Image
          src="/images/AboutSectionImage.png"
          alt="Double Images"
          width={700}
          height={50}
          className="shadow-2xl "
        />
      </div>
      {/* image 02  */}
      <div className=" max-lg:hidden ml-[-50px] lg:mt-[5%] 3xl:w-[30%] 3xl:mt-[7%]">
        <Image
          src="/images/AboutSectionImage.png"
          alt="Double Images"
          width={400}
          height={50}
          className="shadow-2xl "
        />
      </div>

      {/* images in mobile view and tablet view */}
      <div className=" mt-5 ">
        {/* image 01  */}
        <div className="max-md:flex max-md:justify-center max-md:mr-20 md:w-40 md:mt-[-20px] lg:hidden  ">
          <div className="w-36 md:w-40 lg:w-64 z-0 ">
            <HomeCubeSlider images={images} />
          </div>
        </div>
        {/* image 02  */}
        <div className="flex justify-center ml-28 mt-[-90px] md:hidden ">
          <div className="w-24 z-0 ">
            <HomeCubeSlider images={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

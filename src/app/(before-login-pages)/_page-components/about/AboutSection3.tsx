"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";

export default function AboutSection3() {
  const Content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also `;

  return (
    <div className="px-8 md:px-16 py-10 md:py-20 text-justify md:flex">
      {/* Description  */}
      <div className="md:order-last md:ml-10  ">
        <Description text={Content} italic={true} />
      </div>

      {/* images in web view  */}
      {/* image 01  */}
      <div className="max-lg:hidden mt-[-200px]">
        <Image
          src="/images/AboutSectionImage.png"
          alt="Double Images"
          width={700}
          height={50}
          className="shadow-2xl "
        />
      </div>
      {/* image 02  */}
      <div className=" max-lg:hidden ml-[-50px] lg:mt-[5%] ">
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
          <Image
            src="/images/AboutSectionImage.png"
            alt="Double Images"
            width={180}
            height={50}
            className="shadow-2xl "
          />
        </div>
        {/* image 02  */}
        <div className="flex justify-center ml-28 mt-[-100px] md:hidden ">
          <Image
            src="/images/AboutSectionImage.png"
            alt="Double Images"
            width={120}
            height={50}
            className="shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

'use client'

import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LearnMoreSection1() {
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    const img = document.getElementById("image");
    if (img) {
      setImageHeight(img.offsetHeight);
    }
  }, []);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel mauris hendrerit fringilla. Integer nec nibh et eros volutpat ullamcorper. Mauris vitae turpis nec leo efficitur fermentum. Proin non urna vitae sapien pretium accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel mauris hendrerit fringilla. Integer nec nibh et eros volutpat ullamcorper. Mauris vitae turpis nec leo efficitur fermentum. Proin non urna vitae sapien pretium accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;`;

  return (
    <div
      className="
        bg-cover 
        bg-center 
        bg-no-repeat 
        min-h-screen 
        flex flex-col 
        justify-start py-10 
        items-center
        text-center
      "
      style={{ backgroundImage: "url(/images/LearnMoreBg.png)" }}
    >
      <div className="p-14 flex flex-col justify-center items-center w-full text-center">
        <Title
          fontSize="text-2xl"
          text="Explore the world of Cupidco - where meaningful connections begin. Discover features, find matches, and embark on your journey to lasting relationships"
        />

        {/* Grid layout with single column on mobile/tablet and two columns on larger screens */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-6xl">
          {/* Image container */}
          <div className="order-2 lg:order-1">
            <Image
              src="/images/SampleRectangle.png"
              alt="Bg Image"
              width={600}
              height={200}
            />
          </div>

          {/* Text and button container */}
          <div className="order-3 lg:order-2 text-justify flex flex-col justify-between">
            <Description text={truncateText(longText, 100)} />

            <div className="w-full flex justify-center mt-4 lg:mt-0">
              <PrimaryButton
                label="Explore"
                fontSize="text-md md:text-sm lg:text-lg"
                height="py-2"
                width="w-full"
                radius="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";

export default function LearnMoreSection1() {
  const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel mauris hendrerit fringilla. Integer nec nibh et eros volutpat ullamcorper. Mauris vitae turpis nec leo efficitur fermentum. Proin non urna vitae sapien pretium accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit.  `;
  const longText2 = ` Mauris vitae turpis nec leo efficitur fermentum. Proin non urna vitae sapien pretium accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae`;

  return (
    <div
      className="
        bg-cover 
        bg-center 
        bg-no-repeat 
        min-h-screen 
        items-center
        py-28
        sm:px-5
      bg-[#FFF4F1]"
      // style={{ backgroundImage: "url(/images/LearnMoreBg.png)" }}
    >
      <div>
        {/* title  */}
        <div className="text-center w-[80%] mx-auto">
          <Title
            fontSize=" sm:text-lg md:text-2xl"
            fontFamily="font-Vollkorn"
            text="Explore the world of Cupidco - where meaningful connections begin.  "
            center={true}
          />
          <Title
            fontSize="sm:text-lg md:text-2xl"
            fontFamily="font-Vollkorn"
            text=" Discover features, find matches, and embark on your journey to lasting relationships  "
            center={true}
          />
        </div>

        <div className="lg:flex lg:justify-center mt-8 ml-[2%]">
          {/* image  */}
          <div className=" flex justify-center lg:justify-end mt-5">
            <Image
              src="/images/LearnMoreImage.png"
              alt="Bg Image"
              width={630}
              height={200}
              className=" max-lg:w-[80%] "
            />
          </div>

          <div className=" lg:w-[35%]">
            {/* descriptions  */}
            <div className="text-justify mt-5 w-[80%]   mx-auto  ">
              <Description text={longText} />
              <div className="mt-4">
                <Description text={longText2} />
              </div>
            </div>

            {/* explore button */}
            <div className="mt-4 flex justify-center">
              <PrimaryButton
                label="Explore"
                fontSize="text-md md:text-sm lg:text-lg"
                height="py-2"
                width="w-[80%] md:w-[70%]"
                radius="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

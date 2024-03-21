"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

export default function AboutSection1() {
  return (
    <div className=" flex flex-col gap-5 justify-center items-center py-28 px-10 ">
      {/* title  */}
      <div>
        <Title
          text="About Us"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          center={true}
          fontWeight="font-bold"
          uppercase={true}
        />
      </div>

      {/* description  */}
      <div className="text-center md:w-[80%] max-w-screen-2xl">
        <Description
          italic={true}
          text="At Cupidco, we believe in the power of love and the beauty of lifelong partnerships. Our mission is to connect individuals on their journey to finding true love, with the ultimate goal of helping them create meaningful and lasting relationships. We are committed to being your trusted companion in your pursuit of marriage and happiness. "
        />
      </div>
    </div>
  );
}

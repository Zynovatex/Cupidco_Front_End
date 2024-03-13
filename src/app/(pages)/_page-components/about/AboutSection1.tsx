"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

export default function AboutSection1() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-16"
      style={{ backgroundImage: "url(/images/homeBackground1.png)" }}
    >
      <div>
        <Title
          text="About Us"
          fontSize="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl"
          center={true}
          fontWeight="font-normal"
          uppercase={true}
        />
      </div>
      <div className="text-center w-[80%]">
        <Description
          italic={true}
          text="At Cupidco, we believe in the power of love and the beauty of lifelong partnerships. Our mission is to connect individuals on their journey to finding true love, with the ultimate goal of helping them create meaningful and lasting relationships. We are committed to being your trusted companion in your pursuit of marriage and happiness. "
        />
      </div>
    </div>
  );
}

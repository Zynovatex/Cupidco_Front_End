"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";

export default function AboutSection3() {
  const Content = `We envision a world where every person can find their soulmate, build a strong foundation, and embark on a lifelong journey of love and companionship. We are dedicated to making this vision a reality by providing a safe, inclusive, and supportive platform for individuals seeking marriage.We envision a world where every person can find their soulmate, build a strong foundation, and embark on a lifelong journey of love and companionship. We are dedicated to making this vision a reality by providing a safe, inclusive, and supportive platform for individuals seeking marriage.We envision a world where every person can find their soulmate, build a strong foundation, and embark on a lifelong journey of love and companionship. We are dedicated to making this vision a reality by providing a safe, inclusive, and supportive platform for individuals seeking marriage.`;
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen p-20 max-md:p-10 bg-[#FFF4F1]">
      <div>
        <Title
          text="Lorem Ipsum"
          fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
          center={true}
        />
      </div>
      <div className="grid md:grid-cols-2 mt-10 text-justify items-center gap-5">
        <div>
          <Description text={Content} italic={true} />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/SampleRectangle.png"
            alt="Double Images"
            width={400}
            height={400}
            className="w-[80%]"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-10 text-justify items-center gap-5">
        <div className="flex justify-center order-last md:order-first ">
          <Image
            src="/images/SampleRectangle.png"
            alt="Double Images"
            width={400}
            height={400}
            className="w-[80%]"
          />
        </div>
        <div className="order-first md:order-last">
          <Description text={Content} italic={true} />
        </div>
      </div>
    </div>
  );
}

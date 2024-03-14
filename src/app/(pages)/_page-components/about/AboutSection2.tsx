"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";

export default function AboutSection2() {
  const Content = `
    We envision a world where every person can find their soulmate, build a strong foundation, and embark on a lifelong journey of love and companionship. We are dedicated to making this vision a reality by providing a safe, inclusive, and supportive platform for individuals seeking marriage.`;

  return (
    <div className="bg-[#FFF4F1] min-h-auto p-20 max-md:p-10">
      <div className="grid md:grid-cols-2 text-justify items-center gap-5">
        <div className="flex justify-center">
          <Image
            src="/images/SampleRectangle.png"
            alt="Double Images"
            width={300}
            height={50}
            className="w-[80%]"
          />
        </div>
        <div className="flex flex-col max-sm:gap-5 md:gap-3 lg:gap-3 max-xl:gap-3">
          <div>
            <Title
              text="Our Vision"
              center={true}
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
            />
          </div>
          <Description text={Content} />
          <div>
            <Title
              text="Our Mission"
              center={true}
              fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
            />
          </div>
          <Description text={Content} />
        </div>
      </div>
    </div>
  );
}

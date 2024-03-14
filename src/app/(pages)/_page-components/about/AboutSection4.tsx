"use client";

import SocialMedia from "@/components/common/social-media/SocialMedia";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";

export default function AboutSection4() {
  const Content = `We envision a world where every person can find their soulmate, build a strong foundation, and embark on a lifelong journey of love and companionship. We are dedicated to making this vision a reality by providing a safe, inclusive, and supportive platform for individuals seeking marriage. We envision a world where every person can find their soulmate, build a strong foundation, and embark on a lifelong journey of love and companionship. We are dedicated to making this vision a reality by providing a safe, inclusive, and supportive platform for individuals seeking marriage. We envision a world where every person can find their soulmate, build a strong foundation, and embark on a lifelong journey of love and companionship. We are dedicated to making this vision a reality by providing a safe, inclusive, and supportive platform for individuals seeking marriage.`;

  return (
    <div className="bg-[#FFF4F1] min-h-auto py-20 px-20 max-md:px-10">
      <div className="grid md:grid-cols-2 text-justify items-center gap-5">
        <div className="flex justify-center">
          <Image
            src="/images/SampleRectangle.png"
            alt="Double Images"
            width={400}
            height={50}
            className="w-[80%]"
          />
        </div>
        <div>
          <Description text={Content} italic={true} />
          <div className="flex justify-start mt-5">
            <div className="text-left md:mt-0 sm:items-center lg:items-start">
              <Title text="Follow us on" fontSize="text-xl md:text-lg " />
              <div className="flex justify-center mt-2 items-center max-sm:gap-3 max-md:gap-5 lg:gap-10 max-xl:gap-10">
                {/* Social Media Icons */}
                <SocialMedia
                  network="facebook"
                  url="www.facebook.com"
                  key={1}
                  size="8"
                />
                <SocialMedia
                  network="instagram"
                  url="www.instagram.com"
                  key={2}
                  size="8"
                />
                <SocialMedia
                  network="linkedin"
                  url="www.linkedin.com"
                  key={3}
                  size="8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

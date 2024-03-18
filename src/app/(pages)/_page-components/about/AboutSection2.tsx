"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";

export default function AboutSection2() {
  // our vision
  const OurVision = `We envision a world where every person can find their soulmate, build a strong foundation, and embark on a lifelong journey of love and companionship. We are dedicated to making this vision a reality by providing a safe, inclusive, and supportive platform for individuals seeking marriage.`;
  // our mission
  const OurMission = `At Cupidco, we're on a mission to help you find true love and create lifelong partnerships. Our platform is dedicated to guiding you on the path to a happy and fulfilling marriage`;

  // our Story description 01
  const OurStoryDescription1 = `[Your Founder's Name], the founder of [Your Platform Name], started this platform with a deep passion for helping people find their perfect life partners. Their personal experiences and a desire to make a positive impact on the world led to the creation of Cupidco`;
  // our Story description 02
  const OurStoryDescription2 = `[Your Founder's Name], the founder of [Your Platform Name], started this platform with a deep passion for helping people find their perfect life partners. Their personal experiences and a desire to make a positive impact on the world led to the creation of Cupidco`;

  return (
    <div className="bg-[#FFF4F1]">
      <div className="max-w-screen-2xl mx-auto ">
        <div className=" text-justify px-8 md:px-16 py-10 md:py-20">
          {/* our vision title, description and image */}
          <div className="grid md:grid-cols-2  ">
            <div className="  md:order-last">
              {/* background image  */}
              <div className="absolute mt-10 max-lg:hidden lg:ml-10">
                <Image
                  src={"/images/pngwing.png"}
                  alt={" text background image"}
                  width={500}
                  height={50}
                />
              </div>

              {/* title  */}
              <div className="mb-3 md:flex ">
                <Title
                  text="Our Vision"
                  center={true}
                  fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
                />
              </div>
              {/* description  */}
              <div className="mb-5">
                <Description text={OurVision} />
              </div>

              {/* our mission in our vision section in tablet view and mobile */}
              <div className="max-lg:hidden">
                <div>
                  {/* title  */}
                  <div className="mt-16 mb-4 lg:flex lg:justify-end">
                    <Title
                      text="Our Mission"
                      center={true}
                      fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
                    />
                  </div>
                </div>
                {/* description  */}
                <div className="mb-5">
                  <Description text={OurMission} />
                </div>
              </div>
            </div>
            {/* image  */}
            <div className="flex justify-center">
              <Image
                src="/images/AboutSectionImage.png"
                alt="Double Images"
                width={300}
                height={50}
                className="shadow-2xl max-lg:w-48"
              />
            </div>
          </div>

          {/* our Mission title, description and image */}
          <div className="md:grid md:grid-cols-2 lg:hidden">
            <div>
              <div>
                {/* title  */}
                <div className="mt-16 mb-4 md:flex ">
                  <Title
                    text="Our Mission"
                    center={true}
                    fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
                  />
                </div>
              </div>
              {/* description  */}
              <div className="mb-5">
                <Description text={OurMission} />
              </div>
            </div>
            {/* image  */}
            <div className="max-md:hidden flex justify-center lg:hidden">
              <Image
                src="/images/AboutSectionImage.png"
                alt="Double Images"
                width={200}
                height={50}
                className="shadow-2xl"
              />
            </div>
          </div>

          {/* Our Story title, dedescription and image  */}
          <div className="lg:grid lg:grid-cols-2 lg:mt-10">
            <div>
              {/* background image  */}
              <div className="absolute mt-20 max-lg:hidden ml-5  ">
                <Image
                  src={"/images/pngwing.png"}
                  alt={" text background image"}
                  width={500}
                  height={50}
                />
              </div>
              {/* title  */}
              <div className="mt-16 mb-4">
                <Title
                  text="Our Story"
                  center={true}
                  fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
                />
              </div>
              {/* description 1 */}
              <div className="mb-5 mr-5">
                <Description text={OurStoryDescription1} />
              </div>

              {/* description 1 */}
              <div className="mb-2 mr-5">
                <Description text={OurStoryDescription2} />
              </div>
            </div>
            {/* images  */}
            <div className="md:flex md:gap-5 lg:gap-0 md:justify-center md:mt-5 lg:mt-[-20px] ">
              <div className="max-md:mr-28 max-md:mt-5 flex max-md:justify-center  lg:mr-[-20px]">
                <Image
                  src="/images/AboutSectionImage.png"
                  alt="Double Images"
                  width={150}
                  height={50}
                  className="shadow-2xl md:w-60 lg:w-64 lg:h-96"
                />
              </div>
              <div className="max-md:ml-28 max-md:mt-[-90px] flex max-md:justify-center lg:ml-[-20px]">
                <Image
                  src="/images/AboutSectionImage.png"
                  alt="Double Images"
                  width={150}
                  height={50}
                  className="shadow-2xl md:w-60 lg:w-64 lg:h-96 lg:flex lg:mt-60 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

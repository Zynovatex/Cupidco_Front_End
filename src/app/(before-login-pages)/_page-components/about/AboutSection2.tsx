"use client";

import HomeCubeSlider from "@/components/common/sliders/HomeCubeSlider";
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

  const images = [
    "/images/AboutSectionImage.png",
    "/images/AboutSectionImage.png",
    "/images/AboutSectionImage.png",
  ];

  return (
    <div className="bg-[#FFF4F1] 3xl:px-32">
      <div className="  ">
        <div className=" text-justify px-8 md:px-16 py-10 md:py-20">
          {/* our vision title, description and image */}
          <div className="grid md:grid-cols-2  ">
            <div className="  md:order-last">
              {/* background image  */}
              <div className="absolute mt-10 max-lg:hidden lg:ml-10  ">
                <Image
                  src={"/images/pngwing.png"}
                  alt={" text background image"}
                  width={500}
                  height={50}
                />
              </div>

              {/* title  */}
              <div className="mb-3 md:flex 3xl:mb-10">
                <Title
                  text="Our Vision"
                  center={true}
                  fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 3xl:text-5xl 4xl:text-6xl"
                />
              </div>

              {/* description  */}
              <div className="mb-5">
                <Description
                  text={OurVision}
                  fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-5xl"
                />
              </div>

              {/* our mission in our vision section in tablet view and mobile */}
              <div className="max-lg:hidden">
                <div>
                  {/* title  */}
                  <div className="mt-16 mb-4 3xl:mb-10 lg:flex lg:justify-end ">
                    <Title
                      text="Our Mission"
                      center={true}
                      fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 3xl:text-5xl 4xl:text-6xl"
                    />
                  </div>
                </div>
                {/* description  */}
                <div className="mb-5">
                  <Description
                    text={OurMission}
                    fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-5xl"
                  />
                </div>
              </div>
            </div>

            {/* image  */}
            <div className="flex justify-center">
              <div className="w-36 md:w-40 lg:w-64 3xl:w-[40%] ">
                <HomeCubeSlider images={images} />
              </div>
            </div>
          </div>

          {/* our Mission title, description and image */}
          <div className="md:grid md:grid-cols-2 lg:hidden">
            <div>
              <div>
                {/* title  */}
                <div className="mt-16 mb-4 3xl:mb-10 md:flex ">
                  <Title
                    text="Our Mission"
                    center={true}
                    fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 3xl:text-5xl 4xl:text-6xl"
                  />
                </div>
              </div>
              {/* description  */}
              <div className="mb-5">
                <Description
                  text={OurMission}
                  fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-5xl"
                />
              </div>
            </div>
            {/* image  */}
            <div className="max-md:hidden flex justify-center lg:hidden">
              <div className="w-36 md:w-40 lg:w-64  ">
                <HomeCubeSlider images={images} />
              </div>
            </div>
          </div>

          {/* Our Story title, description and image  */}
          <div className="lg:grid lg:grid-cols-2 lg:mt-10">
            <div>
              {/* background image  */}
              <div className="absolute mt-20 max-lg:hidden ml-5 ">
                <Image
                  src={"/images/pngwing.png"}
                  alt={" text background image"}
                  width={500}
                  height={50}
                  className=""
                />
              </div>
              {/* title  */}
              <div className="mt-16 mb-4 3xl:mb-10">
                <Title
                  text="Our Story"
                  center={true}
                  fontSize="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 3xl:text-5xl 4xl:text-6xl"
                />
              </div>
              {/* description 1 */}
              <div className="mb-5 3xl:mb-10 mr-5">
                <Description
                  text={OurStoryDescription1}
                  fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-5xl"
                />
              </div>

              {/* description 1 */}
              <div className="mb-2 mr-5">
                <Description
                  text={OurStoryDescription2}
                  fontSize="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl 4xl:text-5xl"
                />
              </div>
            </div>

            {/* images  */}
            <div className="3xl:mb-20">
              <div className="md:flex md:gap-5 lg:gap-0  md:justify-center  md:mt-5 lg:mt-[-20px] ">
                <div className="max-md:mr-28 max-md:mt-5 flex max-md:justify-center  mr-[-40px] ">
                  <div className="w-36 md:w-40 lg:w-64 3xl:w-96 ">
                    <HomeCubeSlider images={images} />
                  </div>
                </div>
                <div className="max-md:ml-28 max-md:mt-[-90px] max-lg:mt-28   flex max-md:justify-center ml-[-20px] 3xl:mt-10">
                  <div className="w-36 md:w-40 lg:w-64 lg:mt-60 3xl:w-80">
                    <HomeCubeSlider images={images} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

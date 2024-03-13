"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

const ClientArea = () => {
  return (
    <div className="relative">
      {/* Navigation Bar */}
      {/* <NavBar /> */}

      <div
        className="bg-cover bg-center bg-no-repeat h-screen py-8 px-4 md:py-12 md:px-6 lg:py-20 lg:px-14 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url(/images/homeBackground1.png)" }}
      >
        <div>
          <Title
            text="Client Area"
            fontSize="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            center={true}
          />
        </div>

        <div className="flex flex-col items-center mt-6 md:mt-8 lg:mt-12">
          <div className="text-center">
            {/* Use text-center class for center alignment */}
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientArea;

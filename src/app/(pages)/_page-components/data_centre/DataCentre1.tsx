"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

const DataCentre1 = () => {
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
            text="Welcome to the Data Centre"
            fontSize="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            center={true}
          />
        </div>

        <div className="flex flex-col items-center mt-6 md:mt-8 lg:mt-12">
          <div className="text-center">
            {/* Use text-center class for center alignment */}
            <Description text="Where Love and Technology Unite" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCentre1;

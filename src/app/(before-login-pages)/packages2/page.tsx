"use client";

import Packages2Card from "@/components/common/cards/Packages2Card";
import React from "react";

const Packages2 = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-auto flex flex-row justify-center items-center py-28 px-16 max-sm:px-4 md:px-5 2xl:px-24"
      style={{ backgroundImage: "url(/images/DefaultBg.png)" }}
    >
      <div className=" flex flex-wrap justify-center gap-10 my-auto">
        {/* Packages2Cards */}
        <Packages2Card title="Package 1" likeState={true} />
        <Packages2Card title="Package 2" unlikeState={true} />
        <Packages2Card title="Package 3" starState={true} />
        <Packages2Card title="Package 4" premiumState={true} />
        <Packages2Card title="Package 5" likeState={true} />
        <Packages2Card title="Package 6" unlikeState={true} />
        <Packages2Card title="Package 7" starState={true} />
        <Packages2Card title="Package 8" starState={true} />
        <Packages2Card title="Package 9" premiumState={true} />
        <Packages2Card title="Package 10" premiumState={true} />
      </div>
    </div>
  );
};

export default Packages2;

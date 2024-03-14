"use client";

import React from "react";
import Usertab from "@/components/common/user account/Usertab";
import UserTabContainer from "@/components/tab-container/UserTabConatiner";

const UserProfile = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('/images/Bg.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "h-screen",
  };

  const handleBackButtonClick = () => {
    console.log("Back button clicked");
  };

  return (
    <div className="grid grid-cols-1 p-8 relative" style={backgroundImageStyle}>
      {/* Back button with arrow icon */}
      <div className="absolute top-4 left-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#4D194D"
          className="w-6 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div className="flex flex-row p-8 w-full h-full">
        <div className="w-[30%]">
          <Usertab />
        </div>
        <div className="w-full">
          <UserTabContainer />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

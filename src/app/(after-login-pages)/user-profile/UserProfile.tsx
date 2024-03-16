"use client";

import Usertab from "@/components/common/user account/Usertab";
import UserTabContainer from "@/components/tab-container/UserTabConatiner";
import React from "react";

const UserProfile = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("/images/Bg.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <div className="flex p-8 relative" style={backgroundImageStyle}>
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

      {/* User tab */}
      <div className="p-4">
        <Usertab />
      </div>

      {/* Tab container */}
      <div className="p-4">
        <UserTabContainer />
      </div>
    </div>
  );
};

export default UserProfile;

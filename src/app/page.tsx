"use client";

import React from "react";

import Dashboard from "./(after-login-pages)/dashboard/page";
import HomeSection1 from "./(before-login-pages)/_page-components/home/HomeSection1";
import HomeSection2 from "./(before-login-pages)/_page-components/home/HomeSection2";

const ParentComponent = () => {
  const UserLogin = true;

  return (
    <>
      <main>
        {UserLogin ? (
          <div>
            {/* after login user dashboard  */}
            <Dashboard />
          </div>
        ) : (
          <div className="flex justify-center bg-[#FFF4F1]">
            <div className="max-w-screen-2xl ">
              {/* Landing page sections  */}
              <HomeSection1 />
              {/* <HomeSection2 /> */}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ParentComponent;

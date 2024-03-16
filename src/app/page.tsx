"use client";

import React from "react";

import HomeSection1 from "./(pages)/_page-components/home/HomeSection1";
import HomeSection2 from "./(pages)/_page-components/home/HomeSection2";
import Dashboard from "./(after-login-pages)/dashboard/page";

const ParentComponent = () => {
  const UserLogin = false;

  return (
    <>
      <main>
        {UserLogin ? (
          <div>
            {/* after login user dashboard  */}
            <Dashboard />
          </div>
        ) : (
          <div>
            {/* Landing page sections  */}
            <HomeSection1 />
            <HomeSection2 />
          </div>
        )}
      </main>
    </>
  );
};

export default ParentComponent;

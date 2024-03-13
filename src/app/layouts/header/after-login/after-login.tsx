"use client";

import Logo from "@/components/common/logo/Logo";
import Link from "next/link";
import FeatureSection1 from "../../_layout-components/feature-section1";
import { GrLanguage } from "react-icons/gr";
import FeatureSection2 from "../../_layout-components/feature-section2";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export default function AfterLogin() {
  const [isMobile, setIsMobile] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [menuText, setMenuText] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set breakpoint for mobile screens
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setShowIcons(false);
      setMenuText("Menu");
    } else {
      setShowIcons(true);
      setMenuText("");
    }
  }, [isMobile]);

  return (
    <>
      {/* in web view */}
      {showIcons && (
        <nav className="fixed w-full md:h-[85px]  bg-transparent backdrop-blur-md z-50 md:flex">
          <div className=" flex justify-start items-center h-full w-full max-md:pl-6 pl-5">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* feature sections  */}
          <div className="flex justify-end items-center h-full w-full  pr-5">
            <FeatureSection1 />
            <div className="text-2xl px-5 text-primary-purple">
              <GrLanguage />
            </div>
            <FeatureSection2 />
          </div>
        </nav>
      )}

      {!showIcons && (
        <nav className="fixed w-full py-2 bg-transparent backdrop-blur-md z-50  ">
          <div className="flex">
            <div className=" flex justify-start items-center h-full w-full   pl-6">
              <Link href="/">
                <Logo />
              </Link>
            </div>

            <div className="items-center flex ">
              <div className=" text-primary-purple text-3xl px-5 ">
                <IoMenu />
              </div>
            </div>
          </div>

          <div className=" flex justify-end pr-5 ">
            <div className="border-2 flex bg-[#4d194d]/[.14] rounded-lg px-2 gap-2 items-center border-[#4d194d]/[.24] text-primary-purple font-playfair-display">
              <HiAdjustmentsHorizontal className="text-xl  " />
              Filter
            </div>
          </div>
          <div className="flex justify-end pr-5 mt-2">
            <FeatureSection1 />
          </div>
        </nav>
      )}
    </>
  );
}

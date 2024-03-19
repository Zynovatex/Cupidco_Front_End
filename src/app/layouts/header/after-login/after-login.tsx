"use client";

import React, { useEffect, useState, ChangeEvent, SetStateAction } from "react";
import Logo from "@/components/common/logo/Logo";
import Link from "next/link";
import FeatureSection1 from "../../_layout-components/feature-section1";
import { GrLanguage } from "react-icons/gr";
import FeatureSection2 from "../../_layout-components/feature-section2";
import { IoMenu, IoSearch } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Languages from "@/components/modals/Languages";
import HamburgerMenu from "./HamburgerMenu";
 
export default function AfterLogin() {
  const [isMobile, setIsMobile] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [menuText, setMenuText] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // Default language label
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleSearchToggle = () => {
    setSearchClicked(!searchClicked);
  };

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

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };
  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };
  const handleLanguageSelect = (language: SetStateAction<string>) => {
    setSelectedLanguage(language);
    toggleLanguageMenu(); // Close language menu after selection
  };

  return (
    <>
      {/* in web view */}
      {showIcons && (
        <nav className="fixed w-full md:h-[85px]  bg-transparent backdrop-blur-md z-50 md:flex">
          <div className=" flex justify-start items-center  max-md:pl-6 pl-5">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* feature sections  */}
          <div className="flex justify-end items-center h-full w-full  pr-5">
            <FeatureSection1 />
            <div className="text-2xl px-5 text-primary-purple cursor-pointer ">
              <GrLanguage onClick={toggleLanguageMenu} />
              {isLanguageMenuOpen && (
                <Languages
                  onClose={toggleLanguageMenu}
                  onSelectLanguage={handleLanguageSelect}
                />
              )}
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

            <div className="items-center flex " onClick={handleNav}>
              <div className=" text-primary-purple text-3xl px-5 ">
                <IoMenu />
                <HamburgerMenu isOpen={menuOpen} onClose={closeMenu} />
              </div>
            </div>
          </div>

          {/* dropdown search */}
          <div className="flex  justify-center mt-3 mx-6">
            {!searchClicked && (
              <div>
                <div className="relative  ">
                  <div className="absolute mt-[4px] ml-1 ">
                    <div className=" rounded-full text-white text-sm bg-primary-purple p-2 ">
                      <IoSearch onClick={handleSearchToggle} />
                    </div>
                  </div>

                  {/* dropdown */}
                  <div className="absolute mt-2 ml-12">|</div>
                  <select
                    value={selectedValue}
                    onChange={handleDropdownChange}
                    className="block appearance-none pr-24 rounded-3xl w-full bg-[#4d194d]/[.24] font-playfair-display border pl-16 text-primary-purple font-bold border-[#4d194d]/[.24] hover:border-gray-500 px-4 py-2 shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" disabled>
                      Select Package
                    </option>
                    <option value="option1">Packages</option>
                    <option value="option2">Proposals</option>
                    <option value="option3">Bookmarks</option>
                  </select>
                </div>
              </div>
            )}

            {/* input */}
            {searchClicked && (
              <div className="relative  ml-2">
                <div className="absolute mt-[4px] ml-2 ">
                  <div className=" rounded-full text-primary-purple text-sm bg-purple-100/40 p-1 mt-1 ">
                    <IoClose onClick={handleSearchToggle} />
                  </div>
                </div>
                <div className="absolute mt-2 ml-12">|</div>

                {/* input Field  */}
                <input
                  type="text"
                  className="block appearance-none pr-14 rounded-3xl w-full bg-[#4d194d]/[.24] font-playfair-display border pl-16 text-primary-purple font-bold border-[#4d194d]/[.24] hover:border-gray-500 px-4 py-2 shadow leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}

            <div>
              <div className="mt-1 ml-2 rounded-full text-white text-sm bg-primary-purple p-2 ">
                <HiAdjustmentsHorizontal />
              </div>
            </div>

            <div>
              <div className=" mt-[2px] ml-2 rounded-full text-white   bg-primary-purple  ">
                <FaCircleUser className="w-8 h-8" />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

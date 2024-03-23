"use client";

import React, { useEffect, useState, ChangeEvent, SetStateAction } from "react";
import Logo from "@/components/common/logo/Logo";
import Link from "next/link";
import FeatureSection1 from "../../_layout-components/feature-section1";
import { GrLanguage } from "react-icons/gr";
import { IoMenu, IoSearch } from "react-icons/io5";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Languages from "@/components/modals/Languages";
import HamburgerMenu from "./HamburgerMenu";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import {
  MdOutlineNotifications,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import FilterOption from "@/components/modals/FilterOption";

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
  const notifcation = true;

  const [isRegisterModalOpen, setIsRegisterModalOpen] = React.useState(false);

  const toggleRegisterModal = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };
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

            <div className="relative  py-1 lg:py-[6px] px-2 text-primary-purple font-bold rounded-[30px] border-2 border-[#4d194d]/[.35] bg-[#fff]/[.40] flex font-Vollkorn gap-1 lg:gap-3  items-center">
              {/* filter option icon  */}
              <div
                className=" relative cursor-pointer rounded-full text-white lg:text-lg bg-primary-purple p-2 "
                onClick={toggleRegisterModal}
              >
                <HiAdjustmentsHorizontal />
              </div>
              {/* notification icon  */}
              <div className="  rounded-full text-white lg:text-lg bg-primary-purple p-2">
                {notifcation ? (
                  <MdOutlineNotifications />
                ) : (
                  <MdOutlineNotificationsActive />
                )}
              </div>
              {/* messenger icon  */}
              <div className="  rounded-full text-white lg:text-lg bg-primary-purple p-2">
                <RiMessengerFill />
              </div>
              {/* user profile  */}
              <div className="  rounded-full text-white   bg-primary-purple  ">
                <FaCircleUser className="w-8 h-8" />
              </div>
              {/* HamburgerMenu menu  */}
              <div
                onClick={handleNav}
                className="relative text-primary-purple text-3xl pr-1 "
              >
                <IoMenu />
                <HamburgerMenu isOpen={menuOpen} onClose={closeMenu} />
              </div>
            </div>
          </div>
        </nav>
      )}
      {/* tablet and mobile view  */}
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
                    className="block appearance-none pr-24 rounded-3xl w-full bg-[#4d194d]/[.24] font-Vollkorn border pl-16 text-primary-purple font-bold border-[#4d194d]/[.24] hover:border-gray-500 px-4 py-2 shadow leading-tight focus:outline-none focus:shadow-outline"
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
                  className="block appearance-none pr-14 rounded-3xl w-full bg-[#4d194d]/[.24] font-Vollkorn border pl-16 text-primary-purple font-bold border-[#4d194d]/[.24] hover:border-gray-500 px-4 py-2 shadow leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}

            <div>
              <div
                className="mt-1 ml-2 rounded-full text-white text-sm bg-primary-purple p-2 "
                onClick={toggleRegisterModal}
              >
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
      )}{" "}
      <FilterOption
        isOpen={isRegisterModalOpen}
        onClose={toggleRegisterModal}
      />
    </>
  );
}

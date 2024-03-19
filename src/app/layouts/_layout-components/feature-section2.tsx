import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { MdOutlineNotifications } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import HamburgerMenu from "../header/after-login/HamburgerMenu";
import { useState } from "react";

export default function FeatureSection2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const notifcation = true;

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className=" py-1 lg:py-[6px] px-2 text-primary-purple font-bold rounded-[30px] border-2 border-[#4d194d]/[.35] bg-[#fff]/[.40] flex font-playfair-display gap-1 lg:gap-3  items-center">
        <div className="  rounded-full text-white lg:text-lg bg-primary-purple p-2">
          <HiAdjustmentsHorizontal />
        </div>
        <div className="  rounded-full text-white lg:text-lg bg-primary-purple p-2">
          {notifcation ? (
            <MdOutlineNotifications />
          ) : (
            <MdOutlineNotificationsActive />
          )}
        </div>
        <div className="  rounded-full text-white lg:text-lg bg-primary-purple p-2">
          <RiMessengerFill />
        </div>
        <div className="  rounded-full text-white   bg-primary-purple  ">
          <FaCircleUser className="w-8 h-8" />
        </div>
        <div
          onClick={handleNav}
          className="relative text-primary-purple text-3xl pr-1 "
        >
          <IoMenu />
          <HamburgerMenu isOpen={menuOpen} onClose={closeMenu} />
        </div>
      </div>
    </>
  );
}

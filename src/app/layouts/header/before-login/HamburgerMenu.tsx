import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  IoHelp,
  IoHome,
  IoLocate,
  IoNotifications,
  IoPerson,
  IoSearch,
  IoShare,
} from "react-icons/io5";
import HamburgerButton from "@/components/common/buttons/HamburgerButton";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Use setTimeout to ensure smooth animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  const menuItems = [
    { label: "About Us", path: "/pages/about", icon: <IoHome /> },
    { label: "Contact Us", path: "/pages/contact_us", icon: <IoSearch /> },
    { label: "Services", path: "/pages/services", icon: <IoPerson /> },
    { label: "Report", path: "/", icon: <IoNotifications /> },
    { label: "Help / FaQ", path: "/", icon: <IoHelp /> },
    { label: "Share", path: "/", icon: <IoShare /> },
    { label: "Support", path: "/", icon: <IoLocate /> },
  ];

  return (
    <div
      ref={menuRef}
      className={`fixed md:hidden right-0 top-0 h-screen bg-cover bg-no-repeat transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundImage: "url(/images/HamburgerFrame.png)" }}
    >
      <div className="p-10">
        <ul className="text-lg mt-20 text-white font-playfair-display">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-4 uppercase text-lg">
              <Link href={item.path}>
                <span>
                  <HamburgerButton label={item.label} icon={item.icon} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 w-[100%] flex justify-center pb-10">
          <PrimaryButton
            label="Log out"
            bgColor="bg-[white]"
            textColor="text-primary-purple"
            height="py-1"
            fontSize="text-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;

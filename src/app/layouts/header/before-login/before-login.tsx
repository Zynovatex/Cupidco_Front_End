"use client";
import { useState } from "react";
import Link from "next/link";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import LoginModal from "@/app/(auth)/login/LoginModal";
import Logo from "@/components/common/logo/Logo";

const BeforeLogin = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed w-full h-20 bg-transparent backdrop-blur-md z-50">
        <div className="flex justify-between items-center h-full w-full p-10">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden sm:flex font-playfair-display text-primary-purple font-bold">
            {navItems.map((item, index) => (
              <Link href={item.path} key={index}>
                <div className="ml-10 uppercase md:text-sm lg:text-lg hidden md:block lg:block">
                  <span className="nav-link hover:border-b border-transparent hover:border-black border-b-2 cursor-pointer">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex flex-row gap-2">
            <SecondaryButton
              label="English"
              fontSize="text-md md:text-sm lg:text-lg"
              height="py-0 md:py-0 lg:px-0"
              width="px-2 md:px-2 lg:px-4"
              radius="rounded-md"
            />
            <PrimaryButton
              label="Sign in"
              fontSize="text-md md:text-sm lg:text-lg"
              height="py-0 md:py-0 lg:px-0"
              width="px-2 md:px-2 lg:px-4"
              radius="rounded-md"
              onClick={toggleLoginModal}
            />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={isLoginModalOpen} onClose={toggleLoginModal} />
    </>
  );
};

export default BeforeLogin;

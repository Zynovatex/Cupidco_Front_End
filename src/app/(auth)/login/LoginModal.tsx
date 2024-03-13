"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import CheckboxComponent from "@/components/common/inputs/Checkbox";
import TextField from "@/components/common/inputs/Input";
import Logo from "@/components/common/logo/Logo";
import SocialMedia from "@/components/common/social-media/SocialMedia";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import PopupwithIco from "@/components/modals/PopupwithIco";
import ForgetPasswordModal from "../forget-password/ForgetPasswordModal";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  const [isForgetPasswordModalOpen, setIsForgetPasswordModalOpen] =
    useState(false);

  const openForgetPasswordModal = () => {
    setIsModalOpen(false);
    setIsForgetPasswordModalOpen(true);
  };

  const closeForgetPasswordModal = () => {
    setIsForgetPasswordModalOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const startClosing = () => {
    setIsClosing(true);
    timeoutIdRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
  };

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      startClosing();
    }
  };

  const modalAnimation = isClosing ? "animate-slideDown" : "animate-slideUp";

  if (!isOpen && !isClosing) return null;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-[#FFB4A2] bg-opacity-30 transition-opacity duration-500 flex justify-center items-center ${
          isOpen || isClosing ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBgClick}
      >
        <div
          className={`relative rounded-2xl 
          w-[80%] 
          2xl:w-[60%] 
          max-sm:w-[90%]
          h-[80%] 
          max-w-7xl
          px-10 
          md:py-36 
          py-52 
          max-sm:h-[80%] 
          sm:py-24 lg:py-2
          mx-auto sm:h-[74%] md:h-[84%]
          bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500 flex justify-center items-center`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ForgetPasswordBg.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Background"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <button
            onClick={startClosing}
            className="absolute top-0 right-0 m-4 z-10 text-secondary-color"
            aria-label="Close modal"
          >
            <IoCloseCircle size="2em" />
          </button>
          <div
            className="
        relative rounded-2xl shadow-lg overflow-hidden
        w-full sm:w-4/5 md:w-4/4 lg:w-2/3 xl:w-2/3 
        mx-auto sm:p-10 xl:p-28 bg-opacity-80 md:py-56 sm:py-24 
        sm:h-[100%] max-sm:h-[100%] md:h-[100%] 
        lg:h-[20%] xl:h-[80%] 
       max-sm:py-60 
      "
          >
            {/* Logo */}
            <div className="absolute top-6 z-40 w-[20%] left-8 lg:w-[15%] md:w-[20%] sm:w-[16%] xs:w-[20%] 2xl:w-[50%]">
              <Logo />
            </div>

            <div className="absolute inset-0 pt-40">
              <Image
                src="/images/HomeSc2.png"
                layout="fill"
                objectFit="cover"
                objectPosition="right-bottom"
                alt="Background"
                priority
              />
            </div>

            {/* Content */}
            <div
              className={`
        relative flex flex-col items-left justify-center sm:space-y-3 max-sm:mx-6 xl:space-y-5 h-full
      `}
            >
              <div className="mb-2 mt-[4%] md:mt-[10%] max-sm:mt-[8%] 2xl:mt-[8%] items-center">
                <Title
                  text="Welcome Back to Cupidco!"
                  center={true}
                  fontSize="text-xl max-sm:text-sm sm:text-xl md:text-xl lg:text-xl xl:text-3xl"
                />
              </div>
              <div className="flex flex-col gap-4 xs:gap-3 sm:gap-3 lg:gap-5 md:gap-4 xl:gap-5">
                <div className="space-y-4">
                  <TextField
                    label="Username"
                    type="text"
                    id="name"
                    width="w-full"
                    bgColor="bg-transparent"
                    height="h-1"
                    value={""}
                    name={""}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    id="password"
                    bgColor="bg-transparent"
                    height="h-1"
                    value={""}
                    name={""}
                  />
                </div>
                <div className="flex items-center justify-between sm:gap-8 font-Quicksand font-medium lg:text-sm md:text-xs">
                  <CheckboxComponent
                    name="Remember Me"
                    value="rememberMe"
                    fontColor="text-[#4D194D]"
                    isSelected={false}
                    onChange={() => {}}
                    size="sm"
                    fontSize="max-sm:text-xs"
                  />
                  <div>
                    <button
                      onClick={openForgetPasswordModal}
                      className="text-[#4D194D] text-sm focus:outline-none font-Quicksand font-medium lg:text-sm md:text-xs max-sm:text-xs"
                    >
                      Forget Password?
                    </button>
                    <ForgetPasswordModal
                      isOpen={isForgetPasswordModalOpen}
                      onClose={closeForgetPasswordModal}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center space-x-1">
                  <p className="text-sm max-sm:text-xs lg:text-xs md:text-xs font-medium font-Quicksand text-primary-purple xl:text-md">
                    By signing up you are agreeing to our
                  </p>
                  <p className="text-sm lg:text-xs md:text-xs font-Quicksand text-primary-purple font-bold max-sm:text-xs xl:text-md">
                    Privacy Policy
                  </p>
                  <p className="text-sm lg:text-xs md:text-xs font-regular font-medium font-Quicksand text-primary-purple max-sm:text-xs xl:text-md">
                    and
                  </p>
                  <p className="text-sm lg:text-xs md:text-xs font-Quicksand text-primary-purple font-bold max-sm:text-xs xl:text-md">
                    Terms of Use.
                  </p>
                </div>

                <PrimaryButton
                  label="Sign In"
                  height="py-2 xl:p-2 2xl:p-2 "
                  width="w-full"
                  radius="rounded-xl lg:rounded-md xl:rounded-lg"
                  fontSize="lg:text-md xl:text-lg max-sm:text-xs text-lg max-xs:text-sm"
                  onClick={handleSignUpClick}
                />
                <PopupwithIco
                  icon={<MdDone size={68} />}
                  title="You have successfully logged into Cupidco!"
                  primaryButtonText="Go to Dashboard"
                  isOpen={isModalOpen}
                  onPrimaryClick={() => {}}
                  onClose={() => setIsModalOpen(false)}
                />
                <div className="lg:space-y-2">
                  <div className="flex flex-col sm:flex-row justify-center items-center space-x-2">
                    <Description
                      text="Don't Have an Account?"
                      fontWeight="font-regular"
                      fontSize="text-sm max-sm:text-xs"
                      center={true}
                    />
                    <Description
                      text="Sign Up"
                      fontWeight="font-bold"
                      fontSize="text-sm max-sm:text-xs"
                      center={true}
                    />
                  </div>
                  <Description
                    text="- or -"
                    fontWeight="font-regular"
                    fontSize="text-sm max-sm:text-xs"
                    center={true}
                  />
                  <div className="flex justify-center space-x-4 sm:space-x-8 lg:space-x-4  mt-2 items-center">
                    <SocialMedia
                      network="facebook"
                      url="www.facebook.com"
                      key={1}
                      size="8"
                    />
                    <SocialMedia
                      network="instagram"
                      url="www.instagram.com"
                      key={2}
                      size="8"
                    />
                    <SocialMedia
                      network="linkedin"
                      url="www.linkedin.com"
                      key={3}
                      size="8"
                    />
                    <SocialMedia
                      network="twitter"
                      url="www.twitter.com"
                      key={4}
                      size="8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

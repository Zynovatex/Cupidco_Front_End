"use client";

import CheckboxComponent from "@/components/common/inputs/Checkbox";
import TextField from "@/components/common/inputs/Input";
import Logo from "@/components/common/logo/Logo";
import Title from "@/components/common/texts/Title";
import Image from "next/image";
import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import ForgetPasswordModal from "../forget-password/ForgetPasswordModal";
import Description from "@/components/common/texts/Description";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import PopupwithIco from "@/components/modals/PopupwithIco";
import SocialMedia from "@/components/common/social-media/SocialMedia";

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
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

  return (
    <div
      className="
        relative rounded-2xl shadow-lg overflow-hidden
        w-full max-xs:w-full sm:w-4/5 md:w-4/4 lg:w-2/3 xl:w-2/3 
        mx-auto sm:p-10 xl:p-16 bg-opacity-80 md:py-56 sm:py-24 
        sm:h-[100%] md:h-[100%] 
        lg:h-[20%] xl:h-[80%] 
        max-sm:h-[80%] max-sm:py-56 
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
          objectPosition="center"
          alt="Background"
          priority
        />
      </div>

      {/* Content */}
      <div
        className={`
        relative flex flex-col items-left justify-center sm:space-y-3 max-sm:mx-6 xl:space-y-5 h-[280px] lg:h-[400px]
      `}
      >
        <div className="mb-4 pt-[30%] lg:pt-[4%] xl:pt-[10%] 2xl:pt-[50%]">
          <Title
            text="Welcome Back to Cupidco!"
            center={true}
            fontSize="text-xl sm:text-xl md:text-xl lg:text-xl xl:text-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 xs:gap-3 sm:gap-3 lg:gap-5 md:gap-4 xl:gap-5">
          <div className="space-y-4">
            <TextField
              name=""
              value=""
              label="Username"
              type="text"
              id="name"
              width="w-full"
              bgColor="bg-transparent"
              height="lg:h-1 md:h-1"
            />
            <TextField
              name=""
              value=""
              label="Password"
              type="password"
              id="password"
              bgColor="bg-transparent"
              height="lg:h-1 md:h-1"
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
            />
            <div>
              <button
                onClick={openForgetPasswordModal}
                className="text-[#4D194D] text-sm focus:outline-none font-Quicksand font-medium lg:text-sm md:text-xs"
              >
                Forget Password?
              </button>
              <ForgetPasswordModal
                isOpen={isForgetPasswordModalOpen}
                onClose={closeForgetPasswordModal}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 ">
            <Description
              text="By signing up you are agreeing to our"
              fontWeight="font-regular"
              fontSize="text-sm lg:text-xs md:text-xs"
            />
            <Description
              text="Privacy Policy"
              fontWeight="font-bold"
              fontSize="text-sm lg:text-xs md:text-xs"
            />
            <Description
              text="and"
              fontWeight="font-regular"
              fontSize="text-sm lg:text-xs md:text-xs"
            />
            <Description
              text="Terms of Use."
              fontWeight="font-bold"
              fontSize="text-sm lg:text-xs md:text-xs"
            />
          </div>

          <PrimaryButton
            label="Sign In"
            height="py-1"
            width="w-full"
            radius="rounded-xl lg:rounded-md xl:rounded-lg"
            fontSize="lg:text-md xl:text-lg xs:text-xs text-lg max-xs:text-sm"
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
                fontSize="text-sm"
                center={true}
              />
              <Description
                text="Sign Up"
                fontWeight="font-bold"
                fontSize="text-sm"
                center={true}
              />
            </div>
            <Description
              text="- or -"
              fontWeight="font-regular"
              fontSize="text-sm"
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
  );
};

export default Login;

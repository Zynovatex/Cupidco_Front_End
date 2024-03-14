"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Title from "../texts/Title";
import Description from "../texts/Description";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "../inputs/Input";
import OtpInput from "../inputs/OtpInput";
import CheckboxComponent from "../inputs/Checkbox";
import ForgetPasswordModal from "@/app/(auth)/forget-password/ForgetPasswordModal";

interface CardProps {
  step: number;
  onStepChange: (step: number) => void;
  onCloseModal: () => void;
}

interface StepContent {
  [key: number]: JSX.Element;
}

const ForgetPassword: React.FC<CardProps> = ({
  step,
  onStepChange,
  onCloseModal,
}) => {
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(60);
  const [showResendText, setShowResendText] = useState(true);

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      onCloseModal();
    }, 500);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (resendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setResendDisabled(false);
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [resendDisabled, timer]);

  const handleResendClick = () => {
    setResendDisabled(true);
    setTimer(60);
    setShowResendText(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const stepContent: StepContent = {
    // Email || Mobile Option Select
    1: (
      <div className=" mt-8 md:mt-5 ">
        <Title
          text="Forget Your Password"
          center={true}
          fontSize="md:text-lg md:text-xl lg:text-2xl "
        />

        <div className="mt-2">
          <Description
            text="Don't worry! Choose your option below to recover your account!"
            fontSize=" text-sm md:text-md    "
          />
        </div>

        <div className="mt-3">
          <PrimaryButton
            label="Email Address"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(3)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
        </div>

        <div>
          <Title text="or" center={true} fontSize="xl:text-2xl" />
        </div>

        <div className="mt-1">
          <PrimaryButton
            label="Mobile Number"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(2)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
        </div>
      </div>
    ),
    // Mobile Number Verification Step 1
    2: (
      <div className=" mt-8 md:mt-5 ">
        <Title
          text="Mobile Number"
          center={true}
          fontSize="md:text-lg md:text-xl lg:text-2xl"
        />

        <div className="mt-1">
          <Description
            text="Enter your mobile number below! We will send you a one-time password to verify your account"
            fontSize=" text-sm md:text-md"
            fontWeight="font-medium"
          />
        </div>

        <div className="mt-3">
          <Input
            label="Mobile Number"
            type="mobilenumber"
            id="mobileNumber"
            width="w-[100%]"
            bgColor="bg-transparent"
            height=" h-3"
            value={""}
            name={""}
          />
        </div>

        <div className="mt-3">
          <PrimaryButton
            label="Next"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(2.1)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
        </div>

        <div className="text-sm md:text-md text-primary-purple ">
          <p>or</p>
          <p>
            Verify using
            <span
              className="font-semibold ml-2"
              onClick={() => onStepChange(3)}
            >
              Email Address
            </span>
          </p>
        </div>
      </div>
    ),

    // Verify OTP | Mobile Number Verification Step 2
    2.1: (
      <div className=" mt-8 md:mt-5 ">
        <Title
          text="Please Verify Your Account"
          center={true}
          fontSize="md:text-lg md:text-xl lg:text-2xl"
        />

        <div className="mt-1 flex justify-center">
          <Description
            text="Please Enter the OTP You have recieved to"
            fontSize=" text-sm md:text-md"
            fontWeight="font-medium"
          />
        </div>

        <div className="flex justify-center">
          <Description
            text="+9471456456"
            fontSize=" text-sm md:text-md"
            fontWeight="font-medium"
          />
        </div>

        <div className="mt-3 flex justify-center">
          <OtpInput
            onOtpChange={function (otp: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>

        <div className="mt-3 flex gap-2">
          <PrimaryButton
            label="Back"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(2)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
          <PrimaryButton
            label="Next"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(4)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
        </div>

        <div className="justify-center text-sm md:text-md text-primary-purple mt-2 flex">
          {showResendText && <p>Didn't Recieve OTP?</p>}
          {resendDisabled ? (
            <span className="font-semibold ml-2 ">
              Resend Done! Time Remaining : {formatTime(timer)}
            </span>
          ) : (
            <span
              className="font-semibold ml-2 cursor-pointer"
              onClick={handleResendClick}
            >
              Resend
            </span>
          )}
        </div>
      </div>
    ),

    // Email Address Verification Step 1
    3: (
      <div className=" mt-8 md:mt-5 ">
        <Title
          text="Email Address"
          center={true}
          fontSize="md:text-lg md:text-xl lg:text-2xl"
        />

        <div className="mt-1">
          <Description
            text="Enter your email address below! We will send you a one-time password to verify your account"
            fontSize=" text-sm md:text-md"
            fontWeight="font-medium"
          />
        </div>

        <div className="mt-3">
          <Input
            label="Email Address"
            type="mobilenumber"
            id="mobileNumber"
            width="w-[100%]"
            bgColor="bg-transparent"
            height=" h-3"
            value={""}
            name={""}
          />
        </div>

        <div className="mt-3">
          <PrimaryButton
            label="Next"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(3.1)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
        </div>

        <div className="text-sm md:text-md text-primary-purple ">
          <p>or</p>
          <p>
            Verify using
            <span
              className="font-semibold ml-2"
              onClick={() => onStepChange(2)}
            >
              Mobile Number
            </span>
          </p>
        </div>
      </div>
    ),
    // Verify OTP | Email Address Verification Step 2
    3.1: (
      <div className=" mt-8 md:mt-5 ">
        <Title
          text="Please Verify Your Account"
          center={true}
          fontSize="md:text-lg md:text-xl lg:text-2xl"
        />

        <div className="mt-1 flex justify-center">
          <Description
            text="Please Enter the OTP You have recieved to"
            fontSize=" text-sm md:text-md"
            fontWeight="font-medium"
          />
        </div>

        <div className="flex justify-center">
          <Description
            text="abc@gmail.com"
            fontSize=" text-sm md:text-md"
            fontWeight="font-medium"
          />
        </div>

        <div className="mt-3 flex justify-center">
          <OtpInput
            onOtpChange={function (otp: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>

        <div className="mt-3 flex gap-2">
          <PrimaryButton
            label="Back"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(4)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
          <PrimaryButton
            label="Next"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(4)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
        </div>

        <div className="justify-center text-sm md:text-md text-primary-purple mt-2 flex">
          {showResendText && <p>Didn't Recieve OTP?</p>}
          {resendDisabled ? (
            <span className="font-semibold ml-2 ">
              Resend Done! Time Remaining : {formatTime(timer)}
            </span>
          ) : (
            <span
              className="font-semibold ml-2 cursor-pointer"
              onClick={handleResendClick}
            >
              Resend
            </span>
          )}
        </div>
      </div>
    ),
    // Resend OTP | Email Address Verification Step 3
    3.2: (
      <div className="pt-4 md:pt-8 flex flex-col items-center justify-center h-screen space-y-4 xl:space-y-4">
        <Title
          text="Please Verify Your Account"
          center={true}
          fontSize="xl:text-3xl sm:text-xl lg:text-2xl md:text-2xl lg:pt-4 pt-6 max-sm:text-sm"
        />
        <div className="justify-center items-center flex flex-col">
          <Description
            text="Please Enter the OTP You have recieved to"
            fontSize="xl:text-xl max-sm:text-xs max-sm:text-center"
            fontWeight="font-medium"
          />
          <Description
            text="abc@gmail.com"
            fontSize="xl:text-xl max-sm:text-xs text-center"
            fontWeight="font-medium"
          />
        </div>
        <div>
          <OtpInput
            onOtpChange={function (otp: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
        <PrimaryButton
          label="Next"
          height="p-2 lg:p-2 max-sm:p-1 xl:p-3"
          textColor="text-white"
          width="w-[64%]"
          onClick={() => onStepChange(4)}
          fontSize="
            text-lg
            max-sm:text-sm
            md:text-md 
            lg:text-lg
            xl:text-xl"
          radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
        />
        <div className="text-center font-Quicksand">
          {showResendText && (
            <span className="text-base font-regular max-sm:text-xs xl:text-xl">
              Didn't Receive OTP?{" "}
            </span>
          )}
          {resendDisabled ? (
            <span className="text-base font-medium max-sm:text-xs xl:text-xl">
              Resend Done! Time Remaining : {formatTime(timer)}
            </span>
          ) : (
            <button
              className="text-base font-medium max-sm:text-xs xl:text-xl"
              onClick={handleResendClick}
            >
              Resend
            </button>
          )}
        </div>
      </div>
    ),
    // Account Veriification
    4: (
      <div className=" mt-8 md:mt-5 ">
        <Title
          text="Account Verified!"
          center={true}
          fontSize="md:text-lg md:text-xl lg:text-2xl"
        />

        <div className="mt-1 flex justify-center">
          <Description
            text="Set your new password here!"
            fontSize=" text-sm md:text-md"
            fontWeight="font-medium"
          />
        </div>

        <div className="mt-3 ">
          <Input
            label="New Password"
            type="password"
            id="newpassword"
            width="w-[100%]"
            bgColor="bg-transparent"
            height=" h-3"
            value={""}
            name={""}
          />
        </div>

        <div className="mt-3 ">
          <Input
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            width="w-[100%]"
            bgColor="bg-transparent"
            height=" h-3"
            value={""}
            name={""}
          />
        </div>
        <div className=" mt-3">
          <CheckboxComponent
            name="Remember me"
            value="Remember me"
            fontColor="font-Quicksand"
            size="sm"
            fontSize="max-sm:text-sm"
          />
        </div>

        <div className="mt-3 ">
          <PrimaryButton
            label="Change Password"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(5)}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />
        </div>
      </div>
    ),
    5: (
      <div className=" mt-8 md:mt-8 ">
        <Title
          text="Your Password has been Changed Succssfully!"
          center={true}
          fontSize="md:text-lg md:text-xl lg:text-2xl"
        />

        <div className="mt-3 ">
          <PrimaryButton
            label="Login"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={closeModal}
            fontSize="
         "
            radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
          />

          {isModalOpen && (
            <ForgetPasswordModal onClose={closeModal} isOpen={isModalOpen} />
          )}
        </div>
      </div>
    ),
  };

  const contentHeight = "";

  return (
    <div
      className="
        relative rounded-2xl  overflow-hidden px-3 py-10 md:p-10 bg-opacity-80 "
    >
      {/* Logo */}
      <div
        className="
        absolute top-4 left-6 z-20 "
      >
        <Image src={"/images/logo.png"} width={120} height={120} alt="Logo" />
      </div>

      <div className="absolute inset-0 z-0">
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
        relative z-10 flex   justify-center 
        ${contentHeight}
      `}
      >
        {stepContent[step] || <p>Step not found</p>}
      </div>
    </div>
  );
};

export default ForgetPassword;

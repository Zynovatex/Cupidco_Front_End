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
      <div className="max-sm:pt-2 pt-4 max-sm:space-y-3 sm:space-y-3 md:space-y-4 lg:space-y-4 xl:space-y-5">
        <Title
          text="Forget Your Password"
          center={true}
          fontSize="max-sm:text-sm sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl max-sm:text-center"
        />
        <Description
          text="Don't worry! Choose your option below to recover your account!"
          fontSize="xl:text-xl max-sm:text-xs"
        />
        <PrimaryButton
          label="Email Address"
          height="p-2 lg:p-2 max-sm:p-1 xl:p-3"
          width="w-full"
          textColor="text-white"
          onClick={() => onStepChange(3)}
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
        <Title text="or" center={true} fontSize="xl:text-2xl" />
        <PrimaryButton
          label="Mobile Number"
          height="p-2 lg:p-2 max-sm:p-1 xl:p-3"
          textColor="text-white"
          width="w-full"
          onClick={() => onStepChange(2)}
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
      </div>
    ),
    // Mobile Number Verification Step 1
    2: (
      <div className="max-sm:pt-6 pt-4 max-sm:space-y-2 sm:space-y-4 md:space-y-4 lg:space-y-4 xl:space-y-5">
        <Title
          text="Mobile Number"
          center={true}
          fontSize="xl:text-3xl lg:text-2xl sm:text-xl"
        />
        <Description
          text="Enter your mobile number below! We will send you a one-time password to verify your account"
          fontSize="max-sm:text-xs xl:text-xl sm:text-sm"
          fontWeight="font-medium"
        />
        <Input
          label="Mobile Number"
          type="mobilenumber"
          id="mobileNumber"
          width="w-[100%]"
          bgColor="bg-transparent"
          height="max-sm:h-2 sm:h-2 xl:h-14"
          value={""}
          name={""}
        />
        <PrimaryButton
          label="Next"
          height="p-2 lg:p-2 max-sm:p-1 xl:p-3"
          textColor="text-white"
          width="w-full"
          onClick={() => onStepChange(2.1)}
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
        <div className="text-center font-Quicksand ">
          <span className="text-base max-sm:text-xs sm:text-sm md:text-md lg-text=lg xl:text-lg 2xl:text-xl">
            or{" "}
          </span>
          <button
            className="text-base font-regular max-sm:text-xs sm:text-sm md:text-md lg-text=lg xl:text-lg 2xl:text-xl"
            onClick={() => onStepChange(3)}
          >
            Verify using{" "}
            <span className="font-semibold text-primary-purple sm:text-sm md:text-md lg-text=lg xl:text-lg 2xl:text-xl">
              Email Address
            </span>
          </button>
        </div>
      </div>
    ),
    // Verify OTP | Mobile Number Verification Step 2
    2.1: (
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
            text="+9476 1234567"
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
          <span className="text-base font-regular max-sm:text-xs xl:text-xl">
            Didn't Recieve OTP?{" "}
          </span>
          <button
            className="text-base font-medium max-sm:text-xs xl:text-xl"
            onClick={() => onStepChange(2.2)}
          >
            Resend
          </button>
        </div>
      </div>
    ),
    // Resend OTP | Mobile Number Verification Step 3
    2.2: (
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
            text="+9476 1234567"
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
    // Email Address Verification Step 1
    3: (
      <div className="max-sm:pt-6 pt-4 max-sm:space-y-2 sm:space-y-4 md:space-y-4 lg:space-y-4 xl:space-y-5">
        <Title
          text="Email Address"
          center={true}
          fontSize="xl:text-3xl lg:text-2xl sm:text-xl"
        />
        <Description
          text="Enter your email address below! We will send you a one-time password to verify your account"
          fontSize="max-sm:text-xs xl:text-xl sm:text-sm"
          fontWeight="font-medium"
        />
        <Input
          label="Email Address"
          type="email"
          id="emailaddress"
          width="w-[100%]"
          bgColor="bg-transparent"
          height="max-sm:h-2 sm:h-2 xl:h-14"
          fontSizeLabel="xl:text-xl"
          value={""}
          name={""}
        />
        <PrimaryButton
          label="Next"
          height="p-2 lg:p-2 max-sm:p-1 xl:p-3"
          textColor="text-white"
          width="w-full"
          onClick={() => onStepChange(3.1)}
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
          <span className="text-base max-sm:text-xs sm:text-sm md:text-md lg-text=lg xl:text-lg 2xl:text-xl">
            or{" "}
          </span>
          <button
            className="text-base font-regular max-sm:text-xs sm:text-sm md:text-md lg-text=lg xl:text-lg 2xl:text-xl"
            onClick={() => onStepChange(2)}
          >
            Verify using{" "}
            <span className="font-semibold text-primary-purple sm:text-sm md:text-md lg-text=lg xl:text-lg 2xl:text-xl">
              Mobile Number
            </span>
          </button>
        </div>
      </div>
    ),
    // Verify OTP | Email Address Verification Step 2
    3.1: (
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
          <span className="text-base font-regular max-sm:text-xs xl:text-xl">
            Didn't Recieve OTP?{" "}
          </span>
          <button
            className="text-base font-medium max-sm:text-xs xl:text-xl"
            onClick={() => onStepChange(3.2)}
          >
            Resend
          </button>
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
      <div className="pt-6 flex flex-col space-y-4 max-sm:space-y-2">
        <Title
          text="Account Verified!"
          center={true}
          fontSize="xl:text-3xl lg:text-2xl sm:text-2xl max-sm:text-sm"
        />
        <Description
          text="Set your new password here!"
          fontSize="xl:text-xl max-sm:text-xs"
          fontWeight="font-medium"
        />
        <Input
          label="New Password"
          type="password"
          id="newpassword"
          width="w-[100%]"
          bgColor="bg-transparent"
          height="max-sm:h-2 sm:h-2 xl:h-14"
          value={""}
          name={""}
        />
        <Input
          label="Confirm Password"
          type="password"
          id="confirmpassword"
          width="w-[100%]"
          bgColor="bg-transparent"
          height="max-sm:h-2 sm:h-2 xl:h-14"
          value={""}
          name={""}
        />
        <PrimaryButton
          label="Change Password"
          height="p-2 lg:p-2 max-sm:p-1 xl:p-3"
          textColor="text-white"
          width="w-full"
          onClick={() => onStepChange(5)}
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
        <div className="flex justify-center">
          <CheckboxComponent
            name="Remember me"
            value="Remember me"
            fontColor="font-Quicksand"
            size="sm"
            fontSize="max-sm:text-sm"
          />
        </div>
      </div>
    ),
    5: (
      <div className="pt-4 md:pt-8 flex flex-col items-center justify-center h-screen space-y-4 xl:space-y-12 text-center">
        <Title
          text="Your Password has been Changed Succssfully!"
          center={true}
          fontSize="xl:text-5xl sm:text-xl lg:text-2xl md:text-2xl lg:pt-4 pt-6 max-sm:text-sm"
        />
        <PrimaryButton
          label="Login"
          height="p-2 lg:p-2 max-sm:p-1 xl:p-3"
          textColor="text-white"
          width="w-[64%]"
          onClick={closeModal}
          fontSize="
            text-lg
            max-sm:text-sm
            md:text-md 
            lg:text-lg
            xl:text-2xl"
          radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
        />
        {isModalOpen && (
          <ForgetPasswordModal onClose={closeModal} isOpen={isModalOpen} />
        )}
      </div>
    ),
  };

  const contentHeight = "h-[280px]";

  return (
    <div
      className="
        relative rounded-2xl shadow-lg overflow-hidden
        w-full sm:w-4/5 md:w-4/4 lg:w-1.5/2 xl:w-2/3 max-sm:w-5/5
        mx-auto xl:p-16 sm:p-10 bg-opacity-80 max-sm:h-[10%]
        sm:min-h-0 sm:h-auto
      "
    >
      {/* Logo */}
      <div
        className="
        absolute top-6 left-6 z-20 md:w-[20%] max-sm:w-[25%] sm:w-[20%]"
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
        relative z-10 flex flex-col items-left justify-center 
       sm:space-y-3 max-sm:mx-6 xl:space-y-5 ${contentHeight}
      `}
      >
        {stepContent[step] || <p>Step not found</p>}
      </div>
    </div>
  );
};

export default ForgetPassword;

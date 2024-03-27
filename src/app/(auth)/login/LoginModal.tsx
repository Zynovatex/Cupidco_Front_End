'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoArrowBackCircleOutline, IoCloseCircle } from "react-icons/io5";
import Logo from "@/components/common/logo/Logo";
import Title from "@/components/common/texts/Title";
import SocialMedia from "@/components/common/social-media/SocialMedia";
import Description from "@/components/common/texts/Description";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import CheckboxComponent from "@/components/common/inputs/Checkbox";
import { login } from "@/app/api/auth";
import Register from "../register/Register";
import OtpInput from "@/components/common/inputs/OtpInput";
import InputField from "@/components/common/inputs/InputField";
import { GoEye } from "react-icons/go";
import { FiEyeOff } from "react-icons/fi";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(60);
  const [showResendText, setShowResendText] = useState(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
      setStep(1);
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

  const handleBgClick = () => {
    startClosing();
  };

  const openRegister = () => {
    setIsClosing(true);
    setIsRegisterOpen(true);
  };

  const closeModal = () => {
    setIsRegisterOpen(false);
  };

  const handleFormClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const modalAnimation = isClosing ? "animate-slideDown" : "animate-slideUp";

  if (!isOpen && !isClosing) return null;

  const onStepChange = (stepNumber: number) => {
    setStep(stepNumber);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  // user login
  const handleSubmit = async () => {
    try {
      const response = await login({ email: username, password });
      console.log(response);

      if (response.status === "success") {
        localStorage.setItem("token", response.message);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePreviousStep = () => {
    const previousStep = step - 1;
    onStepChange(previousStep);
  };

  const stepTitles: string[] = [
    "",
    "Welcome To Cupidco",
    "Forgot Your Password",
  ];

  const stepContent: { [key: number]: JSX.Element } = {
    1: (
      <div className="mt-5 w-full transition-all duration-1000 translate-y-0 ease-linear">
        {/* user name  */}
        <InputField
          label="Username"
          type="text"
          id="name"
          name={"username"}
          value={username}
          onChange={handleUsernameChange}
        />

        {/* password  */}
        <div className="mt-5">
          <InputField
            name="Password"
            label="Password"
            type={passwordVisible ? "text" : "password"}
            id="Password"
            width="w-full"
            onChange={handlePasswordChange}
            backicon={passwordVisible ? (
              <GoEye
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              />
            ) : (
              <FiEyeOff
                onClick={togglePasswordVisibility}
                className="cursor-pointer"
              />
            )}
          />
        </div>

        {/* checkbox  */}
        <div className="mt-5 flex justify-between">
          <CheckboxComponent
            secondName="Remember Me"
            value="rememberMe"
            fontColor="text-[#4D194D]"
            isSelected={false}
            onChange={() => { }}
            fontSize=" md:text-md sm:text-sm text-xs" name={""} />

          <div>
            <div
              className="text-primary-purple md:text-md mt-[1px] md:text-sm text-xs cursor-pointer"
              onClick={() => onStepChange(2)}>
              Forgot Password
            </div>
          </div>
        </div>

        <div className="mt-5">
          <PrimaryButton
            label="Sign In"
            height="py-2 xl:p-2 2xl:p-2 "
            width="w-full"
            radius="rounded-xl lg:rounded-md xl:rounded-lg"
            fontSize="lg:text-md xl:text-lg max-sm:text-xs text-lg max-xs:text-sm"
            onClick={handleSubmit}
          />
        </div>

        <div className="flex gap-2 justify-center mt-4">
          <Description
            text="Don't Have an Account?"
            fontWeight="font-regular"
            fontSize="text-sm max-sm:text-xs"
            center={true}
          />
          <div onClick={openRegister} className="cursor-pointer">
            <Description
              text=" Sign Up"
              fontWeight="font-bold"
              fontSize="text-sm max-sm:text-xs"
              center={true}
            />
          </div>
        </div>

        <div>
          <Description
            text="- or -"
            fontWeight="font-regular"
            fontSize="text-sm max-sm:text-xs"
            center={true}
          />
        </div>

        {/* social media  */}
        <div className="flex gap-3 justify-center mt-3">
          <SocialMedia
            network="google"
            url="www.linkedin.com"
            key={3}
            size="6"
          />
          <SocialMedia
            network="twitter"
            url="www.twitter.com"
            key={4}
            size="6"
          />
          <SocialMedia
            network="facebook"
            url="www.facebook.com"
            key={3}
            size="6"
          />
          <SocialMedia
            network="tiktok"
            url="www.tiktok.com"
            key={4}
            size="6"
          />
        </div>
      </div>
    ),

    2: (
      <div className="transition-all duration-1000 translate-y-0 ease-in-out">
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
            onClick={() => onStepChange(4)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-lg"
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
            onClick={() => onStepChange(3)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-lg"
          />
        </div>
      </div>
    ),
    // Mobile Number Verification Step 1
    3: (
      <div className="transition-all duration-1000 translate-y-1 ease-in">
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
          <InputField
            label="Mobile Number"
            type="mobilenumber"
            id="mobileNumber"
            width="w-[100%]"
            value={""}
            name={"number"}
          />
        </div>

        <div className="mt-5 flex gap-2">
          <PrimaryButton
            label="Back"
            height="py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(2)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
          <PrimaryButton
            label="Next"
            height="py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(3.1)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
        </div>

        <div className="text-sm md:text-md text-primary-purple ">
          <p>or</p>
          <p>
            Verify using
            <span
              className="font-semibold ml-2 cursor-pointer"
              onClick={() => onStepChange(4)}
            >
              Email Address
            </span>
          </p>
        </div>
      </div>
    ),

    // Verify OTP | Mobile Number Verification Step 2
    3.1: (
      <div className="transition-all duration-1000 translate-y-0 ease-in-out">
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
            onOtpChange={() => { }}
          />
        </div>

        <div className="mt-3 flex gap-2">
          <PrimaryButton
            label="Back"
            height="py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(3)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
          <PrimaryButton
            label="Next"
            height="py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(5)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
        </div>

        <div className="justify-center text-sm md:text-md text-primary-purple mt-2 flex">
          {showResendText && <p>Did not Recieve OTP?</p>}
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
    4: (
      <div className="transition-all duration-1000 translate-y-1 ease-linear">
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
          <InputField id="email" label="Email Address" name="mail" type="text" />
        </div>

        <div className="mt-5 flex gap-2">
          <PrimaryButton
            label="Back"
            height="py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(2)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
          <PrimaryButton
            label="Next"
            height="py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(4.1)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
        </div>

        <div className="text-sm md:text-md text-primary-purple ">
          <p>or</p>
          <p>
            Verify using
            <span
              className="font-semibold ml-2 cursor-pointer"
              onClick={() => onStepChange(3)}>
              Mobile Number
            </span>
          </p>
        </div>
      </div>
    ),
    // Verify OTP | Email Address Verification Step 2
    4.1: (
      <div className="transition-all duration-1000 translate-y-0 ease-in-out">
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
            onOtpChange={() => { }}
          />
        </div>

        <div className="mt-3 flex gap-2">
          <PrimaryButton
            label="Back"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(4)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
          <PrimaryButton
            label="Next"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(5)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
        </div>

        <div className="justify-center text-sm md:text-md text-primary-purple mt-2 flex">
          {showResendText && <p>Did not Receive OTP?</p>}
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
    4.2: (
      <div className="pt-4 md:pt-8 flex flex-col items-center justify-center space-y-4 xl:space-y-4  transition-all duration-1000 translate-y-0 ease-in-out">
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
            onOtpChange={() => { }}
          />
        </div>
        <PrimaryButton
          label="Next"
          height="py-2"
          textColor="text-white"
          width="w-[64%]"
          onClick={() => onStepChange(4)}
          fontSize="text-md"
          radius="
            rounded-xl
            max-sm:rounded-lg
            lg:rounded-xl"
        />
        <div className="text-center font-Quicksand">
          {showResendText && (
            <span className="text-base font-regular max-sm:text-xs xl:text-xl">
              Did not Receive OTP?{" "}
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
    // Account Verification
    5: (
      <div className="w-full transition-all duration-1000 translate-y-1 ease-linear">
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

        <div className="mt-3">
          <InputField id="password" label="password" name="password" type="password" />
        </div>

        <div className="mt-5 ">
          <InputField id="password" label="Confirm password" name="password" type="password" />
        </div>

        <div className="mt-5">
          <PrimaryButton
            label="Change Password"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(6)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
          />
        </div>
        {/* checkbox  */}
        <div className="mt-5 flex justify-center">
          <CheckboxComponent
            secondName="Remember This Device"
            value="rememberMe"
            fontColor="text-[#4D194D]"
            isSelected={false}
            onChange={() => { }}
            fontSize=" md:text-md sm:text-sm text-xs" name={""} />
        </div>
      </div>
    ),
    6: (
      <div className="mt-1 transition-all duration-1000 translate-y-0 ease-in-out">
        <Title
          text="Your Password has been Changed Successfully!"
          center={true}
          fontSize="md:text-lg md:text-xl lg:text-2xl"
        />

        <div className="mt-5 ">
          <PrimaryButton
            label="Login"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
            fontSize="text-md"
            onClick={() => onStepChange(1)}
          />
        </div>
      </div>
    ),
    // Add more steps as needed
  };

  return (
    <>
      {(isOpen || isClosing) && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-500 flex justify-center items-center py-5 ${isOpen || isClosing ? "opacity-100" : "opacity-0"
            }`}
          onClick={handleBgClick}
        >
          <div
            className={`relative md:rounded-2xl w-[100%] md:w-[70%] h-[100%] md:h-[90%] bg-transparent ${modalAnimation} transition-all duration-500 flex justify-center xl:justify-end md:px-10 px-0`}
            onClick={handleFormClick}>

            {/* bg image  */}
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

            {/* close button  */}
            <button
              onClick={startClosing}
              className="absolute top-[-8px] right-[-9px] m-4 z-10 text-secondary-color"
              aria-label="Close modal"
            >
              <IoCloseCircle size="2em" />
            </button>

            {/* login container  */}
            <div className="w-[90%] text-center xl:w-[50%] relative h-auto py-5 md:px-5 px-0 transition-all duration-[5000] translate-y-card ease-in-out">
              {/* bg image  */}
              <div className="w-auto p-10 rounded-lg" style={{ backgroundImage: "url(/images/DefaultBg.png)" }}>

                <div className="relative">
                  {/* Logo */}
                  <div className="w-28">
                    <Logo />
                  </div>

                  <div className="flex gap-5 items-center justify-center w-full">
                    {step === 2 && (
                      <button
                        onClick={handlePreviousStep}
                        className="text-primary-purple"
                        aria-label="Go back"
                      >
                        <IoArrowBackCircleOutline size="2em" />
                      </button>
                    )}
                    {/* title  */}
                    <div>
                      <Title
                        text={stepTitles[step]}
                        center={true}
                        fontSize="text-xl md:text-2xl"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`relative justify-center transition-all duration-[5000] translate-y-card ease-in-out`}>
                    {/* Render step content based on current step */}
                    {stepContent[step] || <p>Step not found</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isRegisterOpen && (
        <Register
          isOpen={isRegisterOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default LoginModal;

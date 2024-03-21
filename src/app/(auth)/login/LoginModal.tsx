import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import Logo from "@/components/common/logo/Logo";
import Title from "@/components/common/texts/Title";
import TextField from "@/components/common/inputs/Input";
import SocialMedia from "@/components/common/social-media/SocialMedia";
import Description from "@/components/common/texts/Description";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import CheckboxComponent from "@/components/common/inputs/Checkbox";
import OtpInput from "@/components/common/inputs/OtpInput";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [step, setStep] = useState<number>(1);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(60);
  const [showResendText, setShowResendText] = useState(true);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
      // Reset step to 1 when modal is closed
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

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      startClosing();
    }
  };

  const modalAnimation = isClosing ? "animate-slideDown" : "animate-slideUp";

  if (!isOpen && !isClosing) return null;

  const onStepChange = (stepNumber: number) => {
    setStep(stepNumber);
  };

  const stepContent: { [key: number]: JSX.Element } = {
    1: (
      <div className="mt-5 w-[80%] mx-[10%] md:w-[70%] md:mx-[15%]">
        {/* user name  */}
        <TextField
          label="Username"
          type="text"
          id="name"
          width="w-full"
          bgColor="bg-transparent"
          height="h-1"
          name={""}
        />

        {/* password  */}
        <div className="mt-5">
          <TextField
            label="Password"
            id="password"
            bgColor="bg-transparent"
            height="h-1"
            name={""}
          />
        </div>

        {/* checkbox  */}
        <div className="mt-5 flex justify-between">
          <CheckboxComponent
            name="Remember Me"
            value="rememberMe"
            fontColor="text-[#4D194D]"
            isSelected={false}
            onChange={() => {}}
            fontSize=" md:text-md sm:text-sm text-xs"
          />

          <div>
            <div
              className="text-primary-purple md:text-md mt-[1px] md:text-sm text-xs cursor-pointer"
              onClick={() => onStepChange(2)}
            >
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
          />
        </div>

        <div className="flex gap-2 justify-center mt-4">
          <Description
            text="Don't Have an Account?"
            fontWeight="font-regular"
            fontSize="text-sm max-sm:text-xs"
            center={true}
          />
          <Description
            text=" Sign Up"
            fontWeight="font-bold"
            fontSize="text-sm max-sm:text-xs"
            center={true}
          />
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
    ),

    2: (
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
            onClick={() => onStepChange(4)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
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
          />
        </div>
      </div>
    ),

    // Mobile Number Verification Step 1
    3: (
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
          <TextField
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
            onClick={() => onStepChange(3.1)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
          />
        </div>

        <div className="text-sm md:text-md text-primary-purple ">
          <p>or</p>
          <p>
            Verify using
            <span
              className="font-semibold ml-2"
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
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
          />
          <PrimaryButton
            label="Next"
            height=" py-2"
            width="w-full"
            textColor="text-white"
            onClick={() => onStepChange(4)}
            radius="rounded-xl max-sm:rounded-lg lg:rounded-xl"
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
          <TextField
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
    4.1: (
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
            onClick={() => onStepChange(3)}
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
    // Resend OTP | Email Address Verification Step 3
    4.2: (
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
    // Account Veriification
    5: (
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
          <TextField
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
          <TextField
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
    6: (
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
    // Add more steps as needed
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-[#FFB4A2] bg-opacity-30 transition-opacity duration-500 flex justify-center items-center ${
          isOpen || isClosing ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBgClick}
      >
        <div
          className={`relative rounded-2xl w-[95%] md:w-[70%] h-[90%] md:h-[90%] bg-transparent ${modalAnimation}  transition-all overflow-hidden duration-500 flex justify-center lg:justify-end  items-center`}
        >
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
          <div className="w-[90%] text-center lg:w-[50%] relative h-[90%] lg:mr-10 max-md:mt-5 py-5 px-5 ">
            {/* bg image  */}
            <div className="absolute inset-0 pt-40 ">
              <Image
                src="/images/HomeSc2.png"
                layout="fill"
                objectFit="cover"
                objectPosition="right-bottom"
                alt="Background"
                priority
                className="rounded-lg"
              />
            </div>

            <div className="relative">
              {/* Logo */}
              <div className=" w-28 mb-3 ">
                <Logo />
              </div>

              {/* title  */}
              <div>
                <Title
                  text="Welcome Back  to Cupidco!"
                  center={true}
                  fontSize="text-xl md:text-2xl "
                />
              </div>
              {/* Content */}
              <div
                className={`
                  relative z-10 flex   justify-center 
                `}
              >
                {/* Render step content based on current step */}
                {stepContent[step] || <p>Step not found</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

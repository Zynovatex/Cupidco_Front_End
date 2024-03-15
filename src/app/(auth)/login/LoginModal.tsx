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
import Link from "next/link";

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

  const handlePrivacyPolicyClick = () => {
    startClosing();
    // Here you can navigate to the privacy policy page
    // using next/router or any navigation library you're using.
    // For example, if you're using Next.js router:
    // import { useRouter } from "next/router";
    // const router = useRouter();
    // router.push("/privacy-policy");
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
          className={`relative rounded-2xl 
          w-[95%] 
          md:w-[70%] 
          h-[90%]
          md:h-[90%] 
          bg-transparent ${modalAnimation}  transition-all overflow-hidden duration-500 flex justify-center lg:justify-end  items-center`}
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

              {/* inputs  */}
              <div className="mt-5 w-[80%] mx-[10%] md:w-[70%] md:mx-[15%]">
                {/* user name  */}
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

                {/* password  */}
                <div className="mt-5">
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
                      onClick={openForgetPasswordModal}
                      className="text-primary-purple md:text-md mt-[1px] md:text-sm text-xs cursor-pointer"
                    >
                      Forget Password
                    </div>

                    <ForgetPasswordModal
                      isOpen={isForgetPasswordModalOpen}
                      onClose={closeForgetPasswordModal}
                    />
                  </div>
                </div>

                {/* texts  */}
                <div className="text-justify text-xs text-primary-purple mt-4 ">
                  <span> By signing up you are agreeing to our </span>
                  <Link href="/privacy-policy">
                    <span
                      className="font-bold text-primary-purple cursor-pointer"
                      onClick={handlePrivacyPolicyClick}
                    >
                      Privacy Policy
                    </span>
                  </Link>
                  <span> and </span>
                  <span className="font-bold"> Terms of Use.</span>
                </div>

                <div className="mt-5">
                  <PrimaryButton
                    label="Sign In"
                    height="py-2 xl:p-2 2xl:p-2 "
                    width="w-full"
                    radius="rounded-xl lg:rounded-md xl:rounded-lg"
                    fontSize="lg:text-md xl:text-lg max-sm:text-xs text-lg max-xs:text-sm"
                    onClick={handleSignUpClick}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;

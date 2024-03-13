import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import TextField from "@/components/common/inputs/Input";
import RadioButton from "@/components/common/inputs/RadioButton";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import LoginModal from "../login/LoginModal";
import { IoCloseCircle } from "react-icons/io5";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // radio button function
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | undefined;
  }>({});
  const handleOptionChange = (groupName: string, value: string) => {
    setSelectedOptions({ ...selectedOptions, [groupName]: value });
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phoneNumber: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://65e02f84d3db23f762488898.mockapi.io/api/v1/cupidco/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        console.log("Data posted successfully!");
      } else {
        console.error("Failed to post data:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => enableScroll();
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
        className={`fixed inset-0 bg-[#FFB4A2] bg-opacity-50 z-50 transition-opacity duration-500 flex justify-center items-center ${
          isOpen || isClosing ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBgClick}
      >
        <div
          className={`relative rounded-2xl 
                    w-[80%] 
                    max-xs:w-[96%] 
                    max-w-7xl 
                    lg:w-[80%] 
                    sm:w-[80%] 
                    xl:w-[60%] 
                    lg:h-[90%]
                    xl:h-[90%] 
                    h-auto 
                    md:py-36
                    max-sm:px-6
                    py-52 sm:py-24 lg:py-2 
                    mx-auto max-sm:h-[90%] 
                    sm:h-[90%] md:h-[90%] 
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
          <div className="relative rounded-2xl shadow-lg overflow-hidden w-full max-xs:w-full sm:w-4/5 md:w-4/4 lg:w-2/3 xl:w-2/3 sm:p-10 xl:p-16 bg-opacity-80 lg:py-[2%] md:py-[2%]">
            {/* Background Image */}
            <div>
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
              className={`relative flex flex-col items-center justify-center sm:space-y-3 h-[10%] max-sm:m-4 xl:space-y-2 
        md:h-[10%] lg:h-[10%] xs:h-[10%] xl:h-[98%]`}
            >
              <div className="mb-3">
                <Title
                  text="Welcome to Cupidco!"
                  center={true}
                  fontSize="text-xl max-xs:text-md xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
                />
              </div>

              {/* Text Fields */}
              <div className="flex flex-col gap-2 xs:gap-1 sm:gap-1 lg:gap-2 md:gap-2 xl:gap-2">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <TextField
                      value={userData.firstName}
                      onChange={handleChange}
                      name="firstName"
                      label="First Name"
                      type="text"
                      id="firstName"
                      width="w-full"
                      bgColor="bg-transparent"
                      height="h-1"
                    />
                    <TextField
                      value={userData.lastName}
                      onChange={handleChange}
                      name="lastName"
                      label="Last Name"
                      type="text"
                      id="lastName"
                      width="w-full"
                      bgColor="bg-transparent"
                      height="h-1"
                    />
                  </div>
                  <TextField
                    value={userData.dob}
                    onChange={handleChange}
                    name="dob"
                    label="Date of birth"
                    type="text"
                    id="dob"
                    width="w-full"
                    bgColor="bg-transparent"
                    height="h-1 "
                  />
                  <TextField
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleChange}
                    label="Phone Number"
                    type="Number"
                    id="phoneNumber"
                    width="w-full"
                    bgColor="bg-transparent"
                    height="h-1 "
                  />
                  <TextField
                    value={userData.email}
                    onChange={handleChange}
                    name="email"
                    label="Email"
                    type="email"
                    id="mail"
                    width="w-full"
                    bgColor="bg-transparent"
                    height="h-1 "
                  />
                  <TextField
                    value={userData.password}
                    onChange={handleChange}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    width="w-full"
                    bgColor="bg-transparent"
                    height="h-1 "
                  />
                  <div className="flex flex-row md:gap-4 gap-2">
                    <Description
                      text="Gender : "
                      fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                    />
                    <RadioButton
                      groupName="Gender"
                      name="Male"
                      value="Male"
                      isSelected={selectedOptions["Gender"] === "Male"}
                      onChange={handleOptionChange}
                      fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                    />
                    <RadioButton
                      groupName="Gender"
                      name="Female"
                      value="Female"
                      isSelected={selectedOptions["Gender"] === "Female"}
                      onChange={handleOptionChange}
                      fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                    />
                    <RadioButton
                      groupName="Gender"
                      name="Other"
                      value="Other"
                      isSelected={selectedOptions["Gender"] === "Other"}
                      onChange={handleOptionChange}
                      fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between sm:gap-8 font-Quicksand xs:text-xs sm:text-xs lg:text-sm xl:text-lg md:text-xs max-xs:text-xs"></div>
                <div className="space-x-1 font-Quicksand">
                  <span className="text-sm xs:text-xs lg:text-xs md:text-xs xl:text-sm font-medium max-xs:text-xs">
                    By signing up you are agreeing to our
                  </span>
                  <a
                    href="/privacy-policy"
                    className="text-sm max-xs:text-xs xs:text-xs lg:text-xs md:text-xs xl:text-sm font-bold"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-sm max-xs:text-xs xs:text-xs lg:text-xs md:text-xs xl:text-sm font-medium">
                    and
                  </span>
                  <a
                    href="/terms-of-use"
                    className="text-sm max-xs:text-xs xs:text-xs lg:text-xs md:text-xs xl:text-sm font-bold"
                  >
                    Terms of Use.
                  </a>
                </div>

                <PrimaryButton
                  label="Sign In"
                  height="py-1 xl:py-2"
                  width="w-full"
                  radius="rounded-xl lg:rounded-md xl:rounded-lg"
                  fontSize="lg:text-md xl:text-lg xs:text-xs text-lg max-xs:text-sm"
                  onClick={handleSubmit}
                />
                <LoginModal
                  isOpen={isLoginModalOpen}
                  onClose={toggleLoginModal}
                />
                <div className="lg:space-y-2 xl:space-y-3 font-Quicksand">
                  <div className="flex justify-center items-center space-x-2">
                    <span className="max-xs:text-xs xl:text-lg sm:text-xs xs:text-xs text-lg font-regular">
                      Have an Account?
                    </span>
                    <span className=" max-xs:text-xs xl:text-lg sm:text-xs xs:text-xs text-lg font-bold">
                      Sign In
                    </span>
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

export default RegisterModal;

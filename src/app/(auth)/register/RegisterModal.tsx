import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import { GoEye } from "react-icons/go";
import { FiEyeOff } from "react-icons/fi";
import RadioButton from "@/components/common/inputs/RadioButton";
import TextField2 from "@/components/common/inputs/TextField2";
import { register } from "@/app/api/auth";
import TextField from "@/components/common/inputs/TextField";

interface RegisterProps {
  isOpen: boolean;
  onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: "",
  });
  const [passwordError, setPasswordError] = useState("");

 //  user registration
  const handleRegisterUser = async () => {
    try {
      if (password1 !== password2) {
        setPasswordError("Passwords do not match");
        return;
      } else {
        setPasswordError(""); // Resetting error message when passwords match
      }

      const response = await register(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  const handleGenderChange = (gender: string) => {
    setFormData({ ...formData, gender }); // Update formData with selected gender
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1((prev) => !prev);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2((prev) => !prev);
  };

  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | undefined;
  }>({});

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOptionChange = (groupName: string, value: string) => {
    setSelectedOptions({ ...selectedOptions, [groupName]: value });
  };

  const handleSignUpClick = () => {
    setIsModalOpen(true);
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
          className={`relative md:rounded-2xl w-[100%] md:w-[70%] h-[100%] md:h-[90%] bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500 flex justify-center lg:justify-end  items-center`}
        >
          {/* bg image  */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ForgetPasswordBg.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Background"
              className="md:rounded-2xl shadow-lg"
            />
          </div>

          {/* close button  */}
          <button
            onClick={startClosing}
            className="absolute top-[-5px] right-[-9px] m-4 z-10 text-secondary-color"
            aria-label="Close modal"
          >
            <IoCloseCircle size="2em" />
          </button>

          {/* Register container  */}
          <div className="w-[90%] text-center lg:w-[50%] relative h-[94%] lg:mr-10 max-md:mt-5 py-5 px-5 ">
            {/* bg image  */}
            <div className="absolute inset-0 md:pt-40 ">
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

            <div
              className={`relative flex flex-col items-center justify-center sm:space-y-3 h-full max-sm:m-4 xl:space-y-2 xl:h-[98%]`}
            >
              <div className="mb-3 md:mt-4">
                <Title
                  text="Welcome to Cupidco!"
                  center={true}
                  fontSize="text-xl max-xs:text-md xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
                />
              </div>

              {/* Text Fields */}
              <div className="flex flex-col gap-2 xs:gap-1 sm:gap-1 lg:gap-2 md:gap-2 xl:gap-2">
                <div className="space-y-4">
                  <div className="flex flex-row gap-2">
                    {/* First Name Field */}
                    <TextField
                      name="firstName"
                      label="First Name"
                      type="text"
                      id="firstName"
                      width="w-full"
                      bgColor="bg-transparent"
                      height="h-1"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />

                    {/* Last Name Field */}
                    <TextField
                      name="lastName"
                      label="Last Name"
                      type="text"
                      id="lastName"
                      width="w-full"
                      bgColor="bg-transparent"
                      height="h-1"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Date Of birth Field */}
                  <TextField
                    name="dateOfBirth"
                    label="Date of Birth"
                    type="text"
                    id="dateOfBirth"
                    width="w-full"
                    bgColor="bg-transparent"
                    height="h-1"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />

                  {/* Phone Number Field */}
                  <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    type="text"
                    id="phoneNumber"
                    width="w-full"
                    bgColor="bg-transparent"
                    height="h-1"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />

                  {/* Email Field */}
                  <TextField
                    name="emailAddress"
                    label="Email"
                    type="email"
                    id="emailAddress"
                    width="w-full"
                    bgColor="bg-transparent"
                    height="h-1 "
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                  />

                  {/* Password Field */}
                  <div>
                    <div className="password-field">
                      <TextField
                        name="password"
                        label="Password"
                        type={passwordVisible1 ? "text" : "password"}
                        id="password"
                        width="w-full"
                        bgColor="bg-transparent"
                        height="h-1"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                      />
                      <div className=" relative mt-[-29px] flex justify-end mr-3 ">
                        {passwordVisible1 ? (
                          <GoEye
                            onClick={togglePasswordVisibility1}
                            className="cursor-pointer"
                          />
                        ) : (
                          <FiEyeOff
                            onClick={togglePasswordVisibility1}
                            className="cursor-pointer"
                          />
                        )}
                      </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="confirm password-field my-8">
                      <TextField
                        name="confirmPassword"
                        label="Confirm password"
                        type={passwordVisible2 ? "text" : "password"}
                        id="confirmPassword"
                        width="w-full"
                        bgColor="bg-transparent"
                        height="h-1"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                      />
                      <div className=" relative mt-[-29px] flex justify-end mr-3 ">
                        {passwordVisible2 ? (
                          <GoEye
                            onClick={togglePasswordVisibility2}
                            className="cursor-pointer"
                          />
                        ) : (
                          <FiEyeOff
                            onClick={togglePasswordVisibility2}
                            className="cursor-pointer"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Error message for password mismatch */}
                  {passwordError && (
                    <div className="text-red-500">{passwordError}</div>
                  )}

                  {/* Radio Buttons for Gender */}
                  <div className="flex flex-row md:gap-4 gap-2">
                    <Description
                      text="Gender : "
                      fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                      fontWeight="font-bold"
                      fontFamily="font-PlayfairDisplay "
                    />
                    <RadioButton
                      groupName="gender"
                      name="Male"
                      value="Male"
                      isSelected={formData.gender === "Male"} // Check if the gender is selected as Male
                      onChange={() => handleGenderChange("Male")} // Handle selection of Male
                      fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                    />
                    <RadioButton
                      groupName="gender"
                      name="Female"
                      value="Female"
                      isSelected={formData.gender === "Female"} // Check if the gender is selected as Female
                      onChange={() => handleGenderChange("Female")} // Handle selection of Female
                      fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                    />
                    <RadioButton
                      groupName="gender"
                      name="Other"
                      value="Other"
                      isSelected={formData.gender === "Other"} // Check if the gender is selected as Other
                      onChange={() => handleGenderChange("Other")} // Handle selection of Other
                      fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                    />
                  </div>
                </div>

                {/* Agreement */}
                <div className="space-y-3">
                  <div className="space-x-1 font-PlayfairDisplay text-primary-purple">
                    <span className="text-sm xs:text-xs lg:text-xs md:text-xs xl:text-sm font-medium max-xs:text-xs ">
                      By signing up you are agreeing to our
                    </span>
                    <a
                      href="/privacy-policy"
                      className="text-sm max-xs:text-xs xs:text-xs lg:text-xs md:text-xs xl:text-sm font-bold "
                    >
                      Privacy Policy
                    </a>
                    <span className="text-sm max-xs:text-xs xs:text-xs lg:text-xs md:text-xs xl:text-sm font-medium ">
                      and
                    </span>
                    <a
                      href="/terms-of-use"
                      className="text-sm max-xs:text-xs xs:text-xs lg:text-xs md:text-xs xl:text-sm font-bold "
                    >
                      Terms of Use.
                    </a>
                  </div>

                  {/* Submit Button */}
                  <PrimaryButton
                    label="Sign In"
                    height="py-1 xl:py-2"
                    width="w-full"
                    radius="rounded-xl lg:rounded-md xl:rounded-lg"
                    fontSize="lg:text-md xl:text-lg xs:text-xs text-lg max-xs:text-sm"
                    onClick={handleRegisterUser}
                  />

                  {/* Login Option */}
                  <div className="lg:space-y-2 xl:space-y-3 font-PlayfairDisplay ">
                    <div className="flex justify-center items-center space-x-2">
                      <span className="max-xs:text-xs xl:text-lg sm:text-xs xs:text-xs text-lg font-regular text-primary-purple">
                        Have an Account?
                      </span>
                      <span className="cursor-pointer max-xs:text-xs xl:text-lg sm:text-xs xs:text-xs text-lg font-bold text-primary-purple">
                        Sign In
                      </span>
                    </div>
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

export default Register;

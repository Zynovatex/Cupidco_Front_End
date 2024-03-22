import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import LoginModal from "../login/LoginModal";
import { GoEye } from "react-icons/go";
import { FiEyeOff } from "react-icons/fi";
import RadioButton from "@/components/common/inputs/RadioButton";
import SocialMedia from "@/components/common/social-media/SocialMedia";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import TextField from "@/components/common/inputs/TextField";
import { register } from "@/app/api/auth";

interface RegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
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

    //  user registration
    const handleRegisterUser = async () => {
        try {
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

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isLoginModalOpen && !isOpen) {
            setIsClosing(false);
        }
    }, [isLoginModalOpen, isOpen]);

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

    const openLoginModal = () => {
        setIsClosing(true);
        setIsLoginModalOpen(true);
    };

    const closeModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleFormClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
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


    const handleOptionChange = (groupName: string, value: string) => {
        setSelectedOptions({ ...selectedOptions, [groupName]: value });
    };

    const modalAnimation = isClosing ? "animate-slideDown" : "animate-slideUp";

    return (
        <>
            {(isOpen || isClosing) && (
                <div
                    className={`fixed inset-0 z-50 transition-opacity duration-500 flex justify-center items-center ${isOpen || isClosing ? "opacity-100" : "opacity-0"}`}
                    onClick={handleBgClick}>

                    <div
                        className={`relative md:rounded-2xl w-[100%] md:w-[70%] h-[100%] md:h-[90%] bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500 flex justify-center lg:justify-end  items-center`}
                        onClick={handleFormClick}>

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
                            aria-label="Close modal">

                            <IoCloseCircle size="2em" />
                        </button>

                        {/* Register container  */}
                        <div className="w-[90%] text-center lg:w-[50%] relative lg:h-[96%] h-[94%] lg:mr-10 max-md:mt-5 py-2 px-5 ">
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
                                className={`relative flex flex-col items-center justify-center sm:space-y-1 h-full max-sm:m-4 xl:space-y-1 xl:h-[98%]`}>

                                <div className="mb-3 md:mt-4">
                                    <Title
                                        text="Welcome to Cupidco!"
                                        center={true}
                                        fontSize="text-xl max-xs:text-md xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
                                    />
                                </div>

                                {/* Text Fields */}
                                <div className="flex flex-col gap-1">
                                    <div className="space-y-2">
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
                                                    name="Password"
                                                    label="Password"
                                                    type={passwordVisible1 ? "text" : "password"}
                                                    id="Password"
                                                    width="w-full"
                                                    bgColor="bg-transparent"
                                                    height="h-1"
                                                    value={formData.password}
                                                    onChange={handleInputChange}
                                                />{" "}
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
                                            <div className="confirm password-field my-5">
                                                <TextField
                                                    name="confirmPassword"
                                                    label="Confirm password"
                                                    type={passwordVisible2 ? "text" : "password"}
                                                    id="confirmPassword"
                                                    width="w-full"
                                                    bgColor="bg-transparent"
                                                    height="h-1"
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

                                        {/* Radio Buttons */}
                                        <div className="flex flex-row md:gap-4 gap-2">
                                            <Description
                                                text="Gender : "
                                                fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
                                                fontWeight="font-medium"
                                                fontFamily="font-playfair-display"
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
                                        <div className="space-x-1 font-Quicksand text-primary-purple">
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
                                        <div className="flex gap-1 justify-center mt-3">
                                            <Description
                                                text="Already Have an Account?"
                                                fontWeight="font-regular"
                                                fontSize="text-sm max-sm:text-xs"
                                                center={true}
                                            />
                                            <div onClick={openLoginModal} className="cursor-pointer">
                                                <Description
                                                    text=" Sign in"
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
                                        <div className="flex gap-3 justify-center mt-2">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isLoginModalOpen && (
                <LoginModal
                    isOpen={isLoginModalOpen}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default Register;
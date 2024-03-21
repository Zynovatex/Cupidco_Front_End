import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import TextField from "@/components/common/inputs/Input";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import { GoEye } from "react-icons/go";
import { FiEyeOff } from "react-icons/fi";
import RadioButton from "@/components/common/inputs/RadioButton";

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
                className={`fixed inset-0 z-50 bg-[#FFB4A2] bg-opacity-30 transition-opacity duration-500 flex justify-center items-center ${isOpen || isClosing ? "opacity-100" : "opacity-0"}`}
                onClick={handleBgClick}>

                <div
                    className={`relative md:rounded-2xl w-[100%] md:w-[70%] h-[100%] md:h-[90%] bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500 flex justify-center lg:justify-end  items-center`}>

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
                            className={`relative flex flex-col items-center justify-center sm:space-y-3 h-full max-sm:m-4 xl:space-y-2 xl:h-[98%]`}>

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
                                            label="First Name"
                                            type="text"
                                            id="FName"
                                            width="w-full"
                                            bgColor="bg-transparent"
                                            height="h-1"
                                        />

                                        {/* Last Name Field */}
                                        <TextField
                                            label="Last Name"
                                            type="text"
                                            id="LName"
                                            width="w-full"
                                            bgColor="bg-transparent"
                                            height="h-1"
                                        />
                                    </div>

                                    {/* Date Of birth Field */}
                                    <TextField
                                        label="Date of birth"
                                        type="text"
                                        id="dob"
                                        width="w-full"
                                        bgColor="bg-transparent"
                                        height="h-1 "
                                    />

                                    {/* Phone Number Field */}
                                    <TextField
                                        label="Phone Number"
                                        type="text"
                                        id="number"
                                        width="w-full"
                                        bgColor="bg-transparent"
                                        height="h-1 "
                                    />

                                    {/* Email Field */}
                                    <TextField
                                        label="Email"
                                        type="email"
                                        id="mail"
                                        width="w-full"
                                        bgColor="bg-transparent"
                                        height="h-1 "
                                    />

                                    {/* Password Field */}
                                    <div>
                                        <div className="password-field">
                                            <TextField label="Password" type={passwordVisible1 ? "text" : "password"} id="password1" bgColor="bg-transparent" height="h-1" value={password1} name={""} />
                                            <div className=" relative mt-[-29px] flex justify-end mr-3 ">
                                                {passwordVisible1 ? (
                                                    <GoEye onClick={togglePasswordVisibility1} className="cursor-pointer" />
                                                ) : (
                                                    <FiEyeOff onClick={togglePasswordVisibility1} className="cursor-pointer" />
                                                )}
                                            </div>
                                        </div>
                                        {/* Confirm Password Field */}
                                        <div className="password-field my-8">
                                            <TextField label="Confirm Password" type={passwordVisible2 ? "text" : "password"} id="password2" bgColor="bg-transparent" height="h-1" value={password2} name={""} />
                                            <div className=" relative mt-[-29px] flex justify-end mr-3 ">
                                                {passwordVisible2 ? (
                                                    <GoEye onClick={togglePasswordVisibility2} className="cursor-pointer" />
                                                ) : (
                                                    <FiEyeOff onClick={togglePasswordVisibility2} className="cursor-pointer" />
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
                                        label="Sign Up"
                                        height="py-2"
                                        width="w-full"
                                        radius="rounded-xl lg:rounded-md xl:rounded-lg"
                                        fontSize="lg:text-md xl:text-lg xs:text-xs text-lg max-xs:text-sm"
                                    />

                                    {/* Login Option */}
                                    <div className="lg:space-y-2 xl:space-y-3 font-Quicksand">
                                        <div className="flex justify-center items-center space-x-2">
                                            <span className="max-xs:text-xs xl:text-lg sm:text-xs xs:text-xs text-lg font-regular text-primary-purple">
                                                Have an Account?
                                            </span>
                                            <span
                                                className="cursor-pointer max-xs:text-xs xl:text-lg sm:text-xs xs:text-xs text-lg font-bold text-primary-purple"
                                            >
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

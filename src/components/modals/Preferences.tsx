'use client';

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { CheckboxGroup } from "../common/inputs/MultipleCheckbox";
import Dropdown from "../common/dropdown/Dropdown";
import Title from "../common/texts/Title";
import PrimaryButton from "../common/buttons/PrimaryButton";
import PopupwithIco from "./PopupwithIco";
import { RiHeartsLine } from "react-icons/ri";
import Description from "../common/texts/Description";

interface PreferencesProps {
    title: string;
    description: string;
    ageOptions: string[];
    heightOptions: string[];
    religionOptions: string[];
    ethnicityOptions: string[];
    civilStatusOptions: string[];
    countryOptions: string[];
    professionOptions: string[];
    isOpen: boolean;
    onClose: () => void;
}

const Preferences: React.FC<PreferencesProps> = ({
    isOpen,
    onClose,
    title,
    description,
    ageOptions,
    heightOptions,
    religionOptions,
    ethnicityOptions,
    civilStatusOptions,
    countryOptions,
    professionOptions,
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        setIsModalOpen(true);
    };

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
        <div
            className={`fixed inset-0 bg-[#FFB4A2] bg-opacity-50 z-50 transition-opacity duration-500 flex justify-center items-center ${isOpen || isClosing ? "opacity-100" : "opacity-0"
                }`}
            onClick={handleBgClick}
        >
            <div
                className={`relative rounded-2xl w-[80%] max-xs:w-[96%] 
                    max-w-7xl 
                    lg:w-[80%] 
                    sm:w-[80%] 
                    h-auto px-10
                    max-sm:px-2
                    md:py-36
                    py-52 sm:py-24 lg:py-2 
                    max-sm:h-[95%] 
                    bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500 flex justify-center items-center`}
            >
                <div className="w-full rounded-xl 
                    shadow-lg 
                    bg-[#FFF4F1] 
                    md:p-10
                    p-5
                    relative 
                    xl:h-[800px]
                    lg:h-[600px]
                    h-[600px]
                    overflow-y-auto scrollbar-hide">

                    <div className="absolute 
                    top-0 
                    left-0 
                    right-0 bg-gradient-custom 
                    xl:py-6
                    py-2
                    rounded-t-xl">
                        <div className="flex flex-col gap-2">
                            <Title
                                text={title}
                                fontColor="text-white"
                                center={true}
                                fontSize="text-xl max:sm:text-md md:text-xl lg:text-2xl xl:text-4xl"
                            />
                            <Description
                                text={description}
                                fontColor="text-white"
                                center={true}
                                fontSize="text-md max:sm:text-sm md:text-md lg:text-lg xl:text-xl"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 md:gap-10 gap-5 xl:pt-28 pt-20 justify-items-start">

                        {/* Age Range */}
                        <div className="col-span-1">
                            <Title
                                text="Age Range"
                                center={true}
                                fontSize="text-md max:sm:text-md md:text-lg lg:text-xl xl:text-3xl"
                                fontWeight="font-normal"
                            />
                        </div>
                        <div className="col-span-2 flex gap-2">
                            <Dropdown
                                id="AgeOptions"
                                label="Please Select"
                                values={ageOptions}
                                height="h-8 xl:h-10"
                                fontSizeValue="text-sm max-sm:text-xs sm:text-sm md:text-md lg:text-md xl:text-lg"
                            />
                        </div>

                        {/* Height Range */}
                        <div className="col-span-1">
                            <Title
                                text="Height Range"
                                center={true}
                                fontSize="text-md max:sm:text-md md:text-lg lg:text-xl xl:text-3xl"
                                fontWeight="font-normal"
                            />
                        </div>
                        <div className="col-span-2 flex gap-2">
                            <Dropdown
                                id="HeightOptions"
                                label="Please Select"
                                values={heightOptions}
                                height="h-8 xl:h-10"
                                fontSizeValue="text-sm max-sm:text-xs sm:text-sm md:text-md lg:text-md xl:text-lg"
                            />
                        </div>

                        {/* Religion Options */}
                        <div className="col-span-1">
                            <Title
                                text="Religion"
                                center={true}
                                fontSize="text-md max:sm:text-md md:text-lg lg:text-xl xl:text-3xl"
                                fontWeight="font-normal"
                            />
                        </div>
                        <div className="col-span-2 flex gap-2">
                            <CheckboxGroup options={religionOptions} />
                        </div>

                        {/* Ethnicity */}
                        <div className="col-span-1">
                            <Title
                                text="Ethnicity"
                                center={true}
                                fontSize="text-md max:sm:text-md md:text-lg lg:text-xl xl:text-3xl"
                                fontWeight="font-normal"
                            />
                        </div>
                        <div className="col-span-2 flex gap-2">
                            <CheckboxGroup options={ethnicityOptions} />
                        </div>

                        {/* Civil Status */}
                        <div className="col-span-1">
                            <Title
                                text="Civil Status"
                                center={true}
                                fontSize="text-md max:sm:text-md md:text-lg lg:text-xl xl:text-3xl"
                                fontWeight="font-normal"
                            />
                        </div>
                        <div className="col-span-2 flex gap-2">
                            <CheckboxGroup options={civilStatusOptions} />
                        </div>

                        {/* Country */}
                        <div className="col-span-1">
                            <Title
                                text="Country"
                                center={true}
                                fontSize="text-md max:sm:text-md md:text-lg lg:text-xl xl:text-3xl"
                                fontWeight="font-normal"
                            />
                        </div>
                        <div className="col-span-2">
                            <CheckboxGroup options={countryOptions} />
                        </div>

                        {/* Profession*/}
                        <div className="col-span-1">
                            <Title
                                text="Profession"
                                center={true}
                                fontSize="text-md max:sm:text-md md:text-lg lg:text-xl xl:text-3xl"
                                fontWeight="font-normal"
                            />
                        </div>
                        <div className="col-span-2 flex gap-2">
                            <CheckboxGroup options={professionOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preferences;
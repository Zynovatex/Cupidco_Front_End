/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import Title from "../common/texts/Title";
import Description from "../common/texts/Description";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Logo from "../common/logo/Logo";
import ProfilePicture from "../common/profile/ProfilePicture";
import GoogleMap from "@/components/google-map/GoogleMaps";

interface LocationModalProps {
    isOpen: boolean;
    name: string;
    location: string;
    onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({
    isOpen,
    onClose,
    name,
    location
}) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

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
                className={`fixed inset-0 bg-[#FFB4A2] bg-opacity-50 z-50 transition-opacity duration-500 flex justify-start items-center ${isOpen || isClosing ? "opacity-100" : "opacity-0"}`}
                onClick={handleBgClick}>

                <div
                    className={`relative rounded-2xl 
                    w-[80%]
                    md:px-10
                    px-5
                    py-10
                    max-xs:w-[96%] 
                    max-w-7xl 
                    lg:w-[80%]
                    sm:w-[80%]
                    xl:w-[60%]
                    h-auto
                    mx-auto 
                    bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500`}>

                    {/* Background Image */}
                    <div>
                        <Image
                            src="/images/DefaultBg.png"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            alt="Background"
                            className="rounded-xl shadow-xl"
                        />

                        {/* Close Button */}
                        <button
                            onClick={startClosing}
                            className="absolute top-0 right-0 m-4 z-10 text-primary-purple"
                            aria-label="Close modal">

                            <IoCloseCircle size="2em" />
                        </button>

                        {/* Title contents */}
                        <div className="relative bg-[#EBADA1] bg-opacity-50 rounded-xl py-2 w-full flex md:justify-between justify-center mt-5 px-5 shadow-lg">
                            <div className="hidden md:flex">
                                <Logo width={100} />
                            </div>
                            <Title
                                text="Find Location"
                                center={true}
                                fontSize="text-xl max:sm:text-md md:text-xl lg:text-2xl xl:text-4xl" />

                            <div className="flex gap-4 justify-center items-center">
                                <div className="hidden md:flex">
                                    <ProfilePicture active={true} imageName="Avatar.png" position="bottom-right" />
                                </div>
                                <div className="hidden md:flex">
                                    <img
                                        src="/images/locationIcon.png"
                                        alt="Location Icon"
                                        className="w-5 h-5"
                                    />
                                </div>

                                <div className="hidden md:flex">
                                    <ProfilePicture active={true} imageName="Avatar.png" position="bottom-right" />
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden md:p-5 p-3 flex gap-10 flex-row items-center justify-between mb-5 w-full">
                            <div>
                                <ProfilePicture active={true} imageName="Avatar.png" position="bottom-right" />
                            </div>

                            <div className="flex justify-center items-center pr-5">
                                <ProfilePicture active={true} imageName="Avatar.png" position="bottom-right" />
                            </div>
                        </div>

                        {/* Contents - Google Map */}
                        <div className="relative h-full md:mt-5 flex flex-col gap-5">
                            <GoogleMap destination={location} />

                            {/* Description */}
                            <div className="text-center">
                                <Description text={`${name}'s Current Location is ${location}`} center={true} />
                            </div>

                            {/* Button */}
                            <div className="flex justify-center">
                                <PrimaryButton
                                    label="Done"
                                    fontSize="text-md sm:text-sm lg:text-lg"
                                    height="h-10 xl:h-12"
                                    width="w-auto xl:w-60"
                                    radius="rounded-lg"
                                    onClick={startClosing}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationModal;

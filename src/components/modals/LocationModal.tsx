'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import Title from "../common/texts/Title";
import Description from "../common/texts/Description";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Logo from "../common/logo/Logo";
import ProfilePicture from "../common/profile/ProfilePicture";

interface LocationModalProps {
    isOpen: boolean;
    location: string;
    name: string;
    onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({
    isOpen,
    onClose,
    location,
    name
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
                    px-10
                    py-10
                    max-xs:w-[96%] 
                    max-w-7xl 
                    lg:w-[80%]
                    sm:w-[80%]
                    xl:w-[60%]
                    lg:h-[90%]
                    xl:h-[90%]
                    h-auto
                    max-sm:px-6
                    mx-auto max-sm:h-[90%]
                    sm:h-[90%] md:h-[90%]
                    bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500`}>

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/DefaultBg.png"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            alt="Background"
                            className="rounded-xl shadow-xl"
                        />
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={startClosing}
                        className="absolute top-0 right-0 m-4 z-10 text-primary-purple"
                        aria-label="Close modal">

                        <IoCloseCircle size="2em" />
                    </button>

                    {/* Title */}
                    <div className="relative bg-[#EBADA1] rounded-xl py-2 w-full flex md:justify-between justify-center mt-5 px-5">
                        <div className="hidden md:flex">
                            <Logo width={100} />
                        </div>
                        <Title
                            text="Find Location"
                            center={true}
                            fontSize="text-xl max:sm:text-md md:text-xl lg:text-2xl xl:text-4xl"
                        />
                        <div className="hidden md:flex">
                            <ProfilePicture active={true} imageName="Avatar.png" position="bottom-right" />
                        </div>
                    </div>

                    {/* Contents - Google Map */}
                    <div className="flex-1 relative h-full mt-5 flex flex-col gap-5">
                        <iframe
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11737.889138083436!2d79.8862902880493!3d6.789179330366131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2450af2b3b63d%3A0x4bd5b87e09abb3c7!2sMoratuwa!5e0!3m2!1sen!2slk!4v1691243457967!5m2!1sen!2slk`}
                            allowFullScreen
                            loading="lazy"
                            width="100%"
                            height="60%"
                            aria-hidden="true"
                            className="rounded-xl">
                        </iframe>

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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationModal;
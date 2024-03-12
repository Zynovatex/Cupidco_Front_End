import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ProfileCard from "../pages/edit_profile/EditProfile";

interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

    const disableScroll = () => {
        document.body.style.overflow = "hidden";
    };

    const enableScroll = () => {
        document.body.style.overflow = "unset";
    };

    useEffect(() => {
        if (isOpen) {
            setCurrentStep(1);
        }
    }, [isOpen]);

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

    const handleStepChange = (step: number) => {
        setCurrentStep(step);
    };

    const modalAnimation = isClosing ? "animate-slideDown" : "animate-slideUp";

    if (!isOpen && !isClosing) return null;

    return (
        <>
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
                    lg:h-[95%]
                    xl:h-[95%] 
                    md:h-[95%] 
                    sm:h-[95%] 
                    h-auto px-10
                    max-sm:px-2
                    md:py-36
                    py-52 sm:py-24 lg:py-2 
                    max-sm:h-[95%] 
                    bg-transparent ${modalAnimation} transition-all overflow-hidden duration-500 flex justify-center items-center`}
                >
                    <div>
                        <Image
                            src="/images/EditProfileBg.png"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            alt="Background"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>
                    {/* EditProfile Component */}
                    <div className="relative z-10 items-center flex justify-center w-full">
                        <ProfileCard
                            step={currentStep}
                            onStepChange={handleStepChange}
                            onCloseModal={startClosing}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfileModal;

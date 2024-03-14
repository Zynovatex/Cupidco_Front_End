/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaClock, FaCrown, FaInfoCircle } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import DashboardSLiderImages from './DashboardSliderImages';
import Description from '../texts/Description';
import { FaLocationDot } from 'react-icons/fa6';
import Chip from '../chip/Chip';
import SecondaryButton from '../buttons/SecondaryButton';

interface Profile {
    images: string[];
    name: string;
    address: string;
    age: string;
    isPremium?: boolean;
    aboutMe?: string;
    interests?: string[];
}

interface DashboardProps {
    profiles: Profile[];
}

const DashboardCard: React.FC<DashboardProps> = ({ profiles }) => {
    const [overlayVisible, setOverlayVisible] = useState<Array<boolean>>(Array(profiles.length).fill(false));
    const overlayRefs = useRef<Array<HTMLDivElement | null>>(Array(profiles.length).fill(null));

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            overlayRefs.current.forEach((overlayRef, index) => {
                if (overlayRef && !overlayRef.contains(event.target as Node)) {
                    setOverlayVisible(prevVisibility => {
                        const updatedVisibility = [...prevVisibility];
                        updatedVisibility[index] = false;
                        return updatedVisibility;
                    });
                }
            });
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleOverlay = (index: number) => {
        setOverlayVisible(prevVisibility => {
            const updatedVisibility = [...prevVisibility];
            updatedVisibility[index] = !updatedVisibility[index];
            return updatedVisibility;
        });
    };

    const handleCloseOverlay = (index: number) => {
        setOverlayVisible(prevVisibility => {
            const updatedVisibility = [...prevVisibility];
            updatedVisibility[index] = false;
            return updatedVisibility;
        });
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="flex flex-wrap justify-center gap-5">
            {/* Profile */}
            {profiles.map((profile, index) => (
                <div key={index} className="relative w-[350px]">

                    {/* Image Slider Card */}
                    <div className="swiper-container">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-t-xl">
                            {profile.images.map((image, imageIndex) => (
                                <SwiperSlide key={imageIndex} className="flex justify-center items-center relative">
                                    <DashboardSLiderImages image={image} />
                                    {/* Premium Icon */}
                                    {profile.isPremium && (
                                        <div className="absolute top-3 right-3 text-primary-purple">
                                            <FaCrown size={20} />
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Bottom Container */}
                    <div className="bottom-div relative bottom-0 w-full h-auto bg-white rounded-b-xl p-5 flex flex-col shadow-xl">

                        {/* Percentage Circle & Interaction Icons */}
                        <div className='percentage-circle absolute flex justify-start items-center transform -translate-y-3/4 z-10'>
                            <div className="bg-primary-purple rounded-full w-16 h-16 flex justify-center items-center shadow-xl">
                                <Description text="75%" fontColor="text-white" />
                            </div>
                        </div>
                        <div className="interaction-icons flex justify-end items-center transform -translate-y-3/4 z-10 cursor-pointer">
                            <img src="/images/ProfileIcon6.png" alt="Reject" className="w-10 h-10" title="Reject" />
                            <img src="/images/ProfileIcon4.png" alt="Like" className="w-10 h-10" title="Like" />
                            <img src="/images/ProfileIcon5.png" alt="Heart" className="w-10 h-10" title="Heart" />
                            <img src="/images/ProfileIcon1.png" alt="BookMark" className="w-10 h-10" title="BookMark" />
                            <img src="/images/ProfileIcon3.png" alt="Super Like" className="w-10 h-10" title="Super Like" />
                            <img src="/images/ProfileIcon2.png" alt="Chat" className="w-10 h-10" title="Chat" />
                        </div>


                        {/* Details */}
                        <div className="name">
                            <Description text={profile.name} fontFamily="font-playfair-display" fontSize="text-sm sm:text-sm md:text-lg lg:text-2xl xl:text-2xl" fontWeight="font-bold" />
                        </div>
                        <div className="age">
                            <Description text={`Age ${profile.age}`} fontFamily="font-playfair-display" fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl" />
                        </div>
                        <div className="Address flex justify-between items-center">
                            <Description text={truncateText(profile.address, 7)} icon={FaLocationDot} fontFamily="font-playfair-display" fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl" />

                            {/* Online status & Info icon */}
                            <div className="online-text flex items-center rounded-full border border-primary-purple px-3 py-1">
                                <Description text="An hour ago" icon={FaClock} iconPosition="left" fontFamily="font-playfair-display" fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl" />
                            </div>
                            <div className="text-primary-purple cursor-pointer" onClick={() => toggleOverlay(index)}>
                                <FaInfoCircle size={22} />
                            </div>
                        </div>
                    </div>

                    {/* Overlay */}
                    {overlayVisible[index] && (
                        <div ref={el => (overlayRefs.current[index] = el)} className={`overlay absolute inset-0 bg-primary-purple z-20 rounded-xl transform origin-bottom ${overlayVisible[index] ? "scale-y-100 duration-300 ease-in" : "scale-y-0 duration-300 ease-out"}`}>

                            {/* Overlay content */}
                            <div className="overlay-content flex flex-col justify-between items-center relative h-full">
                                <div className="p-5 flex flex-col justify-center items-center text-center w-full">

                                    {/* Close & Premium Icons */}
                                    <IoCloseCircle size={20} className="absolute top-0 left-0 m-4 cursor-pointer text-white" onClick={() => handleCloseOverlay(index)} />

                                    {profile.isPremium && (
                                        <div className="absolute top-0 right-0 m-4 cursor-pointer text-white">
                                            <FaCrown size={20} />
                                        </div>
                                    )}

                                    {/* User Details */}
                                    {profile.aboutMe && (
                                        <div className='flex flex-col gap-5 items-center'>
                                            <Description text="About Me" fontFamily="font-playfair-display" fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl" fontColor='text-white' fontWeight='font-bold' />
                                            <div className="w-full h-28 overflow-auto" style={{ scrollbarWidth: 'none' }}>
                                                <Description text={profile.aboutMe} fontFamily="font-playfair-display" fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl" fontColor='text-white' />
                                            </div>
                                            <div className="divider w-full border-t border-gray-300"></div>
                                        </div>
                                    )}

                                    {/* Interests */}
                                    {profile.interests && (
                                        <div className="flex flex-col gap-5 items-start mt-5 w-full">
                                            <Description text="Interests" fontFamily="font-playfair-display" fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl" fontColor='text-white' fontWeight='font-bold' />
                                            <div className="flex flex-wrap gap-3">
                                                {profile.interests.map((interest, i) => (
                                                    <Chip key={i} text={interest} fontColor='text-primary-purple' width='w-auto' />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <SecondaryButton
                                        label="View More"
                                        fontSize="text-md sm:text-sm lg:text-lg"
                                        height="h-10 xl:h-12"
                                        width="w-auto"
                                        radius="rounded-2xl"
                                        invert={true}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DashboardCard;
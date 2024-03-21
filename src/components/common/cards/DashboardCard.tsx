/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaClock, FaInfoCircle, FaCrown } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Description from "../texts/Description";
import Chip from "../chip/Chip";
import SecondaryButton from "../buttons/SecondaryButton";
import LocationModal from "@/components/modals/LocationModal";
import DashboardSLiderImages from "./DashboardSliderImages";
import { SwiperNavButtons } from "../buttons/DashboardCardButtons";

interface Profile {
  images: string[];
  name: string;
  address: string;
  age: string;
  isPremium?: boolean;
  aboutMe?: string;
  profession: string;
  interests?: string[];
}

interface DashboardProps {
  profiles: Profile[];
}

const DashboardCard: React.FC<DashboardProps> = ({ profiles }) => {
  const swiperRefs = useRef<Array<any>>([]);

  const handleSwiper = (swiperInstance: any, index: number) => {
    swiperRefs.current[index] = swiperInstance;
  };

  const slidePrev = (index: number) => {
    if (swiperRefs.current[index]) swiperRefs.current[index].slidePrev();
  };

  const slideNext = (index: number) => {
    if (swiperRefs.current[index]) swiperRefs.current[index].slideNext();
  };

  const [overlayVisible, setOverlayVisible] = useState<Array<boolean>>(
    Array(profiles.length).fill(false)
  );
  const overlayRefs = useRef<Array<HTMLDivElement | null>>(
    Array(profiles.length).fill(null)
  );

  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [locationInfo, setLocationInfo] = useState({ name: "", address: "" });

  const toggleLocationModal = () => {
    setIsLocationModalOpen(!isLocationModalOpen);
  };

  const handleDescriptionClick = (name: any, address: any) => {
    setLocationInfo({ name, address });
    toggleLocationModal();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      overlayRefs.current.forEach((overlayRef, index) => {
        if (overlayRef && !overlayRef.contains(event.target as Node)) {
          setOverlayVisible((prevVisibility) => {
            const updatedVisibility = [...prevVisibility];
            updatedVisibility[index] = false;
            return updatedVisibility;
          });
        }
      });
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOverlay = (index: number) => {
    setOverlayVisible((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  const handleCloseOverlay = (index: number) => {
    setOverlayVisible((prevVisibility) => {
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
    <div className="flex flex-wrap justify-center gap-10">
      {/* Profile */}
      {profiles.map((profile, index) => (
        <div key={index} className="relative w-[300px]">
          {/* Image Slider Card */}
          <div className="swiper-container">
            <Swiper
              className="mySwiper rounded-t-xl"
              onSwiper={(swiper) => handleSwiper(swiper, index)}
            >
              {profile.images.map((image, imageIndex) => (
                <SwiperSlide
                  key={imageIndex}
                  className="flex justify-center items-center relative"
                >
                  <DashboardSLiderImages image={image} />
                  {/* Premium Icon */}
                  {profile.isPremium && (
                    <div className="absolute top-3 right-3 text-primary-purple">
                      <FaCrown size={18} />
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            <SwiperNavButtons
              slidePrev={() => slidePrev(index)}
              slideNext={() => slideNext(index)}
            />
          </div>

          {/* Bottom Container */}
          <div className="bottom-div relative bottom-0 w-full h-auto bg-white rounded-b-2xl p-2 flex flex-col shadow-lg">
            {/* Percentage Circle & Interaction Icons */}
            <div className="percentage-circle absolute flex justify-start items-center transform -translate-y-10 z-10">
              <div className="bg-primary-purple rounded-full w-14 h-14 flex justify-center items-center shadow-xl">
                <Description
                  text="75%"
                  fontColor="text-white"
                  fontSize="text-sm md:text-md xl:text-lg"
                />
              </div>
            </div>
            <div className="interaction-icons absolute flex gap-1 justify-end items-center transform -translate-y-5 z-10 cursor-pointer right-2">
              <img
                src="/images/Reject.png"
                alt="Reject"
                className="w-8 h-8"
                title="Reject"
              />
              <img
                src="/images/Like.png"
                alt="Like"
                className="w-8 h-8"
                title="Like"
              />
              <img
                src="/images/bookmark.png"
                alt="Heart"
                className="w-8 h-8"
                title="Heart"
              />
              <img
                src="/images/ProfileIcon1.png"
                alt="BookMark"
                className="w-8 h-8"
                title="BookMark"
              />
              <img
                src="/images/ProfileIcon3.png"
                alt="Super Like"
                className="w-8 h-8"
                title="Super Like"
              />
              <img
                src="/images/Chat.png"
                alt="Chat"
                className="w-8 h-8"
                title="Chat"
              />
            </div>

            {/* Details */}
            <div className="flex name mt-5 gap-1">
              <Description
                text={profile.name}
                fontFamily="font-PlayfairDisplay"
                fontSize="text-md md:text-lg lg:text-2xl xl:text-2xl"
                fontWeight="font-bold"
              />

              <Description
                text={`(${profile.profession})`}
                fontFamily="font-PlayfairDisplay"
                fontSize="text-sm md:text-sm lg:text-md xl:text-lg"
                fontWeight="font-bold"
              />
            </div>

            <div className="age">
              <Description
                text={`Age: ${profile.age}`}
                fontFamily="font-PlayfairDisplay"
                fontSize="text-md md:text-md lg:text-lg xl:text-xl"
              />
            </div>

            <div className="Address flex justify-between items-center">
              <div
                className="text-primary-purple cursor-pointer"
                onClick={() =>
                  handleDescriptionClick(profile.name, profile.address)
                }
              >
                <div className="flex flex-row items-center gap-2">
                  <Description
                    text={truncateText(profile.address, 7)}
                    fontFamily="font-PlayfairDisplay"
                    fontSize="text-md md:text-md lg:text-lg xl:text-xl"
                  />
                  <img
                    src="/images/locationIcon.png"
                    alt="Location Icon"
                    className="w-5 h-5"
                  />
                </div>
              </div>

              {/* Online status & Info icon */}
              <div className="online-text flex items-center rounded-full border border-primary-purple px-1">
                <Description
                  text="An hour ago"
                  icon={FaClock}
                  iconPosition="left"
                  fontFamily="font-PlayfairDisplay"
                  fontSize="text-sm md:text-md xl:text-lg"
                />
              </div>

              <div
                className="text-primary-purple cursor-pointer"
                onClick={() => toggleOverlay(index)}
              >
                <FaInfoCircle size={22} />
              </div>
            </div>
          </div>

          {/* Overlay */}
          {overlayVisible[index] && (
            <div
              ref={(el) => (overlayRefs.current[index] = el)}
              className={`overlay absolute inset-0 bg-primary-purple z-20 rounded-xl transform origin-bottom ${
                overlayVisible[index]
                  ? "scale-y-100 duration-300 ease-in"
                  : "scale-y-0 duration-300 ease-out"
              }`}
            >
              {/* Overlay content */}
              <div className="overlay-content flex flex-col justify-between items-center relative h-full">
                <div className="p-5 flex flex-col justify-center items-center text-center w-full">
                  {/* Close & Premium Icons */}
                  <IoCloseCircle
                    size={20}
                    className="absolute top-0 left-0 m-4 cursor-pointer text-white"
                    onClick={() => handleCloseOverlay(index)}
                  />

                  {profile.isPremium && (
                    <div className="absolute top-0 right-0 m-4 cursor-pointer text-white">
                      <FaCrown size={20} />
                    </div>
                  )}

                  {/* User Details */}
                  {profile.aboutMe && (
                    <div className="flex flex-col gap-5 items-center">
                      <Description
                        text="About Me"
                        fontFamily="font-PlayfairDisplay"
                        fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl"
                        fontColor="text-white"
                        fontWeight="font-bold"
                      />

                      <div
                        className="w-full h-20 overflow-auto"
                        style={{ scrollbarWidth: "none" }}
                      >
                        <Description
                          text={profile.aboutMe}
                          fontFamily="font-PlayfairDisplay"
                          fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl"
                          fontColor="text-white"
                        />
                      </div>

                      <div className="divider w-full border-t border-gray-300"></div>
                    </div>
                  )}

                  {/* Interests */}
                  {profile.interests && (
                    <div className="flex flex-col gap-5 items-start mt-5 w-full">
                      <Description
                        text="Interests"
                        fontFamily="font-PlayfairDisplay"
                        fontSize="text-sm sm:text-sm md:text-lg lg:text-xl xl:text-xl"
                        fontColor="text-white"
                        fontWeight="font-bold"
                      />

                      <div className="flex flex-wrap gap-3">
                        {profile.interests.slice(0, 5).map((interest, i) => (
                          <Chip
                            key={i}
                            text={interest}
                            fontColor="text-primary-purple"
                            width="w-auto"
                          />
                        ))}
                        {profile.interests.length > 5 && (
                          <Chip
                            text={`+${profile.interests.length - 5}`}
                            fontColor="text-primary-purple"
                            width="w-auto"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <SecondaryButton
                    label="View More"
                    fontSize="text-md sm:text-sm lg:text-lg"
                    height="h-8 xl:h-10"
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

      {/* Location modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={toggleLocationModal}
        name={locationInfo.name}
        location={locationInfo.address}
      />
    </div>
  );
};

export default DashboardCard;

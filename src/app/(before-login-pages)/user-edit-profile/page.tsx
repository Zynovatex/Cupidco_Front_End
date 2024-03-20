"use client";

import React from "react";
import Image from "next/image";
import router from "next/router";
import { IoIosArrowBack } from "react-icons/io";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

import { BiEdit } from "react-icons/bi";
import Chip from "@/components/common/chip/Chip";

interface UserEditProfileProps {
  name: string;
  age: string;
  religion: string;
  dob: string;
  address: string;
  height: string;
  weight: string;
  profession: string;
  nic: string;
  civilStatus: string;
  gender: string;
  profileImage: string;
  aboutme: string;
  lifestyle: string;
  foodPreferences: string[];
  hobbies: string[];
  education: string;
  family_bg: string;
}

const UserEditProfile: React.FC<UserEditProfileProps> = ({
  name,
  age,
  religion,
  dob,
  address,
  height,
  weight,
  profession,
  nic,
  civilStatus,
  gender,
  profileImage,
  foodPreferences,
  hobbies,
  family_bg,
  education,
  lifestyle,
  aboutme,
}) => {
  const PersonalInfoField: React.FC<{
    icon: React.ReactNode;
    title: string;
    value: string;
  }> = ({ icon, title, value }) => {
    return (
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center ">
          <Title
            text={title}
            fontSize="text-xl mr-2 justify-between max-sm:text-lg"
          />
          <div className="hidden md:inline-block md:max-w-xs lg:max-w-sm overflow-hidden">
            <div className="animation-scrollText">{value}</div>
          </div>
          <div className="md:hidden max-sm:text-lg">{value}</div>
        </div>
        {icon && <div className="ml-auto">{icon}</div>}
      </div>
    );
  };

  const Divider = () => (
    <div className="w-full border-t-1 border-primary-purple my-2"></div>
  );

  return (
    <div className="relative min-h-screen flex flex-col justify-start py-10 pt-16 px-10 items-center text-center">
      {/* Back Button */}
      <div className="absolute top-4 left-10 z-50">
        <button
          className="bg-primary-purple p-2 text-white rounded-full cursor-pointer"
          onClick={() => router.back()}
        >
          <IoIosArrowBack size={20} />
        </button>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Defaultbg.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          loading="lazy"
        />
      </div>

      <div
        className="w-full rounded-xl 
            shadow-lg 
            xl:p-10
            p-5
            relative 
            h-full"
      >
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/images/DefaultBg.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Background"
            loading="lazy"
          />
        </div>
        <div className="absolute top-4 left-10 max-sm:top-20 max-sm:left-16 z-30">
          <Image
            src={profileImage}
            alt="Profile"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="center"
            className="w-56 h-56 md:w-38 md:h-38 2xl:w-48 2xl:h-48 rounded-full"
          />
          <div className="absolute bottom-0 right-0 p-2">
            <BiEdit size={24} />
          </div>
        </div>
        <div
          className="absolute 
                top-0 
                left-0 
                right-0 bg-gradient-custom 
                py-10
                rounded-t-xl"
        >
          <div>
            <Title
              text="Edit Profile"
              fontColor="text-white"
              center={true}
              fontSize="text-xl max:sm:text-md md:text-xl lg:text-2xl xl:text-4xl"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col pt-40 ">
          <div className="flex flex-wrap justify-between z-30">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 space-y-10 z-30">
              <div className="text-left">
                <div className="flex flex-row gap-2 mb-4 mt-12 lg:mt-16 md:mt-16 max-sm:mt-36 items-center">
                  <BiEdit size={20} />
                  <Title text="About Me :" fontSize="text-2xl max-sm:text-xl" />
                </div>
                <Description
                  text={aboutme}
                  fontSize="text-lg"
                  fontWeight="font-regular"
                />
              </div>
              <Divider />
              <div className="text-left">
                <div className="flex flex-row gap-2 mb-4 items-center">
                  <BiEdit size={20} />
                  <Title
                    text="Education :"
                    fontSize="text-2xl max-sm:text-xl"
                  />
                </div>
                <Description
                  text={education}
                  fontSize="text-lg"
                  fontWeight="font-regular"
                />
              </div>
              <Divider />
              <div className="text-left">
                <div className="flex flex-row gap-2 mb-4 items-center">
                  <BiEdit size={20} />
                  <Title
                    text="Lifestyle Preferences :"
                    fontSize="text-2xl max-sm:text-xl"
                  />
                </div>
                <Description
                  text={lifestyle}
                  fontSize="text-lg"
                  fontWeight="font-regular"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="text-left font-Quicksand font-medium text-primary-purple text-xl md:text-lg">
                <Title
                  text="Personal Information:"
                  fontSize="text-2xl max-sm:text-xl mb-5"
                />
                <div className="mb-2 space-y-5">
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Name: "
                    value={name}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Age:"
                    value={age}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Religion:"
                    value={religion}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="DOB:"
                    value={dob}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Address:"
                    value={address}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Height:"
                    value={height}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Weight:"
                    value={weight}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Profession:"
                    value={profession}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="NIC:"
                    value={nic}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Civil Status:"
                    value={civilStatus}
                  />{" "}
                  <Divider />
                  <PersonalInfoField
                    icon={<BiEdit size={20} />}
                    title="Gender:"
                    value={gender}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 space-y-10 max-sm:space-y-8">
              <div className="text-left">
                <div className="flex flex-col gap-2 mb-2 items-left">
                  <div className="flex-row flex items-center gap-2">
                    <BiEdit size={20} />
                    <Title
                      text="Food Preferences :"
                      fontSize="text-2xl max-sm:text-xl "
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap mb-6">
                      {foodPreferences &&
                        foodPreferences.slice(0, 4).map((preference, index) => (
                          <div key={index} className="w-1/2">
                            <Chip
                              text={preference}
                              width="w-40 max-sm:w-32 mb-2"
                            />
                          </div>
                        ))}
                    </div>
                  </div>{" "}
                </div>
                <Divider />
              </div>
              <div className="text-left">
                <div className="flex flex-col gap-2 mb-4 items-left">
                  <div className="flex-row flex items-center gap-2">
                    <BiEdit size={20} />
                    <Title
                      text="Hobbies :"
                      fontSize="text-2xl max-sm:text-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-wrap mb-6">
                      {hobbies &&
                        hobbies.slice(0, 4).map((preference, index) => (
                          <div key={index} className="w-1/2">
                            <Chip
                              text={preference}
                              width="w-40 max-sm:w-32 mb-2"
                            />
                          </div>
                        ))}
                    </div>
                  </div>{" "}
                </div>
                <Divider />
              </div>
              <div className="text-left">
                <div className="flex flex-row gap-2 mb-4 items-center">
                  <BiEdit size={20} />
                  <Title
                    text="Family Background :"
                    fontSize="text-2xl max-sm:text-xl"
                  />
                </div>
                <Description
                  text={family_bg}
                  fontSize="text-lg"
                  fontWeight="font-regular"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEditProfile;

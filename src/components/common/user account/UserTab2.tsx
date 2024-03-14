"use client";
import React from "react";
import Title from "../texts/Title";
import Description from "../texts/Description";
import PrimaryButton from "../buttons/PrimaryButton";
import InteractionButton from "../buttons/InteractionButton";
import ProfilePicture from "../profile/ProfilePicture";
import { MdNavigateNext } from "react-icons/md";

const Usertab2 = () => {
  return (
    <div className="p-4">
      <div
        className="container bg-[#4D194D] h-[870px] relative rounded-xl"
        style={{ maxWidth: "350px" }}
      >
        <div>
          <div className="rounded-xl h-50 overflow-hidden">
            <img
              className="object-cover object-top w-full"
              src="/images/ImageGallery4.jpg"
              alt=""
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-full w-full"
              src="/images/ProfilePicture.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="mt-4">
          <Title
            text="Hiruni Shashikala"
            fontSize="text-lg sm:text-md md:text-xl lg:text-2xl xl:text-3xl"
            center={true}
            fontColor="text-white"
          />
        </div>
        <div className="mt-2">
          <Description
            text="Colombo, Sri Lanka"
            fontSize="text-md sm:text-xs md:text-xs lg:text-sm xl:text-md"
            center={true}
            fontColor="text-white"
          />
        </div>
        <div className="flex justify-center p-2">
          <InteractionButton
            text="Like"
            icon={<img src="/images/ProfileIcon4.png" alt="Icon 2" />}
            label="10"
            width="320px"
            height="50px"
            buttonColor="#ffffff"
            textPosition="left"
          />
        </div>
        <div className="flex justify-center p-2">
          <InteractionButton
            text="Favourites"
            icon={<img src="/images/ProfileIcon5.png" alt="Icon 2" />}
            label="10"
            width="320px"
            height="50px"
            buttonColor="#ffffff"
            textPosition="left"
          />
        </div>
        <div className="flex justify-center p-2">
          <InteractionButton
            text="Messages"
            icon={<img src="/images/ProfileIcon2.png" alt="Icon 2" />}
            label="10"
            width="320px"
            height="50px"
            buttonColor="#ffffff"
            textPosition="left"
          />
        </div>
        <div className="flex justify-center p-2">
          <InteractionButton
            text="Rejected"
            icon={<img src="/images/ProfileIcon6.png" alt="Icon 2" />}
            label="10"
            width="320px"
            height="50px"
            buttonColor="#ffffff"
            textPosition="left"
          />
        </div>
        <div className="flex justify-center p-2">
          <InteractionButton
            text="Super Requests"
            icon={<img src="/images/ProfileIcon3.png" alt="Icon 2" />}
            label="10"
            width="320px"
            height="50px"
            buttonColor="#ffffff"
            textPosition="left"
          />
        </div>
        <div className="flex justify-center p-2">
          <InteractionButton
            text="Notifications"
            icon={<img src="/images/ProfileIcon3.png" alt="Icon 2" />}
            label="10"
            width="320px"
            height="50px"
            buttonColor="#ffffff"
            textPosition="left"
          />
        </div>
        <div className="mt-2">
          <Description
            text="Recently View"
            fontSize="text-lg sm:text-xs md:text-xs lg:text-md xl:text-md"
            center={true}
            fontColor="text-white"
          />
        </div>
        <div className="flex mx-1 mt-3">
          <div className="mx-auto w-10 h-10 relative border-1 rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-full w-full"
              src="/images/ProfilePicture.jpg"
              alt=""
            />
          </div>
          <div className="mx-auto w-10 h-10 relative border-1 rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-full w-full"
              src="/images/ProfilePicture.jpg"
              alt=""
            />
          </div>
          <div className="mx-auto w-10 h-10 relative border-1 rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-full w-full"
              src="/images/ProfilePicture.jpg"
              alt=""
            />
          </div>
          <div className="mx-auto w-10 h-10 relative border-1 rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-full w-full"
              src="/images/ProfilePicture.jpg"
              alt=""
            />
          </div>
          <div className="mx-auto w-10 h-10 relative border-1 rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-full w-full"
              src="/images/ProfilePicture.jpg"
              alt=""
            />
          </div>
          <div className="mt-2">
            <MdNavigateNext className="text-white text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usertab2;

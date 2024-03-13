"use client";
import React, { useRef } from "react";
import Title from "../texts/Title";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import { IoIosClose, IoIosCloudUpload } from "react-icons/io";

const AddVideos = () => {
  const containerStyle = {
    backgroundImage: `url('/images/Uploadbg.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // Create a ref for the file input
  const fileInputRef = useRef(null);

  // Function to trigger file input click
  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex items-center justify-center h-screen p-6">
      <div
        className="container rounded-xl p-8 sm:p-6 md:p-6 lg:p-10 xl:p-12
             max-w-[800px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]
             w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[80%] 3xl:w-[80%]
             h-auto sm:h-[50%] md:h-[60%] lg:h-[70%] xl:h-[80%] 3xl:h-[80%]"
        style={{ ...containerStyle }}
      >
        <div className="p-6 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <Title
            text="Add Videos"
            fontSize="text-lg sm:text-md md:text-xl lg:text-2xl xl:text-4xl"
            center={true}
            fontColor="text-[#4D194D]"
          />
        </div>

        <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-25 lg:w-30 lg:h-30 xl:w-45 xl:h-45 2xl:w-50 2xl:h-50 relative">
          <div
            className="mx-auto w-full h-full relative mt-10"
            style={{
              backgroundImage: 'url("/images/Uploadbg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              <img
                className="object-cover object-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40"
                src="/images/Avatar.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => console.log(e.target.files)}
          />
          <PrimaryButton
            label="Choose File"
            bgColor="bg-[#4D194D]"
            textColor="text-white"
            fontSize="text-xs sm:text-xs md:text-md lg:text-lg"
            height="h-10 xl:h-12"
            width="w-auto xl:w-40"
            radius="rounded-xl"
            icon={<IoIosCloudUpload size={20} />}
            iconPosition="right"
            onClick={handleChooseFile}
          />
        </div>
        <div className="p-2 flex items-center justify-center">
          <p className="text-[#4D194D]">No File Selected</p>
        </div>
        <div className=" flex justify-end">
          <SecondaryButton
            label="Add Images"
            height="h-10 xl:h-12"
            width="w-auto xl:w-40"
            radius="rounded-xl"
            onClick={handleChooseFile}
          />
        </div>
      </div>
    </div>
  );
};

export default AddVideos;

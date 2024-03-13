"use client";
import React, { useRef, useState } from "react";
import Title from "../texts/Title";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import { IoIosClose, IoIosCloudUpload } from "react-icons/io";
import PopupwithIco from "../../modals/PopupwithIco";
import { FiHeart } from "react-icons/fi";


interface ProfilePicUploadProps {
  title?: string;
  defaultAvatarImage?: string;
  backgroundImage?: string;
  onUpload?: (file: File | null) => void;
  image?: File | null;
}

const ProfilePicUpload: React.FC<ProfilePicUploadProps> = ({
  title = "Upload Your Profile Image",
  defaultAvatarImage = "/images/Avatar.png",
  backgroundImage = "/images/Uploadbg.png",
  onUpload = () => {},
  image = null,
}) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = () => {
    setIsPopupOpen(true);
    onUpload(selectedFile);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const [showAddImages, setShowAddImages] = useState<boolean>(false);

 const handleNextClick = () => {
   closePopup();
   setShowAddImages(true);
   console.log("showAddImages:", showAddImages);
 };
 console.log("Rendering ProfilePicUpload with showAddImages:", showAddImages);



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
            text={title}
            fontSize="text-lg sm:text-md md:text-xl lg:text-2xl xl:text-4xl"
            center={true}
            fontColor="text-[#4D194D]"
          />
        </div>

        <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-25 lg:w-30 lg:h-30 xl:w-45 xl:h-45 2xl:w-50 2xl:h-50 relative">
          <div
            className="mx-auto w-full h-full relative mt-10"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
              {selectedFile || image ? (
                <div>
                  <img
                    className="object-cover object-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40"
                    src={
                      selectedFile
                        ? URL.createObjectURL(selectedFile)
                        : URL.createObjectURL(image as File)
                    }
                    alt=""
                  />
                  <button
                    className="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-white text-xs"
                    onClick={handleRemoveFile}
                  >
                    <IoIosClose size={16} />
                  </button>
                </div>
              ) : (
                <img
                  className="object-cover object-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40"
                  src={defaultAvatarImage}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 p-6 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <SecondaryButton
            label="Take Photo"
            fontSize="text-xs sm:text-xs md:text-md lg:text-lg"
            height="h-10 xl:h-12"
            width="w-auto xl:w-40"
            radius="rounded-xl"
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
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
        <div className="flex justify-end">
          <SecondaryButton
            label="Upload"
            height="h-10 xl:h-12"
            width="w-auto xl:w-40"
            radius="rounded-xl"
            onClick={handleUpload}
          />
        </div>

        {/* Open PopupWithIcon when isPopupOpen is true */}
        <PopupwithIco
          icon={<FiHeart />} // Replace FiHeart with your actual icon component
          title="You have successfully uploaded
the Profile Image!"
          primaryButtonText="Next"
          isOpen={isPopupOpen}
          onClose={closePopup}
          onPrimaryClick={() => {
          closePopup();
          }}
        />
        {showAddImages ? <div>Show AddImages component</div> : null}
      </div>
    </div>
  );
};

export default ProfilePicUpload;

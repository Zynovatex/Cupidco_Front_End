import React, { useState } from "react";
import SecondaryButton from "../common/buttons/SecondaryButton";
import FullImageGallery from "./FullImageGallery";

const ImageGallery = () => {
  const images = [
    "/images/ImageGallery1.jpg",
    "/images/ImageGallery2.jpg",
    "/images/ImageGallery3.jpg",
    "/images/ImageGallery4.jpg",
    "/images/ImageGallery5.jpg",
    "/images/ImageGallery6.jpg",
    "/images/ImageGallery1.jpg",
    "/images/ImageGallery2.jpg",
    "/images/ImageGallery3.jpg",
  ];

  const [showFullImageGallery, setShowFullImageGallery] = useState(false);

  const handleViewMoreClick = () => {
    setShowFullImageGallery(true);
  };

  const handleCloseFullImageGallery = () => {
    setShowFullImageGallery(false);
  };

  return (
    <div className="container mx-auto p-2 w-full h-full">
      <div className="h-[600px] overflow-y-auto sm:p-5">
        <div className="columns-1 gap-2 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 p-2 [&>img:not(:first-child)]:mt-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="rounded-lg"
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end items-center mt-2">
        <SecondaryButton
          label="View More"
          width="w-[14%]"
          height="p-2"
          fontSize="md"
          onClick={handleViewMoreClick}
          radius="rounded-xl"
        />
      </div>

      {showFullImageGallery && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
          <FullImageGallery />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

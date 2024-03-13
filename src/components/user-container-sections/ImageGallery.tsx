
"use client";
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
    <div
      className="container mx-auto p-2 overflow-y-auto bg-[#FFF4F1] max-h-[600px]"
      style={{ maxWidth: "700px" }}
    >
      <div className="p-5 sm:p-5">
        <div className="columns-1 gap-2 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="rounded-lg"
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex justify-end items-center mt-2">
          <SecondaryButton
            label="View More"
            width="50px"
            height="65px"
            fontSize="md"
            onClick={handleViewMoreClick}
          />
        </div>
      </div>

      {showFullImageGallery && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
          <FullImageGallery onClose={handleCloseFullImageGallery} />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

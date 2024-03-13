"use client";
import React from "react";

const FullImageGallery = () => {
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
    "/images/ImageGallery4.jpg",
    "/images/ImageGallery5.jpg",
    "/images/ImageGallery6.jpg",
    "/images/ImageGallery1.jpg",
    "/images/ImageGallery2.jpg",
    "/images/ImageGallery3.jpg",
    "/images/ImageGallery4.jpg",
    "/images/ImageGallery5.jpg",
    "/images/ImageGallery6.jpg",
    "/images/ImageGallery1.jpg",
    "/images/ImageGallery2.jpg",
    "/images/ImageGallery3.jpg",
    "/images/ImageGallery4.jpg",
    "/images/ImageGallery5.jpg",
    "/images/ImageGallery6.jpg",
    "/images/ImageGallery1.jpg",
    "/images/ImageGallery2.jpg",
    "/images/ImageGallery3.jpg",
    "/images/ImageGallery4.jpg",
    "/images/ImageGallery5.jpg",
    "/images/ImageGallery6.jpg",
    "/images/ImageGallery1.jpg",
    "/images/ImageGallery2.jpg",
    "/images/ImageGallery3.jpg",
    "/images/ImageGallery4.jpg",
    "/images/ImageGallery5.jpg",
    "/images/ImageGallery6.jpg",
  ];
  

  return (
    <div
      className="container mx-auto p-2 overflow-y-auto bg-[#FFF4F1] max-h-[700px]"
      style={{ maxWidth: "700px" }}
    >
      <div className="text-center bg-[#4D194D] p-4 flex justify-between items-center">
        <button onClick={() => console.log("Back button clicked")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="text-white flex-grow">Image Gallery</h2>
      </div>
      <div className="p-5 sm:p-5">
        <div className="columns-1 gap-2 sm:columns-2 sm:gap-2 md:columns-4 lg:columns-5 [&>img:not(:first-child)]:mt-2">
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
    </div>
  );
};

export default FullImageGallery;

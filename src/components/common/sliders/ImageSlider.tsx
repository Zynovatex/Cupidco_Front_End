"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

interface ImageSliderProps {
  imageUrls: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState<number | null>(null);
  const [urls, setUrls] = useState([...imageUrls]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const defaultImage = "images/DefaultImage.png";

  useEffect(() => {
    setUrls(imageUrls.length > 0 ? [...imageUrls] : [defaultImage]);
  }, [imageUrls]);

  useEffect(() => {
    if (currentIndex >= urls.length) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(urls.length - 1);
    }
  }, [currentIndex, urls]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const removeImage = (index: number) => {
    const filteredUrls = urls.filter((_, i) => i !== index);
    setUrls(filteredUrls.length > 0 ? filteredUrls : [defaultImage]);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setStartTouch(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startTouch === null) {
      return;
    }

    const touch = e.touches[0];
    const diff = startTouch - touch.clientX;
    if (diff > 50) {
      goToNext();
      setStartTouch(null);
    } else if (diff < -50) {
      goToPrevious();
      setStartTouch(null);
    }
  };

  const isDefaultImage = urls[currentIndex] === defaultImage;

  return (
    <div
      className="relative flex w-full items-center justify-center"
      ref={sliderRef}
    >
      <div
        className="
          relative
          w-full
          sm:w-1/2 md:w-2/5
          lg:w-1/3
        "
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {urls.map((url, index) => (
          <div
            key={index}
            className={`relative w-full h-0 pb-[130%] overflow-hidden ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <img
              src={url}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              alt={`Slide ${index}`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            />
            {!isDefaultImage && (
              <button
                className="
                  absolute 
                  top-2 right-2
                  text-white 
                  hover:bg-primary-purple
                  rounded-full 
                  p-1 
                  text-xs 
                  sm:p-1.5 sm:text-sm 
                  md:p-2 md:text-base
                "
                onClick={() => removeImage(index)}
                aria-label="Remove image"
              >
                <FiX
                  className="
                    w-4 h-4 
                    sm:w-5 sm:h-5 
                    md:w-6 md:h-6
                  "
                />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        className="
          absolute
          top-1/2 left-0 
          transform -translate-y-1/2 
          bg-primary-purple text-white 
          rounded-full p-2 hidden 
          sm:block sm:left-5 
          md:left-32 lg:left-56
        "
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        className="
          absolute 
          top-1/2 right-0 
          transform -translate-y-1/2 
          bg-primary-purple text-white 
          rounded-full p-2 hidden 
          sm:block sm:right-5 
          md:right-32 lg:right-56
        "
        onClick={goToNext}
        aria-label="Next slide"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageSlider;

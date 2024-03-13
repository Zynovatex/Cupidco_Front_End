'use client';

import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

interface VideoSliderProps {
  videoUrls: string[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videoUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState<number | null>(null);
  const [urls, setUrls] = useState([...videoUrls]);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const removeVideo = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
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

  return (
    <div
      className="relative w-full flex items-center justify-center"
      ref={sliderRef}
    >
      <div
        className="w-full sm:w-[50%] md:w-[40%] lg:w-[30%] relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {urls.map((url, index) => (
          <div
            key={url}
            className={`w-full  object-cover relative ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <video
              src={url}
              className="w-full rounded-md"
              controls
              title={`Slide ${index}`}
            />
            <button
              className="absolute top-2 right-2 text-white hover:bg-primary-purple rounded-full p-1 text-2xl sm:p-1.5 sm:text-sm md:p-2 md:text-base"
              onClick={() => removeVideo(index)}
              aria-label="Remove video"
            >
              <FiX className="w-4h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        ))}
      </div>
      {urls.length > 1 && (
        <>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary-purple rounded-full p-2 text-white hidden sm:flex sm:left-20 md:left-32 lg:left-64"
            onClick={goToPrevious}
            aria-label="Previous video"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary-purple rounded-full p-2 text-white hidden sm:flex sm:right-20 md:right-32 lg:right-64"
            onClick={goToNext}
            aria-label="Next video"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default VideoSlider;

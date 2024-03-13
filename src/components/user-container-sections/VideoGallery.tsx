"use client";
import React, { useState } from "react";
import SecondaryButton from "../common/buttons/SecondaryButton";
import FullVideoGallery from "./FullVideoGallery";

const VideoGallery = () => {
  const videos = [
    "https://player.vimeo.com/external/372194111.sd.mp4?s=1140b4499879fb28964f675440c342643ad2baec&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/222141045.sd.mp4?s=0d637b90897e749727ef3af71151bdeaad05d2a2&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/372185466.sd.mp4?s=7eca44c53e40b194e5d3900dd2371d95dc098b25&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/334707045.sd.mp4?s=bd2d3f575defee942e4cb9d0e2358c388605ebd3&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/327135247.sd.mp4?s=16ebc8ccbb967cc3ea1a15ebda49874dd3fba11c&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/374105373.sd.mp4?s=61e584a3eefc4cc81393718aa3e84c9651c1b4fc&profile_id=164&oauth2_token_id=57447761",
  ];
  const [showFullVideoGallery, setShowFullVideoGallery] = useState(false);

  const handleViewMoreClick = () => {
    setShowFullVideoGallery(true);
  };

  const handleCloseFullVideoGallery = () => {
    setShowFullVideoGallery(false);
  };

  return (
    <div
      className="container mx-auto p-2 overflow-y-auto bg-[#FFF4F1] max-h-[600px]"
      style={{ maxWidth: "700px" }}
    >
      <div className="p-5 sm:p-5">
        <div className="columns-1 gap-4 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>video:not(:first-child)]:mt-5">
          {videos.map((video, index) => (
            <video controls className="rounded-lg" key={index}>
              <source src={video} />
            </video>
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
      {showFullVideoGallery && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
          <FullVideoGallery onClose={handleCloseFullVideoGallery} />
        </div>
      )}
    </div>
  );
};

export default VideoGallery;

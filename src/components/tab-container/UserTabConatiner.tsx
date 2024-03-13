import About from "@/app/(pages)/about/page";
import React, { useState } from "react";
import VideoGallery from "../user-container-sections/VideoGallery";
import ImageGallery from "../user-container-sections/ImageGallery";
import Requirements from "../user-container-sections/Requirements";
import UserAbout from "../user-container-sections/UserAbout";

const tabs = [
  { id: "about", label: "About" },
  { id: "photos", label: "Photos" },
  { id: "Videos", label: "Videos" },
  { id: "requirements", label: "Requirements & Others" },
];

const UserTabContainer = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container ml-8 w-full">
      <div className="flex -mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 p-8 focus:outline-none font-playfair-display text-xl ${
              activeTab === tab.id
                ? "bg-[#4D194D] text-white text-bold"
                : "bg-[#4D194D] text-gray-500"
            } ${tab.id === "about" ? "rounded-tl-md" : ""} ${
              tab.id === "requirements" ? "rounded-tr-md" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-[#FFF4F1] p-4 rounded-lg shadow w-full h-full">
        {/* Content for each tab */}
        {activeTab === "about" && <UserAbout />}
        {activeTab === "photos" && <ImageGallery />}
        {activeTab === "Videos" && <VideoGallery />}
        {activeTab === "requirements" && <Requirements />}
      </div>
    </div>
  );
};

export default UserTabContainer;

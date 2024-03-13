"use cliet";
import About from "@/components/user-container-sections/UserAbout";
import VideoGallery from "@/components/user-container-sections/FullVideoGallery";
import ImageGallery from "@/components/user-container-sections/ImageGallery";
import RequirementsAndOthers from "@/components/user-container-sections/Requirements";
import React, { useState } from "react";


const tabs = [
  { id: "about", label: "About" },
  { id: "photos", label: "Photos" },
  { id: "Videos", label: "Videos" },
  { id: "Requirements & others", label: "Requirements & others" },
];

const userContainer = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container mx-auto p-4 max-w-screen-md">
      <div className="flex -mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 focus:outline-none ${
              activeTab === tab.id
                ? "bg-[#4D194D] text-white text-bold"
                : "bg-[#4D194D] text-gray-500"
            } ${tab.id === "about" ? "rounded-tl-lg" : ""} ${
              tab.id === "others" ? "rounded-tr-md" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-[#FFF4F1] p-4 rounded-lg shadow h-[600px]">
        {/* Content for each tab */}
        {activeTab === "about" && <About />}
        {activeTab === "photos" && <ImageGallery />}
        {activeTab === "Videos" && <VideoGallery />}
        {activeTab === "requirements & others" && <RequirementsAndOthers />}
      </div>
    </div>
  );
};

export default userContainer;

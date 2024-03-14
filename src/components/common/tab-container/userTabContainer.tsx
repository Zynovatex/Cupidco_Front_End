"use cliet";
import About from "@/app/(pages)/about/page";
import VideoGallery from "@/components/user-container-sections/FullVideoGallery";
import ImageGallery from "@/components/user-container-sections/ImageGallery";
import Requirements from "@/components/user-container-sections/Requirements";
import React, { useState } from "react";

const tabs = [
  { id: "about", label: "About" },
  { id: "photos", label: "Photos" },
  { id: "Videos", label: "Videos" },
  { id: "requirements", label: "Requirements & Others" },
];

const userTabContainer = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container ml-8">
      <div className="flex -mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 p-5 focus:outline-none ${
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
      <div
        className="bg-[#FFF4F1] p-4 rounded-lg shadow"
        style={{ width: "100%", height: "800px" }}
      >
        {/* Content for each tab */}
        {activeTab === "about" && <About />}
        {activeTab === "photos" && <ImageGallery />}
        {activeTab === "Videos" && <VideoGallery />}
        {activeTab === "requirements" && <Requirements />}
      </div>
    </div>
  );
};

export default userTabContainer;

'use client';

import DashboardCard from '@/components/common/cards/DashboardCard';
import React from 'react';

const ParentComponent = () => {
  const images = [
    "/images/ImageGallery1.jpg",
    "/images/ImageGallery2.jpg",
    "/images/ImageGallery3.jpg",
  ];

  const profiles = [
    {
      images: images,
      name: "John Doe",
      address: "Colombo",
      age: "30",
      isPremium: true,
      aboutMe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      interests: ["Painting", "Chess", "Reading", "Football", "Watching Movies"]
    },
    {
      images: images,
      name: "Emy",
      address: "Colombo",
      age: "35",
    },
    // Add more profiles if needed
  ];


  return (
    <div className='p-10'>
      {/* Render DashboardCard and pass profiles as props */}
      <DashboardCard profiles={profiles} />
    </div>
  );
};

export default ParentComponent;

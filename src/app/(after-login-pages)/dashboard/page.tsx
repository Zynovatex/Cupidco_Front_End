'use client';

import { useState } from 'react';
import DashboardCard from "@/components/common/cards/DashboardCard";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 16;

    const images = [
        "/images/ImageGallery1.jpg",
        "/images/ImageGallery2.jpg",
        "/images/ImageGallery3.jpg",
    ];

    const profiles = [
      {
        images: images,
        name: "John Doe",
        address: "Anuradhapura",
        age: "30",
        isPremium: true,
        aboutMe:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        interests: [
          "Painting",
          "Chess",
          "Reading",
          "Football",
          "Watching Movies",
        ],
      },
      {
        images: images,
        name: "Emy",
        address: "Colombo",
        age: "35",
      },
      {
        images: images,
        name: "John Doe",
        address: "Kandy",
        age: "30",
        isPremium: true,
        aboutMe:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        interests: [
          "Painting",
          "Chess",
          "Reading",
          "Football",
          "Watching Movies",
        ],
      },
      {
        images: images,
        name: "John Doe",
        address: "Colombo",
        age: "30",
        isPremium: true,
        aboutMe:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        interests: [
          "Painting",
          "Chess",
          "Reading",
          "Football",
          "Watching Movies",
        ],
      },
      {
        images: images,
        name: "John Doe",
        address: "Colombo",
        age: "30",
        isPremium: true,
        aboutMe:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        interests: [
          "Painting",
          "Chess",
          "Reading",
          "Football",
          "Watching Movies",
        ],
      },
      {
        images: images,
        name: "John Doe",
        address: "Colombo",
        age: "30",
        isPremium: true,
        aboutMe:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        interests: [
          "Painting",
          "Chess",
          "Reading",
          "Football",
          "Watching Movies",
        ],
      },
      // More profiles...
    ];

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const profilesToShow = profiles.slice(startIndex, endIndex);

    const totalPages = Math.ceil(profiles.length / cardsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="relative min-h-screen flex flex-col justify-start py-20 px-10 items-center text-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 bg-cover">
                    <Image
                        src="/images/Defaultbg.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        alt="Background"
                        priority
                    />
                </div>

                {/* Contents */}
                <div className="relative">
                    {/* Profile Cards */}
                    <div className="relative flex flex-wrap">
                        <DashboardCard profiles={profilesToShow} />
                    </div>

                    {/* Pagination controls */}
                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="mr-2 px-3 py-1 bg-white text-primary-purple rounded hover:bg-opacity-40"
                        >
                            <AiOutlineLeft />
                        </button>

                        {/* Show the first three page numbers */}
                        {Array.from({ length: Math.min(totalPages, 3) }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`mx-1 px-3 py-1 ${currentPage === index + 1
                                    ? 'bg-primary-purple text-white rounded'
                                    : 'bg-white text-primary-purple rounded hover:bg-opacity-40'
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        {/* Show ellipsis if there are more than three pages */}
                        {totalPages > 3 && currentPage > 3 && (
                            <span className="mx-1 px-3 py-1 bg-primary-purple text-white rounded">{currentPage}</span>
                        )}
                        {totalPages > 3 && currentPage <= 3 && <span className="mx-1">...</span>}
                        {/* Show the last page number */}
                        <button
                            onClick={() => setCurrentPage(totalPages)}
                            className={`mx-1 px-3 py-1 ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-800 rounded'
                                : 'bg-gray-200 text-gray-800 rounded'
                                }`}
                        >
                            {totalPages}
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="ml-2 px-3 py-1 bg-white text-primary-purple rounded hover:bg-opacity-40"
                        >
                            <AiOutlineRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
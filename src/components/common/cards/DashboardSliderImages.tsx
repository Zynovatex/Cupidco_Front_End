/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

interface DashboardSLiderImagesProps {
    image: string;
}

const DashboardSLiderImages: React.FC<DashboardSLiderImagesProps> = ({ image }) => {
    return (
        <div className="relative flex items-center justify-center">
            <img
                src={image}
                alt="Slider Image"
                className='rounded-t-2xl h-[300px] w-[300px] object-fill'
            />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary-purple to-transparent opacity-50"></div>
        </div>
    );
};

export default DashboardSLiderImages;

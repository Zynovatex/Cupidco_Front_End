/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

interface DashboardSLiderImagesProps {
    image: string;
}

const DashboardSLiderImages: React.FC<DashboardSLiderImagesProps> = ({ image }) => {
    return (
        <div className="flex items-center justify-center">
            <img
                src={image}
                alt="Slider Image"
                className='rounded-t-xl h-[350px] w-[400px] object-fill'
            />
        </div>
    );
};

export default DashboardSLiderImages;

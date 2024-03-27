/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import React from 'react';

interface DashboardSLiderImagesProps {
    image: string;
}

const DashboardSLiderImages: React.FC<DashboardSLiderImagesProps> = ({ image }) => {
    return (
        <div className="relative flex items-center justify-center">
            <Image
                src={image}
                width={300}
                height={300}
                alt={"Images"}
                objectFit="cover"
                className="rounded-md aspect-square"
            />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-primary-purple to-transparent opacity-50"></div>
        </div>
    );
};

export default DashboardSLiderImages;

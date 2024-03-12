'use client';

import React from 'react';
import Image from 'next/image';

interface HomeSliderCardProps {
    image: string;
}

const HomeSliderCard: React.FC<HomeSliderCardProps> = ({ image }) => {
    return (
        <div className="flex items-center justify-center">
            <Image
                src={image}
                alt="Slider Image"
                width={400}
                height={250}
                layout="responsive"
                className='rounded-xl'
            />
        </div>
    );
};

export default HomeSliderCard;
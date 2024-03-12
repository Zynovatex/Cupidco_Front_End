'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReviewCard from '../../cards/ReviewCard';

interface ReviewSliderProps {
    reviews: { description: string; image: string; name: string }[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
        >
            {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <ReviewCard
                        description={review.description}
                        image={review.image}
                        name={review.name}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ReviewSlider;

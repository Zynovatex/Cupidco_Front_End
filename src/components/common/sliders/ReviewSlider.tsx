'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ReviewCard from '../cards/ReviewCard';
import { Autoplay } from "swiper/modules";

interface ReviewSliderProps {
    reviews: { description: string; image: string; name: string }[];
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({ reviews }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            loop={true}
            className='Review-Swiper rounded-lg'
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

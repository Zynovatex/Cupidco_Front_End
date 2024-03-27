import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, EffectFlip } from "swiper/modules";
import HomeSliderCard from "../cards/HomeSLiderCard";
 
interface HomeFlipSliderProps {
  images: string[];
}

const HomeFlipSlider: React.FC<HomeFlipSliderProps> = ({ images }) => {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        modules={[EffectFlip, Autoplay]}
        cubeEffect={{
          shadow: true,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center shadow-2xl"
          >
            <HomeSliderCard image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeFlipSlider;

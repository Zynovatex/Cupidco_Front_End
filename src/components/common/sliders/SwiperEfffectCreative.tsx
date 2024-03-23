import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCreative } from "swiper/modules";
import HomeSliderCard from "../cards/HomeSLiderCard";

interface HomeFlipSliderProps {
  images: string[];
}

const SwiperEfffectCreative: React.FC<HomeFlipSliderProps> = ({ images }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center shadow-2xl "
          >
            <HomeSliderCard image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperEfffectCreative;

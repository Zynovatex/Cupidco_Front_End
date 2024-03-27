import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";import HomeSliderCard from "../cards/HomeSLiderCard";

interface HomeFlipSliderProps {
  images: string[];
}

const HomeSwiper: React.FC<HomeFlipSliderProps> = ({ images }) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
         modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide-with-shadow">
            <div className="shadow-lg">
              <HomeSliderCard image={image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSwiper;

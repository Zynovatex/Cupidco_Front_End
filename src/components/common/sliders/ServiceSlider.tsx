import React, { useState, useEffect, useRef } from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import Description from "../texts/Description";
import Title from "../texts/Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Autoplay } from "swiper/modules";


type CardComponentProps = {
  overlayTitle: string;
  gradientTitle: string;
  descriptionText: string;
  buttonText: string;
  onButtonClick: () => void;
  image: string;
};

const CardComponent: React.FC<CardComponentProps> = ({
  overlayTitle,
  gradientTitle,
  descriptionText,
  buttonText,
  onButtonClick,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const overlayBaseClasses =
    "absolute inset-0 p-5 flex flex-col justify-center items-center text-center text-white bg-primary-purple px-10 transition-all duration-800 space-y-5 max-sm:space-y-5 sm:space-y-5 md:p-4 md:space-y-2 xl:p-12";
  const overlayHoverClasses = isHovered
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-full";

  const gradientBaseClasses =
    "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-purple to-transparent h-40 p-2 transition-opacity duration-800";
  const gradientHoverClasses = isHovered ? "opacity-0" : "opacity-100";

  const blackoverlay = "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-60 rounded-2xl transition-all duration-800";

  return (
    <div
      className="
        relative overflow-hidden rounded-2xl  
        w-full pb-[120%] h-[100%] group
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-cover bg-center">
        <Image
          src={image}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 group-hover:opacity-75"
        />
      </div>

      {/* Additional overlay */}
      <div className={`${blackoverlay}`} />

      {/* Overlay content */}
      <div className={`${overlayBaseClasses} ${overlayHoverClasses}`}>
        {/* Title */}
        <Title
          text={overlayTitle}
          center={true}
          fontColor="text-white"
          fontWeight="font-bold"
          fontSize=" text-2xl max-sm:text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl"
        />
        {/* Description */}
        <Description
          text={descriptionText}
          center={true}
          fontColor="text-white"
          fontSize=" text-sm max-sm:text-xs sm:text-md md:text-xs lg:text-sm xl:text-sm md:p-2"
          fontFamily="font-Quicksand"
          fontWeight="font-medium"
        />
        {/* Button */}
        <SecondaryButton
          label={buttonText}
          invert={true}
          height="p-2 sm:p-1 max-sm:p-1 xl:p-1"
          width="w-32 max-sm:w-25 xl:w-40"
          radius="rounded-md"
          fontSize="
            text-md 
            max-sm:text-xs 
            am:text-xs
            md:text-sm
            lg:text-md
            xl:text-lg 
          "
        />
      </div>

      {/* Gradient overlay */}
      <div className={`${gradientBaseClasses} ${gradientHoverClasses}`}>
        <div className="absolute bottom-3 left-0 right-0 p-1 mb-1 md:p-0 lg:p-1">
          <Title
            text={gradientTitle}
            center={true}
            fontColor="text-white"
            fontSize="max-sm:text-xs text-2xl sm:text-sm md:text-lg lg:text-xl"
          />
        </div>
      </div>
    </div>
  );
};

type CardData = {
  overlayTitle: string;
  gradientTitle: string;
  descriptionText: string;
  buttonText: string;
  image: string;
};

type SwiperInstance = any;

const SliderComponent = () => {
  const [cardsData, setCardsData] = useState<CardData[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://65e02f84d3db23f762488898.mockapi.io/api/v1/cupidco/service-card"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCardsData(data); // Assuming the data returned from the API is an array of card objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const handlePaginationClick = (index: number) => {
    if (swiperRef.current && index !== activeIndex) {
      swiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="w-[90%]"
        modules={[Autoplay]}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="mb-10">
              <CardComponent
                overlayTitle={card.overlayTitle}
                gradientTitle={card.gradientTitle}
                descriptionText={card.descriptionText}
                buttonText={card.buttonText}
                onButtonClick={() => { }}
                image={card.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="relative bottom-2 left-0 right-0 flex justify-center md:space-x-3 space-x-2 cursor-pointer">
        {cardsData.map((_, index) => (
          <div
            key={index}
            className={`md:w-4 md:h-4 w-3 h-3 rounded-full transition transform duration-1000 ease-linear ${index === activeIndex ? 'bg-primary-purple' : 'bg-primary-purple opacity-10'}`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;

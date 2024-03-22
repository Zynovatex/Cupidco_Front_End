'use client';

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

interface SwiperNavButtonsProps {
    slidePrev: () => void;
    slideNext: () => void;
}

export const SwiperNavButtons: React.FC<SwiperNavButtonsProps> = ({ slidePrev, slideNext }) => {
    return (
        <div className="absolute inset-0 flex items-center pointer-events-none">
            <button className="absolute left-0 top-1/2 transform -translate-y-16 z-10 p-1 pointer-events-auto text-primary-purple" onClick={slidePrev}>
                <IoIosArrowDropleftCircle size={18} />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-16 z-10 p-1 pointer-events-auto text-primary-purple " onClick={slideNext}>
                <IoIosArrowDroprightCircle size={18} />
            </button>
        </div>
    );
}
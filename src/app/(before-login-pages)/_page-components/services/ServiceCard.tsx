import React from "react";
import Image from "next/image";
import { FaExpandAlt } from "react-icons/fa";
import Title from "@/components/common/texts/Title";
import Description from "@/components/common/texts/Description";

interface ServicesCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  const truncate = (str: string, num: number) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  const truncatedDescription = truncate(description, 332);

  return (
    <div className="w-full bg-primary-purple shadow-md rounded-2xl p-4 sm:p-6 xl:pl-10 flex flex-col sm:flex-row relative space-y-4 sm:space-y-0">
      {/* Image container */}
      <div className="self-center sm:absolute sm:-top-8 sm:-left-8 w-20 h-20 rounded-full overflow-hidden">
        <Image
          src={imageSrc}
          alt="Service"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      {/* Title container */}
      <div className="text-center lg:mr-5 sm:text-left sm:w-1/4 sm:pr-10 sm:pl-8 md:pl-7 lg:pl-7 flex flex-col justify-center max-sm:items-center max-sm:text-center ">
        <Title text={title} fontColor="text-white" fontSize="text-lg" />
      </div>

      {/* Description container */}
      <div className="flex-grow sm:border-l-2 sm:pl-2 border-white flex flex-col justify-center lg:pl-5 max-sm:items-center max-sm:text-center ">
        <Description
          text={truncatedDescription}
          fontColor="text-white"
          fontSize="text-sm"
        />
      </div>
      {/* Expand Icon */}
      <div className="absolute bottom-4 right-4 cursor-pointer">
        <FaExpandAlt size="1em" className="text-white" />
      </div>
    </div>
  );
};

export default ServicesCard;

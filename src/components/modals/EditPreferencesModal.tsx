"use client";

import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Title from "../common/texts/Title";
import Chip from "../common/chip/Chip";

interface EditPreferencesModalProps {
  titleText: string;
  chipText: string;
  labelText: string;
}

const EditPreferencesModal: React.FC<EditPreferencesModalProps> = ({
  titleText,
  chipText,
  labelText,
}) => {
  return (
    <div
      className="
        relative rounded-2xl shadow-lg overflow-hidden
        w-full max-sm:w-4/5 sm:w-4/5 md:w-4/6 lg:w-1/2 xl:w-2/6 max-sm:w-5/5 py-28 md:py-28 
        mx-auto xl:p-16 sm:p-10 bg-opacity-80 max-sm:h-[10%]
        sm:min-h-0 sm:h-auto p-20 xl:py-28
      "
    >
      <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none">
        <IoCloseSharp className="h-6 w-6" />
      </button>
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HomeSc2.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Background"
          priority
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6">
        <div className="text-left underline">
          <Title text={titleText} fontSize="text-xl" />
        </div>
        <div className="flex justify-between w-full px-20 max-sm:px-10">
          <div>
            <Title text={labelText} fontSize="text-xl" />
          </div>
          <div>
            <Chip text={chipText} />
          </div>
        </div>
        <PrimaryButton
          label="Save"
          fontSize="text-lg"
          height="p-1"
          width="w-[20%] max-sm:w-[30%] mx-5"
          radius="rounded-lg"
        />
      </div>
    </div>
  );
};

export default EditPreferencesModal;

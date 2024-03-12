"use client";
import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import Image from "next/image";

// const accordionData: AccordionData[] = [
//   {
//     id: "1",
//     title: "Accordion Item 1",
//     description: "Description for Accordion Item 1",
//   },
//   {
//     id: "2",
//     title: "Accordion Item 2",
//     description: "Description for Accordion Item 2",
//   },
//   {
//     id: "3",
//     title: "Accordion Item 3",
//     description: "Description for Accordion Item 3",
//   }
// ];

interface AccordionData {
  id: string;
  title: string;
  description: string;
}

interface AccordionProps extends AccordionData {
  isOpen: boolean;
  toggleAccordion: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  isOpen,
  toggleAccordion,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col border-1 rounded-xl border-gray-200 bg-[#FFE8F7] w-full">
      <button
        className="flex justify-between rounded-md items-center w-[full] px-4 py-2 text-left text-gray-800 bg-[#F5CEE8] hover:shadow-[#F5CEE8] focus:outline-none shadow-sm"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <div className="mr-6 w-auto h-auto relative">
            <Image
              src="/images/HeartVector.png"
              alt="Heart Icon"
              width={20}
              height={20}
            />
          </div>
          <span className="font-semibold font-playfair-display">{title}</span>
        </div>
        {isOpen ? (
          <IoIosArrowDropup className="w-6 h-6" />
        ) : (
          <IoIosArrowDropdown className="w-6 h-6" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 font-Quicksand text-sm">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

interface AccordionGroupProps {
  accordionData: AccordionData[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ accordionData }) => {
  const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <div className="flex flex-col space-y-4">
      {accordionData.map((item) => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          isOpen={openAccordionId === item.id}
          toggleAccordion={() => toggleAccordion(item.id)}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;

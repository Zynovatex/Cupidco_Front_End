import React, { useState, useRef, useEffect } from "react";
import Title from "../common/texts/Title";
import PrimaryButton from "../common/buttons/PrimaryButton";
import SecondaryButton from "../common/buttons/SecondaryButton";

interface LanguagesProps {
  onClose: (status: boolean) => void;
}

const Languages: React.FC<LanguagesProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsOpen(false);
    onClose(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
      onClose(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-1 px-2 py-20 sm:p-4 md:p-6 lg:p-10">
      <div className="flex justify-center">
        <div
          ref={modalRef}
          className="custom-lg-height custom-lg-width p-4 md:p-10 sm:h-auto sm:w-auto rounded-2xl relative"
          style={{ backgroundImage: "url(/images/FormBg.png)" }}
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="mb-5">
            <Title
              text="Choose a Language"
              center={true}
              fontSize="sm:text-md md:text-xl lg:text-2xl"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <PrimaryButton
              label="English"
              height="py-1"
              width="w-full sm:w-auto"
              radius="rounded-xl"
            />
            <SecondaryButton
              label="English"
              height="py-1"
              width="w-full sm:w-auto"
              radius="rounded-xl"
            />
            <SecondaryButton
              label="English"
              height="py-1"
              width="w-full sm:w-auto"
              radius="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;

import React, { useState, useRef, useEffect } from "react";
import Title from "../common/texts/Title";
import { IoClose } from "react-icons/io5";
import LanguageButton from "./LanguageButton";

interface LanguagesProps {
  onClose: (status: boolean) => void;
  onSelectLanguage: (language: string) => void; // New prop for handling language selection
}

const Languages: React.FC<LanguagesProps> = ({ onClose, onSelectLanguage }) => {
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

  // Function to handle language selection
  const handleLanguageSelect = (language: string) => {
    onSelectLanguage(language);
  };

  return (
    <div className="absolute mt-5 ml-[-300px]">
      <div className="   ">
        <div
          ref={modalRef}
          className=" rounded-xl p-3"
          style={{ backgroundImage: "url(/images/FormBg.png)" }}
        >
          <button className="absolute right-2 top-1   " onClick={handleClose}>
            <IoClose />
          </button>
          <div className=" ">
            <Title
              text="Choose a Language"
              center={true}
              fontSize="sm:text-md md:text-xl lg:text-2xl"
            />
          </div>

          <div className="flex gap-3 mt-2">
            {/* Language buttons with onClick handlers */}
            <LanguageButton
              label={"English"}
              onClick={() => handleLanguageSelect("English")}
            />
            <LanguageButton
              label={"සිංහල"}
              onClick={() => handleLanguageSelect("සිංහල")}
            />
            <LanguageButton
              label={"தமிழ்"}
              onClick={() => handleLanguageSelect("தமிழ்")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;

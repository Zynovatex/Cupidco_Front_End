"use client";

import React, { useEffect, useRef } from "react";
import TextField from "../common/inputs/Input";
import TextArea from "../common/inputs/TextArea";
import Title from "../common/texts/Title";
import PrimaryButton from "../common/buttons/PrimaryButton";
import Logo from "../common/logo/Logo";

interface MiniFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const MiniForm: React.FC<MiniFormProps> = ({ isOpen, onClose }) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`flex justify-center md:w-[50%] w-[80%] ${
        isOpen ? "animate-slideUp" : "animate-slideDown"
      }`}
    >
      <div
        ref={formRef}
        className={`bg-cover w-full rounded-2xl relative p-10 ${
          isOpen ? "" : "transform -translate-y-full"
        }`}
        style={{ backgroundImage: "url(/images/FormBg.png)" }}
      >
        <div className="mb-2">
          <Logo />
        </div>
        <div className="mb-5">
          <Title
            text="Contact us"
            center={true}
            fontSize="text-xl sm:text-3xl lg:text-4xl"
          />
        </div>
        <div className="mt-8 px-4">
          <div className="mb-4">
            <TextField
              name=""
              value=""
              label="Username"
              type="text"
              id="name"
              width="w-full"
              bgColor="bg-transparent"
            />
          </div>
          <div className="mb-4">
            <TextField
              name=""
              value=""
              label="Password"
              type="password"
              id="password"
              bgColor="bg-transparent"
            />
          </div>
          <div className="mb-4">
            <TextArea
              id="opinion"
              label="Your opinion"
              bgColor="bg-transparent"
            />
          </div>
          <div>
            <PrimaryButton
              label="Send"
              height="py-2"
              width="w-full"
              radius="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniForm;

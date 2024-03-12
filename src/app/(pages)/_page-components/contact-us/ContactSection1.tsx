'use client'

import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Description from "@/components/common/texts/Description";
import MiniForm from "@/components/form/Form";
import { useState } from "react";

export default function ContactSection1() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 md:gap-10 justify-center items-center py-28 px-16"
      style={{ backgroundImage: "url(/images/ContactusBg.png)" }}
    >
      <div>
        <img src="/images/ContactExample.png" alt="About Us Image" />
      </div>
      <div className="md:text-center text-justify w-[80%]">
        <Description
          italic={true}
          text="At Cupidco, we believe in the power of love and the beauty of lifelong partnerships. Our mission is to connect individuals on their journey to finding true love, with the ultimate goal of helping them create meaningful and lasting relationships. We are committed to being your trusted companion in your pursuit of marriage and happiness."
        />
      </div>
      <div className="md:w-[20%] w-[full] flex justify-center">
        <PrimaryButton
          label="Contact us"
          fontSize="text-md md:text-md lg:text-xl"
          height="py-2"
          width="w-full"
          radius="rounded-md"
          onClick={handleOpenForm}
        />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <MiniForm isOpen={isOpen} onClose={handleCloseForm} />
        </div>
      )}
    </div>
  );
}

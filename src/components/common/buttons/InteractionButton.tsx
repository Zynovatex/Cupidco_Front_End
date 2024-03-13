"use-client";
import React from "react";
import { FaHeart } from "react-icons/fa";

interface InteractionButtonProps {
  text: string;
  icon?: React.ReactNode;
  label: React.ReactNode;
}

const InteractionButton: React.FC<InteractionButtonProps> = ({
  text,
  icon = <FaHeart />,
  label,
}) => {
  return (
    <div className="flex flex-wrap items-center p-4 border border-[#4d194d] rounded-md bg-[#4d194d]">
      <div className="mr-2 text-white">{icon}</div>
      <div className="flex-grow text-center text-white text-sm w-full sm:w-auto sm:flex-shrink-0">
        {text}
      </div>
      <div className="ml-0 text-white w-full sm:w-auto">
        <div className="flex-col sm:ml-2">{label}</div>
      </div>
    </div>
  );
};

export default InteractionButton;

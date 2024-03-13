"use client";

import React from "react";
import TagAdder from "./TagAdder";
import Title from "../texts/Title";

interface TagAdderModalProps {
  title: string;
  onClose: () => void;
}

const TagAdderModal: React.FC<TagAdderModalProps> = ({ title, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div
        className="relative bg-white rounded-xl p-6"
        style={{
          backgroundImage: 'url("/images/DefaultBg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-75 rounded-xl"></div>

        <div className="relative z-10 flex justify-between items-center mb-4">
          <Title text={title} fontSize="text-2xl" fontWeight="font-bold" />
          <button onClick={onClose} className="text-xl font-semibold">
            &times;
          </button>
        </div>
        <div className="relative z-10">
          <TagAdder />
        </div>
      </div>
    </div>
  );
};

export default TagAdderModal;

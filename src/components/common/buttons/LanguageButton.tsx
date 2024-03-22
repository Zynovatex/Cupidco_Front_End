import React from "react";

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const LanguageButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-PlayfairDisplaylg:text-lg text-base  border-primary-purple px-4 rounded-lg font-extrabold border-2 text-primary-purple hover:bg-primary-purple hover:text-white"
    >
      {label}
    </button>
  );
};

export default LanguageButton;

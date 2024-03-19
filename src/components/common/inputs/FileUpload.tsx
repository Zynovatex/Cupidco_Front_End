"use client";

import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
interface FileUploadProps {
  id: string;
  label: string;
  width: string;
  height: string;
  maxFiles: number;
}

const FileUpload: React.FC<FileUploadProps> = ({
  id,
  label,
  width = "w-full",
  height = "h-64",
  maxFiles,
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFileNames = Array.from(event.target.files).map(
        (file) => file.name
      );
      setFileNames(fileNames.concat(newFileNames).slice(0, maxFiles));
    }
  };

  const removeFile = (fileName: string) => {
    setFileNames(fileNames.filter((name) => name !== fileName));
  };

  const formatFileName = (name: string) => {
    const maxLength = 20;
    const extension = name.split(".").pop();
    if (name.length > maxLength) {
      return `${name.substring(0, maxLength)}...${extension}`;
    }
    return name;
  };

  return (
    <div className={`flex items-center justify-center ${width}`}>
      <label
        htmlFor={id}
        className={`relative flex flex-col items-center justify-center ${width} ${height} border-[1px] border-primary-purple rounded-lg cursor-pointer bg-transparent hover:bg-[#ffe2e2]`}
      >
        {fileNames.length > 0 ? (
          <div
            className={`relative inset-0 flex flex-wrap items-center justify-center p-4 overflow-hidden ${width} ${height}`}
          >
            {fileNames.map((name, index) => (
              <div key={index} className="flex items-center m-1">
                <span
                  className="text-sm text-primary-purple truncate"
                  title={name}
                >
                  {formatFileName(name)}
                </span>
                <button
                  onClick={() => removeFile(name)}
                  className="text-primary-purple hover:text-red-500 ml-2 "
                >
                  <CiCircleRemove size={20} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 max-sm:w-6 max-sm:h-6 max-sm:mb-2 mb-4 text-[#4d194d]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              ></path>
            </svg>
            <p className="mb-2 text-sm max-sm:text-xs font-Quicksand text-[#4d194d]">
              <span className="font-semibold">{label}</span> or drag and drop
            </p>
            <p className="text-xs  font-Quicksand font-medium text-[#4d194d]">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
          </div>
        )}
        <input
          id={id}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUpload;

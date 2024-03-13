'use client';

import React, { useState } from "react";

interface FileUploadProps {
  label: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-[#4d194d] border-solid rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        {fileName ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-700 bg-opacity-70 dark:bg-opacity-70">
            <p className="text-sm text-[#4d194d] dark:text-gray-400">{fileName}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-[#4d194d] dark:text-gray-400"
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
            <p className="mb-2 text-sm text-[#4d194d] dark:text-gray-400">
              <span className="font-semibold">{label}</span> or drag and drop
            </p>
            <p className="text-xs text-[#4d194d] dark:text-gray-400">
              SVG, PNG, JPG, or GIF (MAX. 800x400px)
            </p>
          </div>
        )}
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUpload;

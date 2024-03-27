/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

interface ImageUploadProps {
    id: string;
    label: string;
    width: string;
    height: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    id,
    label,
    width = "w-full",
    height = "h-64",
}) => {
    const [fileSrc, setFileSrc] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage(""); // Clear any previous error messages
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (["image/jpeg", "image/png"].includes(file.type)) {
                const reader = new FileReader();
                reader.onload = () => {
                    const dataUrl = reader.result as string;
                    setFileSrc(dataUrl);
                };
                reader.readAsDataURL(file);
            } else {
                setErrorMessage("Invalid file format. Please upload JPG or PNG images.");
            }
        }
    };

    const removeFile = () => {
        setFileSrc("");
    };

    return (
        <div className={`flex items-center justify-center ${width}`}>
            <label
                htmlFor={id}
                className={`relative flex flex-col items-center justify-center ${width} ${height} border-[1px] border-primary-purple rounded-lg cursor-pointer bg-transparent hover:bg-[#ffe2e2]`}
            >
                {errorMessage && (
                    <div className="text-red-500">{errorMessage}</div>
                )}
                {fileSrc ? (
                    <div className={`relative inset-0 flex items-center justify-center p-4 overflow-hidden ${width} ${height}`}>
                        <div className="flex items-center m-1 relative">
                            <img src={fileSrc} alt="Uploaded image" className="max-w-[200px] h-[200px]" />
                            <button onClick={removeFile} className="absolute top-0 right-0 text-primary-purple hover:text-red-500">
                                <CiCircleRemove size={20} />
                            </button>
                        </div>
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
                            PNG or JPG
                        </p>
                    </div>
                )}
                <input
                    id={id}
                    type="file"
                    accept="image/jpeg,image/png"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
        </div>
    );
};

export default ImageUpload;

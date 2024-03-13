"use-client";

import React from "react";

interface OtpInputProps {
  width?: string;
  height?: string;
  radius?: string;
  fontSize?: string;
  onOtpChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({
  width = "w-12 sm:w-16 md:w-26 lg:w-34 max-sm:w-8",
  height = "h-12 sm:h-16 md:w-26 lg:h-34 max-sm:h-8",
  radius = "rounded-lg",
  fontSize = "text-sm sm:text-md md:text-xl lg:text-2xl",
  onOtpChange,
}) => {
  const handleOtpInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const otpValue = value.slice(-1);

    if (otpValue && index < 4) {
      const nextSibling = document.querySelector(
        `input[name='otp${index + 1}']`
      ) as HTMLInputElement;
      if (nextSibling) {
        nextSibling.focus();
      }
    }

    event.target.value = otpValue;
    const otp = Array.from(
      document.querySelectorAll<HTMLInputElement>("input[name^='otp']")
    )
      .map((input) => input.value)
      .join("");
    onOtpChange(otp);
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: 5 }, (_, i) => (
        <input
          key={`otp-${i}`}
          name={`otp${i}`}
          type="text"
          maxLength={1}
          inputMode="numeric"
          pattern="[0-9]*"
          className={`
            ${fontSize}
            ${width}
            ${height}
            ${radius}
            bg-red-100
            text-primary-purple
            text-center
            font-medium
            font-quicksand
            border-none
            focus:outline-none
            focus:ring-2
            focus:ring-primary-purple
            shadow-md
          `}
          onChange={(e) => handleOtpInput(e, i)}
          autoComplete="off"
        />
      ))}
    </div>
  );
};

export default OtpInput;

import React from "react";
import ReactDOM from "react-dom";
import Title from "../common/texts/Title";
import PrimaryButton from "../common/buttons/PrimaryButton";
import SecondaryButton from "../common/buttons/SecondaryButton";

interface PopupwithoutIcoProps {
  title?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  isOpen: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const PopupwithoutIco: React.FC<PopupwithoutIcoProps> = ({
  title = "Default Title",
  primaryButtonText = "Next",
  secondaryButtonText,
  isOpen,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const modalAnimation = isOpen ? "animate-fadeOutCenter" : "animate-slideDown";

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#FFB4A2] bg-opacity-50 transition-opacity duration-500"
        style={{ opacity: isOpen ? "1" : "0" }}
      />
      <div
        className={`flex justify-center items-center min-h-screen p-1 px-2 py-20 ${modalAnimation}`}
      >
        <div
          className="bg-cover bg-center bg-no-repeat lg:w-[40%] xl:w-[40%] 2xl:w-[30%] p-4 md:p-10 md:py-8 py-8 max-sm:py-6 sm:w-auto rounded-2xl relative"
          style={{ backgroundImage: "url(/images/FormBg.png)" }}
        >
          <div className="space-y-6">
            <div className="py-4 flex flex-col items-center text-center">
              <Title
                text={title}
                center={true}
                fontSize="text-xl sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-4xl"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <div
                className={`flex ${
                  secondaryButtonText ? "flex-row gap-4 sm:gap-5" : "flex-col"
                } items-center w-full`}
              >
                {secondaryButtonText && (
                  <SecondaryButton
                    label={secondaryButtonText}
                    onClick={onSecondaryClick}
                    height="p-2"
                    width="w-full"
                    fontSize="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md max-sm:text-sm"
                  />
                )}
                <PrimaryButton
                  label={primaryButtonText}
                  onClick={onPrimaryClick}
                  height="p-2"
                  textColor="text-white"
                  width="w-full"
                  fontSize="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md max-sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PopupwithoutIco;

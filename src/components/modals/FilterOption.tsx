import React, { useEffect, useRef } from "react";
import Title from "../common/texts/Title";
import Description from "../common/texts/Description";
import Image from "next/image";
import Input from "../common/inputs/Input";
import { IoSearch } from "react-icons/io5";
import CheckboxComponent from "../common/inputs/Checkbox";
import Dropdown2 from "../common/dropdown/Dropdown2";
import PrimaryButton from "../common/buttons/PrimaryButton";

interface FilterOptionProps {
  isOpen: boolean;
  onClose: () => void;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const FilterOption: React.FC<FilterOptionProps> = ({
  isOpen,
  onClose,
  selectedValue,
  setSelectedValue,
}) => {
  const isClosingRef = useRef(false);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }
    return () => enableScroll();
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const startClosing = () => {
    isClosingRef.current = true;
    timeoutIdRef.current = setTimeout(() => {
      onClose();
      isClosingRef.current = false;
    }, 500);
  };

  const handleBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      startClosing();
    }
  };

  if (!isOpen && !isClosingRef.current) return null;

  const handleDropdownChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#FFB4A2] bg-opacity-50 z-50 transition-opacity duration-500 flex justify-center items-center ${
          isOpen || isClosingRef.current ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBgClick}
      >
        <div
          className={`w-[90%] md:w-[80%] p-8 md:p-10 lg:p-16 bg-[#faf3f1] rounded-2xl bg-transparent animate-slideUp transition-all  duration-500   items-center overflow-y-auto h-[90%] overflow-hidden`}
        >
          <Title text="Filter Options" center={true} />
          <div className="flex justify-center">
            <hr className="border-1 border-pink-300 mt-5 w-96 " />
          </div>

          <Image
            width={15}
            height={20}
            src="/images/HeartVector2.png"
            alt="Cupidco Logo"
            className=" mt-[-8px] mx-auto flex"
          />

          <div className="mt-5">
            <Description text="Location" fontWeight={"font-semibold"} />
          </div>
          <div className="grid lg:grid-cols-5">
            <div className="col-span-2">
              <Input
                id={"location"}
                name={"location"}
                placeholder={"Search Location"}
                bgColor={"bg-pink-200"}
                borderColor={"border-pink-200"}
                frontIcon={<IoSearch />}
                borderRadius={"rounded-xl"}
                width={"w-[100%]"}
              />
            </div>

            <div className="flex mt-5 lg:mt-3 lg:ml-4 gap-[10%] md:gap-18 lg:col-span-3 lg:justify-center">
              <CheckboxComponent
                name={""}
                value={""}
                frontName={"Preferred Search"}
              />
              <CheckboxComponent
                name={""}
                value={""}
                frontName={"Preferred Search"}
              />
            </div>
          </div>
          {/* sort by/ age  */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="mt-5">
                <Description text="Sort By" fontWeight={"font-semibold"} />
              </div>
              <div>
                <Input
                  id={"SortBy"}
                  name={"SortBy"}
                  bgColor={"bg-pink-200"}
                  borderColor={"border-pink-200"}
                  borderRadius={"rounded-xl"}
                  width={"w-[100%]"}
                />
              </div>
            </div>

            <div>
              <div className="md:mt-6">
                <Description text="Age" fontWeight={"font-semibold"} />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <Dropdown2
                  options={["ssdfd", "dfdsfd", "sdfsdf"]}
                  onChange={function (selectedOption: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  width={"w-[100%]"}
                  bgColor={"bg-pink-200"}
                  borderColor={"border-pink-200"}
                  borderRadius={"rounded-xl"}
                  optionsBgColor={"bg-pink-50"}
                />
                <Dropdown2
                  options={["gdsf", "dfdsfd", "sdfsdf"]}
                  onChange={function (selectedOption: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  width={"w-[100%]"}
                  bgColor={"bg-pink-200"}
                  borderColor={"border-pink-200"}
                  borderRadius={"rounded-xl"}
                  optionsBgColor={"bg-pink-50"}
                  text={"To"}
                />
              </div>
            </div>
          </div>
          {/* minimum education level */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="mt-5">
                <Description
                  text="Minimum Education Level"
                  fontWeight={"font-semibold"}
                />
              </div>
              <div>
                <Input
                  id={"minEduLevel"}
                  name={"minEduLevel"}
                  bgColor={"bg-pink-200"}
                  borderColor={"border-pink-200"}
                  borderRadius={"rounded-xl"}
                  width={"w-[100%]"}
                />
              </div>
            </div>

            <div>
              <div className="md:mt-6">
                <Description text="Height" fontWeight={"font-semibold"} />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <Dropdown2
                  options={["ssdfd", "dfdsfd", "sdfsdf"]}
                  onChange={function (selectedOption: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  width={"w-[100%]"}
                  bgColor={"bg-pink-200"}
                  borderColor={"border-pink-200"}
                  borderRadius={"rounded-xl"}
                  optionsBgColor={"bg-pink-50"}
                />
                <Dropdown2
                  options={["ssdfd", "dfdsfd", "sdfsdf"]}
                  onChange={function (selectedOption: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  width={"w-[100%]"}
                  bgColor={"bg-pink-200"}
                  borderColor={"border-pink-200"}
                  borderRadius={"rounded-xl"}
                  optionsBgColor={"bg-pink-50"}
                  text={"To"}
                />
              </div>
            </div>
          </div>

          {/* Ethnicity  */}
          <div className="mt-4">
            <Description text="Ethnicity" fontWeight={"font-semibold"} />
            <div className="mt-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              <CheckboxComponent
                name={""}
                value={""}
                secondName={"Sinhalese"}
              />
              <CheckboxComponent name={""} value={""} secondName={"Muslim"} />
              <CheckboxComponent name={""} value={""} secondName={"Tamil"} />
              <CheckboxComponent name={""} value={""} secondName={"Burger"} />
              <CheckboxComponent name={""} value={""} secondName={"Other"} />
            </div>
          </div>

          {/* Religion */}
          <div className="mt-4">
            <Description text="Religion" fontWeight={"font-semibold"} />
            <div className=" mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5">
              <CheckboxComponent name={""} value={""} secondName={"Buddhist"} />
              <CheckboxComponent
                name={""}
                value={""}
                secondName={"Christian"}
              />
              <CheckboxComponent name={""} value={""} secondName={"Hindu"} />
              <CheckboxComponent name={""} value={""} secondName={"Islam"} />
              <CheckboxComponent name={""} value={""} secondName={"Agnostic"} />
              <CheckboxComponent name={""} value={""} secondName={"Catholic"} />
              <CheckboxComponent name={""} value={""} secondName={"None"} />
              <CheckboxComponent name={""} value={""} secondName={"other"} />
            </div>
          </div>

          {/* Civil Status */}
          <div className="mt-4">
            <Description text="Civil Status" fontWeight={"font-semibold"} />
            <div className=" mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5">
              <CheckboxComponent name={""} value={""} secondName={"Single"} />
              <CheckboxComponent name={""} value={""} secondName={"Widowed"} />
              <CheckboxComponent name={""} value={""} secondName={"Divorced"} />
              <CheckboxComponent
                name={""}
                value={""}
                secondName={"Seperated"}
              />
              <CheckboxComponent name={""} value={""} secondName={"Other"} />
            </div>
          </div>

          {/* Profession */}
          <div className="mt-4">
            <Description text="Profession" fontWeight={"font-semibold"} />
            <div className=" mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5">
              <CheckboxComponent
                name={""}
                value={""}
                secondName={"Accountant"}
              />
              <CheckboxComponent
                name={""}
                value={""}
                secondName={"Architect"}
              />
              <CheckboxComponent name={""} value={""} secondName={"Banker"} />
              <CheckboxComponent name={""} value={""} secondName={"Chef"} />
              <CheckboxComponent name={""} value={""} secondName={"Doctor"} />
              <CheckboxComponent name={""} value={""} secondName={"Engineer"} />
              <CheckboxComponent name={""} value={""} secondName={"None"} />
              <CheckboxComponent name={""} value={""} secondName={"Other"} />
            </div>
          </div>

          {/* Food Preference */}
          <div className="mt-4">
            <Description text="Food Preference" fontWeight={"font-semibold"} />
            <div className=" mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5">
              <CheckboxComponent
                name={""}
                value={""}
                secondName={"Non Vegetarian"}
              />
              <CheckboxComponent
                name={""}
                value={""}
                secondName={" Vegetarian"}
              />
              <CheckboxComponent name={""} value={""} secondName={" Vegan"} />
            </div>
          </div>

          {/* Drinking*/}
          <div className="mt-4">
            <Description text="Drinking" fontWeight={"font-semibold"} />
            <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-5">
              <CheckboxComponent name={""} value={""} secondName={"Yes"} />
              <CheckboxComponent name={""} value={""} secondName={" No"} />
              <CheckboxComponent
                name={""}
                value={""}
                secondName={" Occasionally"}
              />
            </div>
          </div>

          {/* Smoking*/}
          <div className="mt-4">
            <Description text="Smoking" fontWeight={"font-semibold"} />
            <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-5">
              <CheckboxComponent name={""} value={""} secondName={"Yes"} />
              <CheckboxComponent name={""} value={""} secondName={" No"} />
              <CheckboxComponent
                name={""}
                value={""}
                secondName={" Occasionally"}
              />
            </div>
          </div>

          {/* Differently Abled*/}
          <div className="mt-4">
            <Description
              text="Differently Abled"
              fontWeight={"font-semibold"}
            />
            <div className="mt-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              <CheckboxComponent name={""} value={""} secondName={"Yes"} />
              <CheckboxComponent name={""} value={""} secondName={" No"} />
            </div>
          </div>

          {/* Account Created by */}
          <div className="mt-4">
            <Description
              text="Account Created by"
              fontWeight={"font-semibold"}
            />
            <div className="mt-3 grid  grid-cols-2 lg:grid-cols-3 gap-5">
              <CheckboxComponent name={""} value={""} secondName={"Self"} />
              <CheckboxComponent
                name={""}
                value={""}
                secondName={" Parent/ Family"}
              />
            </div>
          </div>

          {/* filter button  */}
          <div className="mt-10 flex mx-auto w-40">
            <PrimaryButton
              label="Filter"
              height="py-1 xl:py-2"
              width="w-full"
              radius="rounded-xl lg:rounded-md xl:rounded-lg"
              fontSize="text-base md:text-lg  "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterOption;

"use client";

import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import Dropdown from "@/components/common/dropdown/Dropdown";
import TextField from "@/components/common/inputs/TextField";
import RadioButton from "@/components/common/inputs/RadioButton";
import TextArea from "@/components/common/inputs/TextArea";
import ProgressBar from "@/components/common/progress-bar/ProgressBar";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import { useEffect, useState } from "react";

interface CardProps {
  step: number;
  onStepChange: (step: number) => void;
  onCloseModal: () => void;
}

interface StepContent {
  [key: number]: JSX.Element;
}

const ProfileCard: React.FC<CardProps> = ({
  step,
  onStepChange,
  onCloseModal,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showPreviousButton, setShowPreviousButton] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  useEffect(() => {
    setShowPreviousButton(step > 1);
  }, [step]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      onCloseModal();
    }, 500);
  };

  {
    /*Radio Button Functions */
  }
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string | undefined;
  }>({});

  const handleOptionChange = (groupName: string, value: string) => {
    setSelectedOptions({ ...selectedOptions, [groupName]: value });
  };

  {
    /* Titles For steps */
  }
  const stepTitles: string[] = [
    "Basic Information",
    "Basic Information",
    "Residency Information",
    "Education & Profession Information",
    "Habits",
  ];

  {
    /*Step 1 DropDown Options */
  }
  const Gender = ["Male", "Female", "Other"];
  const CivilStatus = ["Married", "Unmarried", "Divorced"];
  const Height = ["172cm - 178cm", "178cm - 185cm"];

  {
    /*Step 3 DropDown Options */
  }
  const Country = ["Sri Lanka", "India", "Pakistan"];
  const State = ["Colombo", "Jaffna", "Kandy"];
  const city = ["Kandy", "Jaffna", "Colombo"];

  {
    /*Step 4  DropDown Sample Options */
  }
  const EducationLevel = ["A/L", "O/L"];
  const Profession = ["Engineer", "Doctor"];
  const PastCareers = ["Yes", "No"];

  {
    /*Step 5  DropDown Sample Options */
  }
  const Alcohol = ["Yes", "No"];
  const FoodPreferences = ["Rice", "Hoppers"];
  const Hobbies = ["Reading Books", "Gardening"];

  {
    /* State variables and handlers for gender */
  }
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const handleGenderSelect = (value: string) => {
    setSelectedGender(value);
  };

  {
    /* State variables and handlers for Civil Status */
  }
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const handleStatusSelect = (value: string) => {
    setSelectedStatus(value);
  };

  {
    /* State variables and handlers for Height */
  }
  const [selectedHeight, setSelectedHeight] = useState<string | null>(null);
  const handleHeightSelect = (value: string) => {
    setSelectedHeight(value);
  };

  {
    /* State variables and handlers for Country */
  }
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const handleCountrySelect = (value: string) => {
    setSelectedCountry(value);
  };

  {
    /* State variables and handlers for State */
  }
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const handleStateSelect = (value: string) => {
    setSelectedState(value);
  };

  {
    /* State variables and handlers for City */
  }
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const handleCitySelect = (value: string) => {
    setSelectedCity(value);
  };

  {
    /* State variables and handlers for Education Level */
  }
  const [selectedEducationLevel, setSelectedEducationLevel] = useState<
    string | null
  >(null);
  const handleEducationLevelSelect = (value: string) => {
    setSelectedEducationLevel(value);
  };

  {
    /* State variables and handlers for Profession */
  }
  const [selectedProfession, setSelectedProfession] = useState<string | null>(
    null
  );
  const handleProfessionSelect = (value: string) => {
    setSelectedProfession(value);
  };

  {
    /* State variables and handlers for Past Careers */
  }
  const [selectedPastCareers, setSelectedPastCareers] = useState<string | null>(
    null
  );
  const handlePastCareersSelect = (value: string) => {
    setSelectedPastCareers(value);
  };

  {
    /* State variables and handlers for Alcohol */
  }
  const [selectedAlcohol, setSelectedAlcohol] = useState<string | null>(null);
  const handleAlcoholSelect = (value: string) => {
    setSelectedAlcohol(value);
  };

  {
    /* State variables and handlers for Food Preferences*/
  }
  const [selectedFoodPreferences, setSelectedFoodPreferences] = useState<
    string | null
  >(null);
  const handleFoodPreferencesSelect = (value: string) => {
    setSelectedFoodPreferences(value);
  };

  {
    /* State variables and handlers for Hobbies */
  }
  const [selectedHobbies, setSelectedHobbies] = useState<string | null>(null);
  const handleHobbiesSelect = (value: string) => {
    setSelectedHobbies(value);
  };

  {
    /* Steps */
  }
  const stepContents: StepContent = {
    1: (
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="w-full">
            <TextField
              id="FName1"
              label="First Name"
              bgColor="bg-[#FFF4F1]"
              height="h-1"
              radius="rounded-xl"
              value={""}
              name={""}
            />
          </div>
          <div className="w-full">
            <TextField
              id="LName2"
              label="Last Name"
              bgColor="bg-[#FFF4F1]"
              height="h-1"
              radius="rounded-xl"
              value={""}
              name={""}
            />
          </div>
        </div>
        <div className="flex gap-2 z-30">
          <Dropdown
            id="Gender"
            label="Gender"
            values={Gender}
            radius="rounded-xl"
            selectedValue={selectedGender}
            onSelect={handleGenderSelect}
          />

          <Dropdown
            id="Status"
            label="Civil Status"
            values={CivilStatus}
            radius="rounded-xl"
            selectedValue={selectedStatus}
            onSelect={handleStatusSelect}
          />
        </div>
        <TextField
          id="date"
          label="Date"
          bgColor="bg-[#FFF4F1]"
          height="h-1"
          radius="rounded-2xl"
          value={""}
          name={""}
        />
        <TextField
          id="nic"
          label="NIC Number"
          bgColor="bg-[#FFF4F1]"
          height="h-1"
          radius="rounded-2xl"
          value={""}
          name={""}
        />
        <div className="flex gap-2">
          <div className="w-full z-20">
            <Dropdown
              id="Status"
              label="Height"
              values={Height}
              radius="rounded-xl"
              selectedValue={selectedHeight}
              onSelect={handleHeightSelect}
            />
          </div>
          <div className="w-full">
            <TextField
              id="Weight"
              label="Weight"
              bgColor="bg-[#FFF4F1]"
              height="h-1"
              radius="rounded-xl"
              value={""}
              name={""}
            />
          </div>
        </div>
        <TextField
          id="Religion"
          label="Religion"
          bgColor="bg-[#FFF4F1]"
          height="h-1"
          radius="rounded-xl"
          value={""}
          name={""}
        />
        <div className="flex gap-4">
          <Description
            text="Do You Have Children?"
            fontSize="text-md xl:text-xl"
          />
          <div className="flex gap-5">
            <RadioButton
              groupName="Yes/No"
              name="Yes"
              value="Yes"
              isSelected={selectedOptions["Yes/No"] === "Yes"}
              onChange={handleOptionChange}
              fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
            />
            <RadioButton
              groupName="Yes/No"
              name="No"
              value="No"
              isSelected={selectedOptions["Yes/No"] === "No"}
              onChange={handleOptionChange}
              fontSize="text-sm xs:text-xs lg:text-sm md:text-sm xl:text-lg max-xs:text-xs"
            />
          </div>
        </div>
      </div>
    ),

    2: (
      <div className="flex flex-col gap-4">
        <TextArea
          id="About You"
          label="About You"
          maxLength={100}
          bgColor="bg-[#FFF4F1]"
        />
        <TextArea
          id="About You"
          label="Family Background"
          maxLength={100}
          bgColor="bg-[#FFF4F1]"
        />
      </div>
    ),

    3: (
      <div className="flex flex-col gap-4">
        <Dropdown
          id="Country"
          label="Country"
          values={Country}
          selectedValue={selectedCountry}
          onSelect={handleCountrySelect}
        />
        <Dropdown
          id="State"
          label="State"
          values={State}
          selectedValue={selectedState}
          onSelect={handleStateSelect}
        />
        <Dropdown
          id="City"
          label="City"
          values={city}
          selectedValue={selectedCity}
          onSelect={handleCitySelect}
        />
      </div>
    ),

    4: (
      <div className="flex flex-col gap-4">
        <Dropdown
          id="Education"
          label="Education Level"
          values={EducationLevel}
          selectedValue={selectedEducationLevel}
          onSelect={handleEducationLevelSelect}
        />
        <Dropdown
          id="Profession"
          label="Profession"
          values={Profession}
          selectedValue={selectedProfession}
          onSelect={handleProfessionSelect}
        />
        <Dropdown
          id="Degrees"
          label="Degrees/ Past Careers"
          values={PastCareers}
          selectedValue={selectedPastCareers}
          onSelect={handlePastCareersSelect}
        />
      </div>
    ),

    5: (
      <div className="flex flex-col gap-4">
        <Dropdown
          id="Alcohol"
          label="Use of cigarette"
          values={Alcohol}
          selectedValue={selectedAlcohol}
          onSelect={handleAlcoholSelect}
        />
        <Dropdown
          id="Food"
          label="Food Preferences"
          values={FoodPreferences}
          selectedValue={selectedFoodPreferences}
          onSelect={handleFoodPreferencesSelect}
        />
        <Dropdown
          id="Hobby"
          label="Hobbies"
          values={Hobbies}
          selectedValue={selectedHobbies}
          onSelect={handleHobbiesSelect}
        />
      </div>
    ),
  };

  const progress = 20 + (step - 1) * 20;

  const handleNextStep = () => {
    const nextStep = step + 1;
    onStepChange(nextStep);
  };

  const handlePreviousStep = () => {
    const previousStep = step - 1;
    onStepChange(previousStep);
  };

  const isLastStep = step === stepTitles.length;

  const handleNextOrComplete = () => {
    if (isLastStep) {
      // Handle the completion logic
      console.log("Completed!");
    } else {
      handleNextStep();
    }
  };

  return (
    <div
      className="flex flex-col 
        w-full
        xl:gap-6
        gap-2"
    >
      <div>
        <Title
          text="Edit Profile"
          center={true}
          fontFamily="font-PlayfairDisplay"
          fontSize="text-2xl max-sm:text-md md:text-2xl lg:text-3xl xl:text-4xl"
        />
      </div>
      {/* Progress bar */}
      <ProgressBar progress={progress} />

      <div
        className="w-full rounded-xl 
            shadow-lg 
            bg-[#FFF4F1] 
            xl:p-10
            p-5
            relative 
            xl:h-[500px]
            lg:h-[480]
            h-[450px]"
      >
        <div
          className="absolute 
                top-0 
                left-0 
                right-0 bg-gradient-custom 
                xl:py-6
                py-2
                rounded-t-xl"
        >
          <div>
            <Title
              text={stepTitles[step - 1]}
              fontColor="text-white"
              center={true}
              fontSize="text-xl max:sm:text-md md:text-xl lg:text-2xl xl:text-4xl"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col xl:pt-20 pt-14">{stepContents[step]}</div>
      </div>

      {/* Buttons */}
      <div className="flex flex-row self-end gap-5">
        {showPreviousButton && (
          <SecondaryButton
            label="Previous"
            fontSize="text-md sm:text-sm lg:text-lg"
            height="h-7 xl:h-12"
            width="w-28 xl:w-40"
            radius="rounded-xl"
            onClick={handlePreviousStep}
          />
        )}
        <PrimaryButton
          label={isLastStep ? "Complete" : "Next"}
          fontSize="text-md sm:text-sm lg:text-lg"
          height="h-7 xl:h-12"
          width="w-28 xl:w-40"
          radius="rounded-xl"
          onClick={handleNextOrComplete}
        />
      </div>
    </div>
  );
};

export default ProfileCard;

import React from "react";
import Title from "../common/texts/Title";
import Description from "../common/texts/Description";

const requirementsData = [
  {
    title: "Family Background",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting    industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    title: "Next 5 years Plan",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting    industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    title: "Education",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting    industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    title: "Lifestyle Preferences",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting    industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

const Requirements = () => {
  return (
    <div className="container mx-auto p-6 w-full h-full py-14 mt-2">
      {requirementsData.map((item, index) => (
        <div key={index}>
          <Title
            text={item.title}
            fontSize="text-lg sm:text-md md:text-xl lg:text-2xl xl:text-xl"
            center={false}
          />
          <div className="text-justify border-b p-3">
            <Description
              text={item.description}
              fontSize="text-lg sm:text-xs md:text-xs lg:text-sm xl:text-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Requirements;

"use client";

import React from "react";
import Title from "../common/texts/Title";
import Description from "../common/texts/Description";
import Chip from "../common/chip/Chip";

const About = () => {
  const AboutDetails = {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an     unknown printer took a galley of type and scrambled it to make a type specimen book galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book galley of type and scrambled it to make a type specimen book",
    foodpreferences: ["Vegetarian", "Vegan", "Gluten-Free"],
    hobbies: ["Reading", "Traveling", "Photography"],
    name: "Hiruni Shashikala",
    age: 25,
    religion: "Buddhism",
    dob: "1999-05-15",
    address: "Colombo,Sri Lanka",
    height: "5'10",
    weight: "160 lbs",
    profession: "Software Engineer",
    civilstatus: "Single",
    gender: "Male",
  };
  return (
    <div
      className="container mx-auto p-4 overflow-y-auto bg-[#FFF4F1] max-h-[600px]"
      style={{ maxWidth: "700px" }}
    >
      <div className="grid grid-cols-2 gap-2">
        {/* Column 1 */}
        <div className="pr-6 border-r">
          <Title
            text="About Me:"
            fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
            center={false}
          />
          <div className="mb-4 text-justify w-full">
            <Description
              text={AboutDetails.description}
              fontSize="text-md sm:text-xs md:text-xs lg:text-sm xl:text-md"
            />
          </div>
          <div>
            <Title
              text="Food Preferences:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <div className="mb-4 text-justify w-full">
              <div className="grid grid-cols-2 gap-4">
                {AboutDetails.foodpreferences.map((preference, index) => (
                  <Chip
                    key={index}
                    text={preference}
                    fontColor="#4D194D"
                    backgroundColor="white"
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <Title
              text="Hobbies:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <div className="mb-4 text-justify w-full">
              <div className="grid grid-cols-2 gap-4">
                {AboutDetails.hobbies.map((hobbies, index) => (
                  <Chip
                    key={index}
                    text={hobbies}
                    fontColor="#4D194D"
                    backgroundColor="white"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="pl-6">
          <div className="flex items-center border-b">
            <Title
              text="Name:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="ml-6 p-3">{AboutDetails.name}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="Age:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="ml-10 p-3">{AboutDetails.age}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="Religion:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="ml-3 p-3">{AboutDetails.religion}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="DOB:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="ml-7 p-3">{AboutDetails.dob}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="Address:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="ml-3 p-3">{AboutDetails.address}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="Height:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="ml-5 p-3">{AboutDetails.height}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="Weight:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="ml-4 p-3">{AboutDetails.weight}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="Profession:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="p-3">{AboutDetails.profession}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="Civil Status:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="p-3">{AboutDetails.civilstatus}</p>
          </div>
          <div className="flex items-center border-b">
            <Title
              text="Gender:"
              fontSize="text-md sm:text-xs md:text-sm lg:text-md xl:text-xl"
              center={false}
            />
            <p className="ml-6 p-3">{AboutDetails.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

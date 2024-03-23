"use client";

import { useState } from "react";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Logo from "@/components/common/logo/Logo";
import SocialMedia from "@/components/common/social-media/SocialMedia";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import { FaComment } from "react-icons/fa";
import ContactModal from "@/components/modals/ContactModal";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import Link from "next/link";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
  };
  return (
    <div className="bg-cover bg-center bg-no-repeat h-full p-10">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-0">
        {/* First Column */}
        <div className="flex flex-col space-y-3 items-center sm:items-center md:items-start lg:items-start">
          <Title
            text="Contact Us"
            fontSize="text-2xl md:text-lg lg:text-start"
          />
          <div className="text-center md:text-left lg:text-left">
            <Description
              text="77/5/A/1 Gothami Mawatha, Welewaththa, Colombo, Sri Lanka"
              fontSize="text-lg"
            />
          </div>
          <Description
            text="+94 112 824 814"
            fontSize="text-lg"
            fontWeight="font-medium"
          />
        </div>

        {/* Second Column */}
        <div className="flex flex-col space-y-3 items-center sm:items-center md:items-start lg:items-start">
          <Title text="Company" fontSize="text-2xl md:text-xl" />
          <Description text="About us" fontSize="text-lg" href="/about" />
          <Description text="Contact us" fontSize="text-lg" href="/contact" />
          <Description
            text="Client Area"
            fontSize="text-lg"
            href="/client_area"
          />
          <Description
            text="Data Center"
            fontSize="text-lg"
            href="/data-center"
          />
          <Description
            text="Site Map"
            fontSize="text-lg"
            href="/site_map"
          />
        </div>

        {/* Third Column */}
        <div className="flex flex-col space-y-3 items-center sm:items-center md:items-start lg:items-start">
          <Title text="Services" fontSize="text-2xl md:text-xl" />
          <Description
            text="Dressing Service"
            fontSize="text-lg"
          />
          <Description
            text="Hotel Booking"
            fontSize="text-lg"
          />
          <Description
            text="Photography Service"
            fontSize="text-lg"
          />
          <Description
            text="Vehicle Renting"
            fontSize="text-lg"
          />
          <Description
            text="Wedding Place Planning"
            fontSize="text-lg"
          />
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col space-y-3 items-center sm:items-center md:items-start lg:items-start">
          <Title text="Legal" fontSize="text-2xl md:text-xl" />
          <Description
            text="Terms of Service"
            fontSize="text-lg"
            href="/terms&conditions"
          />
          <Description
            text="Service Agreement"
            fontSize="text-lg"
          />
          <Description
            text="Privacy Policy"
            fontSize="text-lg"
            href="/privacy-policy"
          />
          <Description
            text="Billing Policy"
            fontSize="text-lg" />
        </div>

        {/* Fifth Column */}
        <div className="flex flex-col space-y-3 items-center md:items-start lg:items-start">
          <Logo />
          <Description
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            fontSize="text-lg text-center md:text-left lg:text-start"
          />
          <Link href ="/customer-reviews">
            <SecondaryButton
              label="Write a review"
              fontSize="lg:text-xl md:text-lg"
              width=" w-30  "
              radius="rounded-lg"
              height="py-1"
              iconPosition="left"
            />
          </Link>
        </div>
      </div>

      <div className="flex max-md:justify-center mt-5">
        <div className="w-48 text-center md:absolute max-md:mt-5">
          {/* Merged row below the columns */}
          <div className="font-bold text-xl mb-2 text-primary-purple font-playfair-display">
            Leave us a comment
          </div>

          {/* comment button  */}
          <PrimaryButton
            label="Comment"
            fontSize="lg:text-xl md:text-lg"
            width=" w-full  "
            radius="rounded-lg"
            height="py-2"
            icon={<FaComment />}
            iconPosition="left"
            onClick={handleOpenForm}
          />
        </div>
      </div>
      <ContactModal isOpen={isOpen} onClose={handleCloseForm} />

      <div className="max-md:mt-5">
        <div className=" justify-center gap-3 mt-2 items-center">
          {/* follow us  */}
          <div>
            <Title
              text="Follow Us Here"
              fontSize="text-2xl md:text-xl "
              center={true}
            />
          </div>
          <div className="flex justify-center gap-3 mt-2 items-center">
            {/* Social Media Icons */}
            <SocialMedia
              network="facebook"
              url="www.facebook.com"
              key={1}
              size="8"
            />
            <SocialMedia
              network="instagram"
              url="www.instagram.com"
              key={2}
              size="8"
            />
            <SocialMedia
              network="linkedin"
              url="www.linkedin.com"
              key={3}
              size="8"
            />
            <SocialMedia
              network="twitter"
              url="www.twitter.com"
              key={4}
              size="8"
            />
          </div>
          {/* horizontal line  */}
          <hr className="border-t-2 border-primary-purple my-4" />

          {/* Powered by TeamZX */}
          <div className="font-['poppins'] text-md text-primary-purple text-center">
            © 2023 Marriage Proposal App Powered by TeamZX
          </div>
        </div>
      </div>
    </div>
  );
}

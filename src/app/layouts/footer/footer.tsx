'use client'

import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Logo from "@/components/common/logo/Logo";
import SocialMedia from "@/components/common/social-media/SocialMedia";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import { FaComment } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-footer-pink p-10 space-y-4">
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
          <Description text="About us" fontSize="text-lg" href="/pages/about" />
          <Description
            text="Contact us"
            fontSize="text-lg"
            href="/pages/contact_us"
          />
          <Description
            text="Client Area"
            fontSize="text-lg"
            href="/pages/client_area"
          />
          <Description
            text="Data Center"
            fontSize="text-lg"
            href="/pages/center"
          />
          <Description
            text="Site Map"
            fontSize="text-lg"
            href="/pages/sitemap"
          />
        </div>

        {/* Third Column */}
        <div className="flex flex-col space-y-3 items-center sm:items-center md:items-start lg:items-start">
          <Title text="Services" fontSize="text-2xl md:text-xl" />
          <Description text="Dressing Service" fontSize="text-lg" />
          <Description text="Hotel Booking" fontSize="text-lg" />
          <Description text="Photography Service" fontSize="text-lg" />
          <Description text="Vehicle Renting" fontSize="text-lg" />
          <Description text="Wedding Place Planning" fontSize="text-lg" />
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col space-y-3 items-center sm:items-center md:items-start lg:items-start">
          <Title text="Legal" fontSize="text-2xl md:text-xl" />
          <Description text="Terms of Service" fontSize="text-lg" />
          <Description text="Service Agreement" fontSize="text-lg" />
          <Description text="Privacy Policy" fontSize="text-lg" />
          <Description text="Billing Policy" fontSize="text-lg" />
        </div>

        {/* Fifth Column */}
        <div className="flex flex-col space-y-3 items-center md:items-start lg:items-start">
          <Logo />
          <Description
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
            fontSize="text-lg text-center md:text-left lg:text-start"
          />
        </div>
      </div>
      {/* Merged row below the columns */}
      <div className="max-w-6xl mx-0 grid grid-cols-1 gap-8 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Leave us a Comment Section */}
        <div className="flex flex-col items-center sm:items-center md:items-start lg:items-start space-y-2">
          <Title text="Leave us a Comment" fontSize="text-2xl md:text-lg" />
          <PrimaryButton
            label="Comment"
            fontSize="lg:text-xl md:text-lg"
            width="w-full md:w-[60%]"
            radius="rounded-lg"
            height="py-2"
            icon={<FaComment />}
            iconPosition="left"
          />
        </div>

        {/* Follow Us Section */}
        <div className="text-left md:mt-0 sm:items-center lg:items-start">
          <Title
            text="Follow us"
            fontSize="text-2xl md:text-lg "
            center={true}
          />
          <div className="flex justify-center space-x-2 mt-2 items-center">
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
        </div>
      </div>
    </footer>
  );
}

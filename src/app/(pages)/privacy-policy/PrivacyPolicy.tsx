"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Title from "../../../components/common/texts/Title";
import Description from "../../../components/common/texts/Description";
import Logo from "../../../components/common/logo/Logo";
import PrimaryButton from "../../../components/common/buttons/PrimaryButton";
import { IoChevronBackCircle } from "react-icons/io5";

export default function PrivacyPolicy() {
  return (
    <div className="">
      <div className="flex justify-between bg-[#d2887a]/[.26] rounded-lg px-10 py-3 items-center  shadow-inner">
        <div className="max-sm:text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4D194D]">
          <IoChevronBackCircle />
        </div>
        <div className="ml-[10%]">
          <Title
            text="Privacy Policy"
            fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </div>
        <div className="ml-auto items-center">
          <Logo />
        </div>
      </div>
      <div className="relative p-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/HomeSc2.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Background"
            priority
          />
        </div>
        {/* Text Content */}
        <div className="text-[#4D194D] relative">
          {/* Description */}
          <Description
            text=""
            fontWeight="font-regular"
            fontSize="max-sm:text-md xl:text-xl"
          />

          {/* Primary Button */}
          <main className="container mx-auto my-12 p-6 md:p-8 lg:p-10 bg-[#D2887A] bg-opacity-10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Last Updated: 21/08/2023
            </h2>

            {/* Description */}
            <Description
              text="Welcome to CupidCo, a platform designed to help you create unforgettable marriage proposals. At CupidCo, we understand the importance of privacy and are committed to safeguarding the personal information you entrust to us. This Privacy Policy outlines our practices regarding the collection, use, and protection of your information when you use our website and services. By accessing or using CupidCo, you agree to the terms described in this Privacy Policy."
              fontWeight="font-regular"
              fontSize="text-justify"
            />

            {/* Information We Collect */}
            <section className="mb-6">
              <Title
                text="Information We Collect"
                fontSize="text-2xl font-semibold mb-4"
              />
              <Description
                text="We collect information that you provide when you use Cupid.io, including but not limited to:"
                fontSize="text-justify"
              />
              <ul className="list-disc pl-6">
                <li>
                  <Description
                    text="Personal details (name/nickname), age group, and gender preferences"
                    fontSize="text-justify"
                  />
                </li>
                <li>
                  <Description
                    text="Responses from other members related to our proposed plans on our platform"
                    fontSize="text-justify"
                  />
                </li>
                <li>
                  <Description
                    text="Uploaded content (Photos, videos, messages sent through our platform)"
                    fontSize="text-justify"
                  />
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-6">
              <Title
                text="How We Use Your Information"
                fontSize="text-2xl font-semibold mb-4"
              />
              <Description
                text="We use collected information for the following purposes:"
                fontSize="text-justify"
              />
              <ul className="list-disc pl-6">
                <li>
                  <Description
                    text="To facilitate communication between you and our proposal planner"
                    fontSize="text-justify"
                  />
                </li>
                <li>
                  <Description
                    text="To send promotional offers & updates on your preferred plans"
                    fontSize="text-justify"
                  />
                </li>
                <li>
                  <Description
                    text="To improve user experience & overall communications"
                    fontSize="text-justify"
                  />
                </li>
                <li>
                  <Description
                    text="To comply with legal obligations"
                    fontSize="text-justify"
                  />
                </li>
              </ul>
            </section>

            {/* Sharing Your Information */}
            <section className="mb-6">
              <Title
                text="Sharing Your Information"
                fontSize="text-2xl font-semibold mb-4"
              />
              <Description
                text="We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with companies affiliated with Cupid.io, such as:"
                fontSize="text-justify"
              />
              <ul className="list-disc pl-6">
                <li>
                  <Description
                    text="Service providers who help us provide services related to operation needs"
                    fontSize="text-justify"
                  />
                </li>
                <li>
                  <Description
                    text="Proposed partners during the proposal plan process for necessary approvals without obligations"
                    fontSize="text-justify"
                  />
                </li>
              </ul>
            </section>

            {/* Security Measures */}
            <section className="mb-6">
              <Title
                text="Security Measures"
                fontSize="text-2xl font-semibold mb-4"
              />
              <Description
                text="We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet can be guaranteed as completely secure."
                fontSize="text-justify"
              />
            </section>

            {/* Cookies And Tracking Technologies */}
            <section className="mb-6">
              <Title
                text="Cookies And Tracking Technologies"
                fontSize="text-2xl font-semibold mb-4"
              />
              <Description
                text="We may use cookies & similar technologies to enhance user experience on our website. You can control cookies through your browser settings."
                fontSize="text-justify"
              />
            </section>

            {/* Contact Us */}
            <section className="mt-6">
              <Title text="Contact Us" fontSize="text-2xl font-semibold mb-4" />
              <PrimaryButton
                label="Contact us"
                width="w-48" // Adjust width as needed
                height="h-12"
                //   onClick={() => handleContactUs()}
                bgColor="bg-[#4D194D]"
                textColor="text-white"
              />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from "react";
import Image from "next/image";
import Title from "@/components/common/texts/Title";
import Description from "@/components/common/texts/Description";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import ReviewSlider from "@/components/common/sliders/ReviewSlider";
import Link from "next/link";


const CustomerReviews: React.FC = () => {
    const Reviews = [
        {
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen dummy text ever since the 1500s,",
            image: "/images/Sonic.jpg",
            name: "John Doe",

        },
        {
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen dummy text ever since the 1500s, ",
            image: "/images/ImageGallery2.jpg",
            name: "Anna Fernando",

        },
        {
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen dummy text ever since the 1500s, ",
            image: "/images/ImageGallery3.jpg",
            name: "Anna Fernando",

        },
    ];

    return (
        <div className="relative min-h-screen flex flex-col justify-center py-20 pt-28 md:px-10 px-2 items-center text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/DefaultBg.png"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="Background"
                    priority
                />
            </div>
            <div className="container mx-auto relative">
                <div className="bg-[#FFEAEA] p-8 rounded-2xl shadow-2xl">
                    <div className="mb-6">
                        <Title
                            text="Rate and Review Us"
                            center={true}
                            fontSize="max-sm:text-lg text-2xl 2xl:text-3xl"
                        />
                        <div className="mt-2 2xl:mt-4 md:px-20">
                            <Description
                                text="We appreciate your honest feedback! If you encounter any issues or
                                have suggestions for improvement, please let us know. Your insights
                                are invaluable to us!"
                                center={true}
                                fontSize="sm:text-sm md:text-md lg:text-lg xl:text-xl"
                                fontWeight="font-regular"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <Title
                            text={"Showing most recent 100 reviews"}
                            fontSize="text-xl max-sm:text-sm"
                        />
                        <div className="px-4 py-2">
                            <Link href="/write-review">
                                <SecondaryButton
                                    label={"Write a Review"}
                                    fontSize="text-xs sm:text-sm lg:text-lg"
                                    height="h-10"
                                    width="w-auto"
                                    radius="rounded-lg"
                                />
                            </Link>
                        </div>
                    </div>
                    <ReviewSlider reviews={Reviews.slice(0, 100)} />
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;

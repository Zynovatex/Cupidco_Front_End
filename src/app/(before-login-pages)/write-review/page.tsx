'use client';

import React from "react";
import Image from "next/image";
import Title from "@/components/common/texts/Title";
import Description from "@/components/common/texts/Description";
import FileUpload from "@/components/common/inputs/FileUpload";
import TextArea from "@/components/common/inputs/TextArea";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";

const WriteReview = () => {
    return (
        <div className="relative min-h-screen flex flex-col justify-start py-20 pt-28 px-10 items-center text-center">
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
            <div className="container mx-auto z-10 relative">
                <div className="bg-[#FFEAEA] p-8 rounded-2xl shadow-2xl max-sm:mx-4">
                    <div className="mb-6">
                        <Title
                            text="Write your review"
                            center={true}
                            fontSize="max-sm:text-lg text-2xl 2xl:text-3xl"
                        />
                        <div className="mt-2 2xl:mt-4">
                            <Description
                                text="We appreciate your honest feedback! If you encounter any issues or have suggestions for improvement, please let us know. Your insights are invaluable to us!"
                                center={true}
                                fontSize="max-sm:text-sm 2xl:text-lg"
                                fontWeight="font-regular"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col justify-between items-start gap-4">
                            <Title
                                text="Add Photo or Video"
                                fontSize="text-xl max-sm:text-sm"
                            />
                            <FileUpload
                                id="1"
                                label="Click To Upload Here"
                                width="w-full"
                                height="h-64"
                                maxFiles={2}
                            />
                        </div>
                        <div className="flex flex-col justify-between items-start gap-5">
                            <Title
                                text="Write your Review"
                                fontSize="text-xl max-sm:text-sm"
                            />
                            <TextArea
                                id={"1"}
                                label="Would you like to say something about our platform?"
                                bgColor="bg-transparent"
                                width="w-full"
                                maxHeight="h-64"
                            />
                            {/* Button */}
                            <div className="flex items-center justify-center w-full">
                                <PrimaryButton
                                    label={"Submit Review"}
                                    fontSize="text-xs sm:text-sm lg:text-lg"
                                    height="h-10"
                                    width="w-auto xl:w-60"
                                    radius="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteReview;


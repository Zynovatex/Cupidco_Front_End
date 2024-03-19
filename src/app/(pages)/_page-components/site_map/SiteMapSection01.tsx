"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

export default function SiteMapSection01() {
    return (
        <div className=" flex flex-col gap-5 justify-center items-center py-28 px-10 ">
            {/* title  */}
            <div>
                <Title
                    text="Site Map"
                    fontSize="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                    center={true}
                    fontWeight="font-normal"
                    uppercase={true}
                />
            </div>

            {/* description  */}
            <div className="text-center md:w-[80%] max-w-screen-2xl">
                <Description
                    italic={true}
                    text="Welcome to your personalized Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. "
                />
            </div>
        </div>
    );
}

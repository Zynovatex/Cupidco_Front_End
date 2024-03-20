"use client";

import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";

export default function SiteMapSection02() {
    return (
        <>
            <div className=" bg-[#FFF4F1] items-center px-10 md:p-[5%] py-10 text-justify">
                <Title
                    text="Site Map"
                    center={true}
                />

                <div className="mt-10">
                    <Description text="Welcome to the heart of our Marriage Proposal App, where all your precious moments and essential details are securely stored and managed. Our Data Center is designed to provide you with a seamless and reliable experience, ensuring that every step of your journey towards the perfect proposal is smooth and unforgettable." />
                </div>

                {/* Secure Storage */}
                <div className="md:mt-10 mt-8">
                    <div>
                        <Title text="Secure Storage"
                            fontSize="text-xl md:text-3xl"
                        />
                    </div>
                    <div className="md:mt-8 mt-5">
                        <Description text="Your privacy and security are our top priorities. Our Data Center employs state-of-the-art encryption and security protocols to safeguard your personal information and proposal plans. Rest assured that your data is protected with the highest level of confidentiality. " />
                    </div>
                </div>

                {/* Proposal Planning */}
                <div className="md:mt-10 mt-8">
                    <div>
                        <Title text="Proposal Planning"
                            fontSize="text-xl md:text-3xl"
                        />
                    </div>
                    <div className="md:mt-8 mt-5">
                        <Description text="With our intuitive interface and comprehensive tools, organizing your proposal has never been easier. From setting reminders for important dates to creating personalized messages, our Data Center empowers you to plan every aspect of your proposal with precision and creativity. " />
                    </div>
                </div>

                {/* Memory Lane */}
                <div className="md:mt-10 mt-8">
                    <div>
                        <Title text="Memory Lane"
                            fontSize="text-xl md:text-3xl"
                        />
                    </div>
                    <div className="md:mt-8 mt-5">
                        <Description text="Relive the magic of your relationship with our Memory Lane feature. Access all your cherished moments, from your first date to your most recent adventures, conveniently stored in one place. Let the nostalgia inspire you as you embark on this new chapter together." />
                    </div>
                </div>

                {/* Vendor Integration */}
                <div className="md:mt-10 mt-8">
                    <div>
                        <Title text="Vendor Integration"
                            fontSize="text-xl md:text-3xl"
                        />
                    </div>
                    <div className="md:mt-8 mt-5">
                        <Description text="YConnect seamlessly with vendors and services to bring your proposal vision to life. Whether you're searching for the perfect ring or booking a romantic dinner, our Data Center streamlines the process, saving you time and stress along the way." />
                    </div>
                </div>

                {/* Collaboration Tools */}
                <div className="md:mt-10 mt-8">
                    <div>
                        <Title text="Collaboration Tools"
                            fontSize="text-xl md:text-3xl"
                        />
                    </div>
                    <div className="md:mt-8 mt-5">
                        <Description text="Share your proposal plans with loved ones and enlist their support with our collaboration tools. Collaborate on ideas, gather feedback, and coordinate surprise elements effortlessly, ensuring that your proposal is a collaborative celebration of your love. " />
                    </div>
                </div>

                {/* 24/7 Accessibility */}
                <div className="md:mt-10 mt-8">
                    <div>
                        <Title text="24/7 Accessibility"
                            fontSize="text-xl md:text-3xl"
                        />
                    </div>
                    <div className="md:mt-8 mt-5">
                        <Description text="Sour Data Center is available whenever and wherever inspiration strikes. Whether you're brainstorming ideas during your lunch break or finalizing details late at night, our platform is accessible 24/7 to accommodate your schedule and preferences. " />
                    </div>
                </div>

            </div>
        </>
    );
}

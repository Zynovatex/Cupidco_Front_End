"use client";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Title2 from "@/components/common/texts/Title2";
import { IoMdSend } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";



const Section2 =  () => {
    return (
        <>
            <div className=" bg-[#FFF4F1] items-center px-10 md:p-[5%] py-10 text-justify">

                   <Title
                    text="Terms and Conditions"
                    fontSize="text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
                />

                <div className="md:mt-10 mt-5">
                    <div>
                        <Title text="Last Updated: 21/08/2023"
                            fontSize="text-xl md:text-2xl"
                        />
                    </div>
                    <div className="md:mt-10 mt-5">
                        <Description text="Welcome to CupidCo, a platform designed to help you create unforgettable marriage proposals. At CupidCo, we understand the importance of privacy and are committed to safeguarding the personal information you entrust to us. This Privacy Policy outlines our practices regarding the collection, use, and protection of your information when you use our website and services.  By accessing or using CupidCo, you agree to the terms described in this Privacy Policy." />
                    </div>
                </div>



                {/* Information We Collect */}

                <div className="md:mt-10 mt-5">
                    <div>
                        <Title2 label="Information We Collect" />
                    </div>
                    <Description text="We collect information that you provide to us when you use CupidCo, including but not limited to:" />

                    <ul className="list-disc md:ml-5 mt-3  hidden md:block">
                      
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                             </span>
                            <Description text="Personal information: Name, email address, and contact details." />
                         </li>
                         <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="Proposal details: Information related to your proposal plans and preferences." />
                        </li>
                        <li className="flex mt-3">
                            <span>
                                  <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="User-generated content: Photos, videos, and messages you submit through our platform. " />
                        </li>

                    </ul>


                    {/* How We Use Your Information */}


                    <div className="md:mt-10 mt-5">
                        <Title2 label="How We Use Your Information" />
                    </div>
                    <Description text="We use the information collected for the following purposes: " />

                    <ul className="list-disc md:ml-5 mt-3  hidden md:block">
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="To facilitate communication between you and your proposal planner." />
                        </li>
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="To personalize and enhance your experience on our platform." />
                        </li>
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="To improve our services and develop new features." />
                        </li>
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="To send you updates, promotions, and relevant communications." />
                        </li>
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="To comply with legal obligations." />
                        </li>
                    </ul>



                    {/* Sharing Your Information */}

                    <div className="md:mt-10 mt-5">
                        
                         <Title2 label="Sharing Your Information" />
                    </div>

                    <Description text="We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with:" />

                    <ul className="list-disc md:ml-5 mt-3  hidden md:block">
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="Proposal planners: Your chosen proposal planner will receive the necessary details to assist you effectively." />
                        </li>
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="Service providers: We may use third-party service providers to assist in our operations." />
                        </li>
                        <li className="flex mt-3">
                            <span>
                                <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
                            </span>
                            <Description text="Legal authorities: If required by law, we may disclose your information to comply with legal obligations." />
                        </li>
                    </ul>


                    {/* Security Measures */}

                    <div className="md:mt-10 mt-5">
                        <Title2 label="Security Measures" />
                    </div>
                    <Description text="We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet can be guaranteed as completely secure." />


                    {/* Cookies and Tracking Technologies */}

                    <div className="md:mt-10 mt-5">
                        <Title2 label="Cookies and Tracking Technologies" />
                    </div>
                    <Description text="We may use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings." />

                    <div className="md:mt-10 mt-5">
                        <Title2 label="Your Choices" />
                    </div>
                    <Description text="You have the right to access, correct, or delete your personal information. You can update your information through your account settings or by contacting us." />


                    <div className="md:mt-10 mt-5">
                        <Title2 label="Children's Privacy" />
                    </div>
                    <Description text="CupidCo is not intended for individuals under the age of 18. We do not knowingly collect personal information from children." />

                    <div className="md:mt-10 mt-5">
                        <Title2 label="Changes to this Privacy Policy" />
                    </div>
                    <Description text='We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly.' />


                    <div className="md:mt-10 mt-5"> 

                        <Title2 label="Contact Us" />
                    </div>
                    <Description text="If you have any questions, concerns, or requests regarding your personal information or this Privacy Policy, please contact us : 
                    
                    " />

                
                </div>

              <div className = "mt-5">
                <PrimaryButton
                label="Contact us"
                fontSize="text-md md:text-md lg:text-xl"
                height='py-2'
                width=""
                radius="rounded-2xl"
                icon={<IoMdSend />}
                iconPosition="right"
                />
                 </div>

   
            </div>
        </>
    );
};
 export default Section2;
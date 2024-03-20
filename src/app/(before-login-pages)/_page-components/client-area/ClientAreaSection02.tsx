"use client";

import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Title2 from "@/components/common/texts/Title2";
import { RxDotFilled } from "react-icons/rx";
import { IoMdSend } from "react-icons/io";

export default function ClientAreaSection02() {
  return (
    <>
      <div className=" bg-[#FFF4F1] items-center px-10 md:p-[5%] py-10 text-justify">
        <Title
          text="Welcome to Client Area"
          center={true}
          fontSize="text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
        />

        <div className="mt-6">
          <div>
            <Title2 label="01. Profile Management " />
          </div>
          <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
        </div>

        <div className="mt-6">
          <div>
            <Title2 label="02. Profile Management " />
          </div>
          <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
        </div>

        <div className="mt-6">
          <div>
            <Title2 label="03. Profile Management " />
          </div>
          <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
        </div>

        <div className="mt-6">
          <div>
            <Title2 label="04. Profile Management " />
          </div>
          <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
        </div>

        <div className="mt-6">
          <div>
            <Title2 label="05. Profile Management " />
          </div>
          <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
          <div className="flex mt-3">
            <RxDotFilled className="w-14 text-[#6D2E46] text-xl" />
            <Description text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. " />
          </div>
        </div>

        <div className="mt-5">
          <Description
            fontWeight={"font-bold"}
            text="Client Area at Cupidco. This is where you can manage your profile, interact with potential matches, and access resources to enhance your journey towards marriage. "
          />
        </div>

        <div className="mt-5">
          <PrimaryButton
            label="Contact us"
            fontSize="text-md md:text-md lg:text-xl"
            height="py-2"
            width=""
            radius="rounded-2xl"
            icon={<IoMdSend />}
            iconPosition={"right"}
          />
        </div>
      </div>
    </>
  );
}

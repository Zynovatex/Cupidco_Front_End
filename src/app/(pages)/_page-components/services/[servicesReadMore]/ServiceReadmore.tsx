"use-client";

import Description from "../../../common/texts/Description";
import Title from "../../../common/texts/Title";
import Image from "next/image";

type ServiceInnerProps = {
  imageUrl: string;
  title: string;
  description: string;
};

const SearvicesReadmore = ({
  imageUrl,
  title,
  description,
}: ServiceInnerProps) => {
  return (
    <div className="relative min-h-screen flex flex-col justify-start py-10 items-center text-center">
      {/* Background image */}
      <Image
        src={"/images/DefaultBg.png"}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      {/* Foreground content */}
      <div className="z-10 p-14 flex flex-col justify-center items-center w-full text-center">
        <Title fontSize="text-4xl" text="Our Services" />
        <div className="my-4"></div>
        <Title fontSize="text-2xl" text={title} />
        <div className="mt-10 flex flex-col lg:grid lg:grid-cols-2 gap-10 w-full max-w-6xl">
          {/* Image container */}
          <div className="order-2 lg:order-1 w-full flex justify-center">
            <Image
              src={imageUrl}
              alt="Service Image"
              width={600}
              height={200}
              objectFit="cover"
            />
          </div>

          {/* Text and button container */}
          <div className="order-3 lg:order-2 mt-4 lg:mt-0 text-justify">
            <Description text={description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearvicesReadmore;

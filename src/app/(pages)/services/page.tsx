import Description from "@/components/common/texts/Description";
import Title from "@/components/common/texts/Title";
import Image from "next/image";
import Link from "next/link";
import ServicesCard from "../_page-components/services/ServiceCard";

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const cardData: CardProps[] = [
  {
    title: "Service Title 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/images/SliderImage1.png",
  },
  {
    title: "Service Title 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/images/SliderImage2.png",
  },
  {
    title: "Service Title 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/images/SliderImage2.png",
  },
  {
    title: "Service Title 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/images/SliderImage3.png",
  },
  {
    title: "Service Title 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/images/SliderImage1.png",
  },
  {
    title: "Service Title 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/images/SliderImage2.png",
  },
  {
    title: "Service Title 7",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/images/SliderImage3.png",
  },
  {
    title: "Service Title 8",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imageSrc: "/images/SliderImage1.png",
  },
];

const ServicesPage = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-start py-10 pt-16 items-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-cover">
          <Image
            src="/images/Defaultbg.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Background"
            priority
          />
        </div>

        {/* Content */}
        <div
          className="
        container mx-auto p-5 px-4 
        px-4sm:px-6 lg:px-8 z-10 
        relative space-y-3 
      "
        >
          {/* Title */}
          <div className="text-center">
            <Title
              text="Our Services"
              center={true}
              fontSize="max-sm:text-xl  
            md:text-2xl 
            pt-5
            xl:text-4xl"
            />
          </div>

          {/* Description */}
          <div className="text-center p-2 px-9">
            <Description
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book"
              center={true}
              fontWeight="font-regular"
              fontSize="max-sm:text-md xl:text-xl"
            />
          </div>
          {/* Slider Component */}
          <div className="py-6">
            <div className="p-10">
              <div className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 ">
                {cardData.map((card, index) => (
                  <Link key={index} href={`/service/${index + 1}`}>
                    {/* Assuming your dynamic route for service details is '/service/[id]' */}
                    <div>
                      <ServicesCard
                        title={card.title}
                        description={card.description}
                        imageSrc={card.imageSrc}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

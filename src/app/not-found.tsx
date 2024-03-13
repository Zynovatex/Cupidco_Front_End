import Title from "@/components/common/texts/Title";

export default function NotFound() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-16"
        style={{ backgroundImage: "url(/images/ContactusBg.png)" }}
      >
        <div>
          <Title
            text="404 Page Not Found!"
            fontSize="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl"
            center={true}
            fontWeight="font-normal"
            uppercase={true}
          />
        </div>
      </div>
    </>
  );
}

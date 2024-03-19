export default function Title2({ label }: { label: string }) {
  return (
    <>
      <div className="text-[#6D2E46] font-playfair-display underline font-bold py-3 md:py-5  text-base md:text-lg lg:text-xl xl:text-2xl">
        {label}
      </div>
    </>
  );
}
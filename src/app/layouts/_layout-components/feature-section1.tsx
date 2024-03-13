import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export default function FeatureSection1() {
  return (
    <>
      <div className="    border-2 lg:pl-5  py-1 md:py-[6px] px-2 max-lg:text-base text-lg rounded-lg md:rounded-[30px] text-primary-purple font-bold border-[#4d194d]/[.24] flex font-playfair-display max-lg:gap-4 gap-8 bg-[#4d194d]/[.14] items-center">
        <Link href="/packages1">
          <p>Packages</p>
        </Link>
        <p>|</p>
        <p>Proposals</p>
        <p>|</p>
        <p>Bookmarks</p>
        <div className=" hidden md:block rounded-full text-white text-sm bg-primary-purple p-2 ">
          <IoSearch />
        </div>
      </div>
    </>
  );
}

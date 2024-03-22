import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";

export default function FeatureSection1() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // Explicitly specify inputRef type

  const toggleInput = () => {
    setShowInput((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* input */}
      {showInput && (
        <div className="relative" ref={inputRef}>
          <input
            type="text"
            className="block appearance-none focus:outline-none bg-[#4d194d]/[.14]  pr-12 rounded-3xl w-full  font-PlayfairDisplay border border-[#4d194d]/[.24] text-primary-purple font-bold px-4 py-3 shadow leading-tight "
          />
          <div className="rounded-full text-white text-sm bg-primary-purple p-2 absolute top-2  right-2 cursor-pointer">
            <IoSearch />
          </div>
        </div>
      )}

      {/* packages  */}
      {!showInput && (
        <div
          className={`border-2 lg:pl-5 py-1 md:py-[6px] px-2 max-lg:text-base text-lg rounded-3xl text-primary-purple font-bold border-[#4d194d]/[.24] flex font-PlayfairDisplaymax-lg:gap-4 gap-8 bg-[#4d194d]/[.14] items-center`}
        >
          <Link href="/packages1">
            <p>Packages</p>
          </Link>
          <p>|</p>
          <p>Proposals</p>
          <p>|</p>
          <p>Bookmarks</p>

          <div
            className="rounded-full text-white text-sm bg-primary-purple p-2 cursor-pointer"
            onClick={toggleInput}
          >
            <IoSearch />
          </div>
        </div>
      )}
    </>
  );
}

import React from "react";
import { TbHeartSearch } from "react-icons/tb";

interface SearchBarProps {
  width?: string;
  height?: string;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  width = "max-w-md",
  placeholder = "Search",
}) => {
  return (
    <form className={`mx-auto ${width}`}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white font-Quicksand"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <TbHeartSearch className="w-4 h-4 text-primary-purple dark:text-primary-purple " />
        </div>
        <input
          type="search"
          id="default-search"
          className={`block w-full font-Quicksand p-4 pl-10 text-sm bg-[#ffe2e2] text-gray-900 border border-gray-300 rounded-lg focus:ring-primary-purple focus:border-primary-purple focus:ring-1`}
          placeholder={placeholder}
          required
        />
        <button
          type="submit"
          className="text-white font-Quicksand absolute right-2.5 bottom-2.5 bg-primary-purple hover:bg-primary-purple focus:ring-1 focus:outline-none focus:ring-primary-purple font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

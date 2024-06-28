import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for any word..."
        className="bg-[#F4F4F4] w-[100%] text-md font-semibold rounded-xl px-5 py-2"
      />
      <CiSearch />
    </div>
  );
};

export default SearchBar;

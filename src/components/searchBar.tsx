import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Context } from "../context/context";

const SearchBar: React.FC = () => {
  const { mode } = useContext(Context);
  return (
    <div
      className={`flex justify-between w-[100%] px-5 py-2 rounded-xl  ${
        mode ? " bg-[#3A3A3A]" : " bg-[#F4F4F4]"
      }`}
    >
      <input
        type="text"
        placeholder="Search for any word..."
        className={`w-[90%] text-md font-semibold outline-none ${
          mode ? "text-[#FFFFFF] bg-[#3A3A3A]" : "text-[#2D2D2D] bg-[#F4F4F4]"
        }`}
      />
      <button className="text-[#A445ED] right-[55px] top-[66px]">
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchBar;

import React, { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Context } from "../context/context";

const SearchBar: React.FC = () => {
  const {
    mode,
    inputText,
    setInputText,
    HandleSearch,
    inputError,
    setInputError,
  } = useContext(Context);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    if (inputError) {
      setInputError("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      HandleSearch();
    }
  };

  return (
    <div className="pt-5">
      <div
        className={`flex justify-between w-[100%] px-5 py-3 rounded-xl mt-15 ${
          mode ? " bg-[#1F1F1F]" : " bg-[#F4F4F4]"
        } ${
          inputError ? "border border-red-500" : ""
        } active:border active:border-purple-500 hover:cursor-pointer`}
      >
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Search for any word..."
          className={`w-[95%] text-md font-bold outline-none ${
            mode ? "text-[#FFFFFF] bg-[#1F1F1F]" : "text-[#2D2D2D] bg-[#F4F4F4]"
          } `}
        />
        <button
          className="text-[#A445ED] right-[55px] top-[66px]"
          onClick={HandleSearch}
        >
          <FiSearch />
        </button>
      </div>
      {inputError && (
        <p className="text-[#FF5252] font-semibold text-sm mt-1">
          {inputError}
        </p>
      )}
    </div>
  );
};

export default SearchBar;

import React, { useContext, useState } from "react";
import { Context } from "../context/context";
import { IoIosArrowDown } from "react-icons/io";

const FontSelector: React.FC = () => {
  const { mode, currentFont, setCurrentFont } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const fontOptions = ["sans-serif", "serif", "mono"];

  const handleFontChange = (font: string) => {
    setCurrentFont(font);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className={`outline-none text-sm p-2 rounded-md flex items-center gap-5 font-bold ${
          mode
            ? "bg-black text-white shadow-lg "
            : "bg-white text-black shadow-lg shadow-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {currentFont === "sans-serif"
          ? "Sans-serif"
          : currentFont === "serif"
          ? "Serif"
          : "Mono"}
        <span>
          <IoIosArrowDown className="text-purple-500" />
        </span>
      </button>
      {isOpen && (
        <div
          className={`absolute mt-2 w-[160px] right-0 rounded-xl shadow-md p-3 ${
            mode ? "bg-[#1F1F1F] shadow-purple" : "bg-white"
          }`}
        >
          {fontOptions.map((font) => (
            <div
              key={font}
              onClick={() => handleFontChange(font)}
              className={`p-2 cursor-pointer font-semibold text-sm hover:text-purple-500 ${
                mode ? " text-white" : "bg-white text-black"
              }
                `}
              style={{
                fontFamily:
                  font === "sans-serif"
                    ? "Helvetica, Arial, sans-serif"
                    : font === "serif"
                    ? "Georgia, serif"
                    : "Menlo, monospace",
              }}
            >
              {font === "sans-serif"
                ? "Sans-serif"
                : font === "serif"
                ? "Serif"
                : "Mono"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FontSelector;

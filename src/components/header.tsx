import React, { useContext } from "react";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Context } from "../context/context";
import { BiBook } from "react-icons/bi";
import FontSelector from "./fontSelector";

const Header: React.FC = () => {
  const { HandleMode, mode } = useContext(Context);
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl">
        <BiBook className="text-[#757575]" />
      </div>

      <div className="flex gap-5 items-center">
        <FontSelector />
        <div
          className={`${mode ? "bg-white" : "bg-[#E9E9E9]"} w-[0.5px] h-6`}
        ></div>
        <div className="flex gap-2 items-center">
          <div className="text-3xl">
            {mode ? (
              <MdToggleOn
                onClick={HandleMode}
                className="text-[#A445ED] cursor-pointer "
              />
            ) : (
              <MdToggleOff
                onClick={HandleMode}
                className="text-[#757575] cursor-pointer"
              />
            )}
          </div>
          <div>
            <IoMoonOutline
              className={`text-sm ${
                mode ? "text-[#A445ED] " : "text-[#757575]"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

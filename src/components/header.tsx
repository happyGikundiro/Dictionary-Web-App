import React, { useContext } from "react";
import { RiBook2Line } from "react-icons/ri";
import { MdToggleOff, MdToggleOn } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { Context } from "../context/context";
// import { colors } from "../theme";

const Header: React.FC = () => {
  const { HandleMode, mode } = useContext(Context);
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl">
        <RiBook2Line className="text-[#757575]" />
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <select className="outline-none w-[120px] text-sm">
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Mono</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-2xl">
            {mode ? (
              <MdToggleOn
                onClick={HandleMode}
                className="text-[#A445ED] "
                // className={`text-${colors.red}`}
              />
            ) : (
              <MdToggleOff onClick={HandleMode} className="text-[#757575]" />
            )}
          </div>
          <div>
            <IoMoonOutline
              className={`text-sm ${
                mode ? "text-[#A445ED]" : "text-[#757575]"
              }`}
            />
            {/* <p
              className={`${mode ? "text-red-500" : "text-blue-900"} font-bold`}
            >
              gooooo
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

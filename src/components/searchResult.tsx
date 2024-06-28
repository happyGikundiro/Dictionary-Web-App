import React, { useContext } from "react";
import { IoMdPlay } from "react-icons/io";
import { Context } from "../context/context";

const SearchResult: React.FC = () => {
  const { mode } = useContext(Context);
  return (
    <div className="space-y-6 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h1
            className={`w-[90%] text-2xl font-bold ${
              mode ? "text-[#FFFFFF] " : "text-[#2D2D2D] "
            }`}
          >
            Keyboard
          </h1>
          <p className="text-[#A445ED]">/'ki:bc:d/</p>
        </div>
        <button
          className={`${
            mode ? "bg-[#4b395a]" : "bg-[#e3c2fd]"
          } flex justify-center items-center p-3 rounded-full`}
        >
          <IoMdPlay className="text-[#A445ED]" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <p
          className={`text-md font-bold ${
            mode ? "text-[#FFFFFF] " : "text-[#2D2D2D] "
          }`}
        >
          noun
        </p>
        <div
          className={`${
            mode ? "bg-[#757575] opacity-40" : "bg-[#E9E9E9]"
          } w-[100%] h-[0.5px] mt-1`}
        ></div>
      </div>

      <div>
        <h2 className="text-[#757575] mb-5">Meaning</h2>

        <ul
          className={`list-disc ml-4 space-y-4 text-sm ${
            mode ? "text-[#FFFFFF]" : "text-[#050505]"
          }`}
        >
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            A component of many instruments including the piano, organ, and
            harpsichord consisting of usually black and white keys that cause
            different tones to be produced when struck.
          </li>
          <li>
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard{" "}
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-10">
        <p className="text-[#757575]">Synonyms</p>
        <p className="text-[#A445ED] font-bold text-sm">electronic keyboard</p>
      </div>

      <div className="flex items-center gap-4">
        <p
          className={`text-md font-bold ${
            mode ? "text-[#FFFFFF] " : "text-[#2D2D2D] "
          }`}
        >
          verb
        </p>
        <div
          className={`${
            mode ? "bg-[#757575] opacity-40" : "bg-[#E9E9E9]"
          } w-[100%] h-[0.5px] mt-1`}
        ></div>
      </div>

      <div>
        <h2 className="text-[#757575] mb-5">Meaning</h2>

        <ul
          className={`list-disc ml-4 space-y-4 text-sm ${
            mode ? "text-[#FFFFFF]" : "text-[#050505]"
          }`}
        >
          <li>
            To type on a computer keyboard.
            <p className="text-[#757575] mt-2">
              “Keyboarding is the part of this job I hate the most.”
            </p>
          </li>
        </ul>
      </div>

      <div
        className={`${
          mode ? "bg-[#757575] opacity-40" : "bg-[#E9E9E9]"
        } w-[100%] h-[0.5px] mt-1`}
      ></div>

      <div>
        <h2 className="text-[#757575] underline">source</h2>
        <a
          href=""
          className={` ${mode ? "text-[#FFFFFF] " : "text-[#2D2D2D] "}`}
        >
          https://en.wiktionary.org/wiki/keyboard
        </a>
      </div>
    </div>
  );
};

export default SearchResult;

import React, { useContext } from "react";
import { IoMdPlay } from "react-icons/io";
import { Context } from "../context/context";
import { HiOutlineExternalLink } from "react-icons/hi";

const SearchResult: React.FC = () => {
  const { mode, data } = useContext(Context);
  //   if (!data || data.length === 0) {
  //     return <div>No data found</div>;
  //   }
  const wordData = data[0];

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };
  return (
    <div>
      <div className="space-y-6 pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h1
              className={`w-[90%] text-2xl font-bold ${
                mode ? "text-[#FFFFFF] " : "text-[#2D2D2D] "
              }`}
            >
              {wordData?.word}
            </h1>
            <p className="text-[#A445ED]">{wordData?.phonetics[0].text}</p>
          </div>
          <button
            className={`${
              mode ? "bg-[#4b395a]" : "bg-[#e3c2fd]"
            } flex justify-center items-center p-3 rounded-full`}
            onClick={() => playAudio(wordData?.phonetics[0].audio)}
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
            {wordData?.meanings[0].partOfSpeech}
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
            className={`space-y-4 text-sm ${
              mode ? "text-[#FFFFFF]" : "text-[#050505]"
            }`}
          >
            {wordData?.meanings[0].definitions.map((definition, index) => (
              <li
                key={index}
                className="relative pl-4 before:absolute before:left-0 before:top-2  before:bg-[#A445ED] before:h-1 before:w-1 before:rounded-full"
              >
                {definition.definition}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-10">
          <p className="text-[#757575]">Synonyms</p>
          <p className="text-[#A445ED] font-bold text-sm mt-1">
            {wordData?.meanings[0].synonyms.join(", ")}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p
            className={`text-md font-bold ${
              mode ? "text-[#FFFFFF] " : "text-[#2D2D2D] "
            }`}
          >
            {wordData?.meanings[1].partOfSpeech}
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
            className={`space-y-4 text-sm ${
              mode ? "text-[#FFFFFF]" : "text-[#050505]"
            }`}
          >
            {wordData?.meanings[1].definitions.map((definition, index) => (
              <li
                key={index}
                className="relative pl-4 before:absolute before:left-0 before:top-2  before:bg-[#A445ED] before:h-1 before:w-1 before:rounded-full"
              >
                {definition.definition}
                {definition.example && (
                  <p className="text-[#757575] mt-2">"{definition.example}"</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${
            mode ? "bg-[#757575] opacity-40" : "bg-[#E9E9E9]"
          } w-[100%] h-[0.5px] mt-1`}
        ></div>

        <div>
          <h2 className="text-[#757575] underline">source</h2>
          {wordData?.sourceUrls.map((url, index) => (
            <a
              href={url}
              key={index}
              className={` ${
                mode ? "text-[#FFFFFF] " : "text-[#2D2D2D] "
              } underline flex items-center gap-1`}
            >
              {url}
              <span>
                <HiOutlineExternalLink className="text-[#757575] mt-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
      {!wordData && <div>no word</div>}
    </div>
  );
};

export default SearchResult;

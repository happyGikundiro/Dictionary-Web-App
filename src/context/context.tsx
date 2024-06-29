import React, { createContext, useState } from "react";
import {
  ContextProviderProps,
  ContextType,
  WordData,
} from "../utils/interface";

const defaultContext: ContextType = {
  HandleMode: () => {},
  DisplayWords: () => {},
  mode: false,
  inputText: "",
  setInputText: () => {},
  data: [],
  setData: () => {},
};

export const Context = createContext<ContextType>(defaultContext);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [data, setData] = useState<WordData[]>([]);

  const HandleMode = (): void => {
    setMode((prev) => !prev);
  };

  const DisplayWords = () => {
    if (inputText.trim() === "") return;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  return (
    <Context.Provider
      value={{
        HandleMode,
        mode,
        DisplayWords,
        inputText,
        setInputText,
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

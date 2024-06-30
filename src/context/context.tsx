import React, { createContext, useState, useEffect } from "react";
import {
  ContextProviderProps,
  ContextType,
  WordData,
  NotFound,
} from "../utils/interface";

const defaultContext: ContextType = {
  HandleMode: () => {},
  DisplayWords: () => {},
  mode: false,
  inputText: "",
  setInputText: () => {},
  data: [],
  setData: () => {},
  notFound: null,
  setNotFound: () => {},
  inputError: "",
  setInputError: () => {},
  HandleSearch: () => {},
  isLoading: false,
  currentFont: "sans-serif",
  setCurrentFont: () => {},
};

export const Context = createContext<ContextType>(defaultContext);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [data, setData] = useState<WordData[]>([]);
  const [notFound, setNotFound] = useState<NotFound | null>(null);
  const [inputError, setInputError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentFont, setCurrentFont] = useState<string>("sans-serif");

  const HandleMode = (): void => {
    setMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("mode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode !== null) {
      setMode(JSON.parse(savedMode));
    }
  }, []);

  const isValidString = (text: string) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
  };

  const HandleSearch = () => {
    if (inputText.trim() === "") {
      setInputError("Whoops, can't be empty…");
      setData([]);
      setNotFound(null);
      return;
    } else if (!isValidString(inputText)) {
      setInputError("Please enter a valid word.");
      setData([]);
      setNotFound(null);
      return;
    } else {
      setInputError("");
    }
    DisplayWords();
  };

  const DisplayWords = () => {
    setIsLoading(true);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.title === "No Definitions Found") {
          setData([]);
          setNotFound({
            title: data.title,
            message: data.message,
            resolution: data.resolution,
          });
        } else {
          setData(data);
          setNotFound(null);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setNotFound({
          title: "Error",
          message:
            "There was a problem fetching the data. Please try again later.",
        });
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
        notFound,
        setNotFound,
        inputError,
        setInputError,
        HandleSearch,
        isLoading,
        currentFont,
        setCurrentFont,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

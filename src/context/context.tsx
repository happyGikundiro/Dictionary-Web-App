import React, { createContext, useState } from "react";
import { ContextProviderProps, ContextType } from "../utils/interface";

const defaultContext: ContextType = {
  HandleMode: () => {},
  mode: false,
};

export const Context = createContext<ContextType>(defaultContext);

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<boolean>(false);

  function HandleMode(): void {
    setMode((prev) => !prev);
  }
  return (
    <Context.Provider value={{ HandleMode, mode }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

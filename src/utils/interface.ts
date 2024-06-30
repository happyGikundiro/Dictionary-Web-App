import { ReactNode } from "react";

export interface ContextType{
    mode: boolean
    HandleMode:()=>void
    DisplayWords:()=>void
    inputText:string
    setInputText:(inputText:string)=>void
    data:WordData[]
    setData:(data:WordData[])=>void
    notFound: NotFound | null;
    setNotFound: React.Dispatch<React.SetStateAction<NotFound | null>>;
    inputError: string,
    setInputError: (inputError: string) => void,
    HandleSearch:()=>void
    isLoading: boolean
    currentFont: string,
    setCurrentFont: (currentFont: string) => void,
}

export interface ContextProviderProps{
    children: ReactNode
}

export interface License {
    name: string;
    url: string;
  }
  
  export interface Phonetic {
    text?: string;
    audio: string;
    sourceUrl: string;
    license: License;
  }
  
  export interface Definition {
    definition: string;
    synonyms: string[];
    antonyms: string[];
    example?: string;
  }
  
  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
    synonyms: string[];
    antonyms: string[];
  }
  
  export interface WordData {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
    license: License;
    sourceUrls: string[];
  }

  export interface NotFound {
    title: string;
    message: string;
    resolution?: string;
  }
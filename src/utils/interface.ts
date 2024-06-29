import { ReactNode } from "react";

export interface ContextType{
    mode: boolean
    HandleMode:()=>void
    DisplayWords:()=>void
    inputText:string
    setInputText:(inputText:string)=>void
    data:WordData[]
    setData:(data:WordData[])=>void
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

import { ReactNode } from "react";

export interface ContextType{
    mode: boolean
    HandleMode:()=>void
}

export interface ContextProviderProps{
    children: ReactNode
}


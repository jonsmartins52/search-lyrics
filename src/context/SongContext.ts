import { createContext } from "react";
import { SongContextType } from "../types/SongContext";

export const SongContext = createContext<SongContextType | null>(null);

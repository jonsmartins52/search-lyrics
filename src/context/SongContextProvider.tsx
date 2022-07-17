import React, { useState } from "react";
import { SongContext } from "./SongContext";
import { Song } from "../types/Musics";

interface Props {
  children: React.ReactNode;
}

const SongContextProvider = ({ children }: Props) => {
  const [song, setSong] = useState<Song>({
    artist: "",
    title: "",
    lyric: "",
  });

  const saveSong = (song: Song) => {
    setSong(song);
  };

  return (
    <SongContext.Provider value={{ song, saveSong }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongContextProvider;

import { Song } from "./Musics";

export type SongContextType = {
  song: Song;
  saveSong: (song: Song) => void;
};

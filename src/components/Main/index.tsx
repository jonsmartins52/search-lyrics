import { useContext } from "react";
import { SongContext } from "../../context/SongContext";
import { SongContextType } from "../../types/SongContext";

import "./styles.css";

function Main() {
  const { song } = useContext(SongContext) as SongContextType;
  const { lyric } = song;

  return (
    <main className="main">
      <h1 className="title">{song.title ? `${song.title}` : "Título"}</h1>
      <h2 className="artist-name">
        {song.artist ? `${song.artist}` : "Artista"}
      </h2>
      <div>
        {lyric.split(/(\r\n|\r|\n)/g).map((paragraph, index) => (
          <p key={index}> {paragraph} </p>
        ))}
      </div>
    </main>
  );
}

export default Main;

import { useContext } from "react";
import { SongContext } from "../../context/SongContext";
import { SongContextType } from "../../types/SongContext";
import EmptyItem from "../EmptyItem";

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
      <div
        className={lyric.length ? "lyric-container" : "lyric-container--empty"}
      >
        {lyric.length ? (
          lyric
            .split(/(\r\n|\r|\n)/g)
            .map((paragraph, index) => <p key={index}> {paragraph} </p>)
        ) : (
          <EmptyItem text="Não há letra para exibir." />
        )}
      </div>
    </main>
  );
}

export default Main;

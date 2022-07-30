import React, { useState, useContext } from "react";
import { MdSearch } from "react-icons/md";
import api from "../../services/api";
import { SongContext } from "../../context/SongContext";
import { SongResponse } from "../../types/Musics";
import Button from "../Button";
import Spinner from "../Spinner";

import "./styles.css";
import { SongContextType } from "../../types/SongContext";
import EmptyItem from "../EmptyItem";

function Aside() {
  const [artist, setArtist] = useState("");
  const [songsInfo, setSongsInfo] = useState<SongResponse>();
  const [isSpinnerActive, setIsSpinnerActive] = useState(false);
  const { saveSong } = useContext(SongContext) as SongContextType;

  async function handleArtist() {
    try {
      setIsSpinnerActive(true);
      const response = await api.get(`suggest/${artist}`);
      setSongsInfo(response.data);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setIsSpinnerActive(false);
    }
  }

  async function handleSong(artist: string, songTitle: string) {
    try {
      setIsSpinnerActive(true);
      const response = await api.get(`v1/${artist}/${songTitle}`);

      saveSong({
        artist,
        title: songTitle,
        lyric: response.data.lyrics,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsSpinnerActive(false);
    }
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleArtist();
  }

  return (
    <aside className="asideContainer">
      <Spinner isSpinnerActive={isSpinnerActive} />

      <section className="searchForm">
        <input
          placeholder="Artista"
          type="text"
          className="searchForm__input"
          autoCorrect="false"
          onKeyUp={(e) => handleKeyUp(e)}
          onChange={(e) => setArtist(e.target.value)}
        />

        <Button
          Icon={MdSearch}
          onClick={() => handleArtist()}
          classname="searchForm__button"
        />
      </section>
      <section className="musics">
        <h2 className="musics__title">Músicas</h2>
        <ul
          className={
            songsInfo?.data.length ? "musics__list" : "musics__list--empty"
          }
        >
          {songsInfo?.data.length ? (
            songsInfo?.data.map((song) => (
              <li
                key={song.id}
                className="musics__list__item"
                onClick={() => handleSong(song.artist.name, song.title)}
              >
                {song.title}
              </li>
            ))
          ) : (
            <EmptyItem text="Nenhuma música encontrada." />
          )}
        </ul>
      </section>
    </aside>
  );
}

export default Aside;

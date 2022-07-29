import { useState, useContext } from "react";
import api from "../../services/api";
import { SongContext } from "../../context/SongContext";
import { SongResponse } from "../../types/Musics";
import Button from "../Button";
import Spinner from "../Spinner";

import "./styles.css";
import { SongContextType } from "../../types/SongContext";
import ItemVazio from "../ItemVazio";

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

  async function handleNextMusicList(uri: string) {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/${uri}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return (
    <aside className="asideContainer">
      <Spinner isSpinnerActive={isSpinnerActive} />

      <section className="searchForm">
        <input
          type="text"
          className="searchForm__input"
          autoCorrect="false"
          onChange={(e) => setArtist(e.target.value)}
        />

        <Button
          text="Buscar"
          onClick={() => handleArtist()}
          classname="searchForm__button"
        />
      </section>
      <section className="musics">
        <h2 className="musics__title">Músicas</h2>
        <ul className="musics__list">
          {/* {songsInfo?.data.map((song) => (
            <li
              key={song.id}
              className="musics__list__item"
              onClick={() => handleSong(song.artist.name, song.title)}
            >
              {song.title}
            </li>
          ))} */}
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
            <ItemVazio />
          )}
        </ul>
      </section>
      <section className="buttons">
        <Button
          text="Anterior"
          onClick={() => console.log}
          classname="buttons__button"
        />
        <Button
          text="Próximo"
          onClick={() => handleNextMusicList(songsInfo?.next ?? "")}
          classname="buttons__button"
        />
      </section>
    </aside>
  );
}

export default Aside;

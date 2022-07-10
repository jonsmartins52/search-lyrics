import "./styles.css";

function Aside() {
  return (
    <aside className="asideContainer">
      <div className="searchForm">
        <input type="text" className="searchForm__input" />
        <button className="searchForm__button">Buscar</button>
      </div>
      <div className="musics">
        <h2 className="musics__title">Músicas:</h2>
        <ul className="musics__list">
          <li className="musics__list__item">Sem sentido</li>
          <li className="musics__list__item">Antes que você conte até dez</li>
          <li className="musics__list__item">Já não sei o que fazer comigo</li>
          <li className="musics__list__item">Cobra de vidro</li>
          <li className="musics__list__item">Sasha Grey</li>
          <li className="musics__list__item">Santa sampa</li>
          <li className="musics__list__item">Vício verso</li>
          <li className="musics__list__item">Distraídos venceremos</li>
          <li className="musics__list__item">O amor e o acaso</li>
          <li className="musics__list__item">Fingir que não dói</li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;

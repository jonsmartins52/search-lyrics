import "./styles.css";

function Aside() {
  return (
    <aside className="asideContainer">
      <div className="searchForm">
        <input type="text" className="searchForm__input" />
        <button className="searchForm__button">Buscar</button>
      </div>
      <div>Lista de músicas</div>
    </aside>
  );
}

export default Aside;

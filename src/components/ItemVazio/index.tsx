import React from "react";
import { MdMusicOff } from "react-icons/md";

import "./styles.css";

function ItemVazio() {
  return (
    <div className="empty-container">
      <MdMusicOff size={30} />
      <p>nenhum item encontrado.</p>
    </div>
  );
}

export default ItemVazio;

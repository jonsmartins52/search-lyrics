import React from "react";
import { MdMusicOff } from "react-icons/md";

import "./styles.css";

interface Props {
  text: string;
}

function ItemVazio({ text }: Props) {
  return (
    <div className="empty-container">
      <MdMusicOff size={30} />
      <p>{text}</p>
    </div>
  );
}

export default ItemVazio;

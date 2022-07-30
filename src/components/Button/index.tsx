import { IconType } from "react-icons";
import "./styles.css";

interface Props {
  text?: string;
  classname?: string;
  Icon?: IconType | undefined;
  onClick: () => {};
}

function Button({ text, onClick, classname, Icon }: Props) {
  return (
    <button
      className={`button ${classname ? classname : ""}`}
      onClick={onClick}
    >
      {Icon ? <Icon size={25} /> : text}
    </button>
  );
}

export default Button;

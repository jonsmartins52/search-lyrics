import "./styles.css";

interface Props {
  text: string;
  classname?: string;
  onClick: () => {};
}

function Button({ text, onClick, classname }: Props) {
  return (
    <button
      className={`button ${classname ? classname : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

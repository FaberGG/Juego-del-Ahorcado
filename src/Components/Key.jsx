import React from "react";
import "../Styles/Key.css";
export const Key = ({ letter, click, Adivinado, Fallos, WinState }) => {
  const presionado = () => {
    if (letter.length > 1) return "key button";
    if (Adivinado.includes(letter)) {
      return "key presionadoCorrecto";
    } else if (Fallos.includes(letter)) {
      return "key presionadoFallo";
    }
    return "key";
  };
  return (
    <div className={presionado()} onClick={() => click(letter)}>
      {letter}
    </div>
  );
};

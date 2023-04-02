import React from "react";
import "../Styles/Word.css";
export const Word = ({ OnPlay, setOnPlay, Adivinado, Palabra, setPalabra }) => {
  const handleInputChange = ({ target }) => {
    setPalabra(target.value.replace(/\s+/g, ""));
  };
  const handleKeyDown = (event) => {
    switch (event.key) {
      case "Enter":
        play();
        break;

      default:
        break;
    }
  };
  const play = () => {
    Palabra.length >= 1 ? setOnPlay(true) : setOnPlay(false);
  };
  return (
    <div className="word">
      <input
        className={OnPlay ? "nodisplay" : ""}
        placeholder="Escriba una palabra"
        value={Palabra}
        autoFocus
        type="text"
        maxLength={23}
        onInput={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={play} className={OnPlay ? "nodisplay" : ""}>
        Enter
      </button>
      <>
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[0]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[1]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[2]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[3]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[4]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[5]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[6]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[7]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[8]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[9]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[10]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[11]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[12]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[13]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[14]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[15]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[16]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[17]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[18]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[19]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[20]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[21]} />
        <Square Adivinado={Adivinado} OnPlay={OnPlay} Letra={Palabra[22]} />
      </>
    </div>
  );
};

function Square({ Letra, OnPlay, Adivinado }) {
  const letraAdivinada = () => {
    switch (OnPlay) {
      case true:
        if (Adivinado.search(Letra) !== -1) {
          return Letra;
        }
        break;
      case false:
        return Letra;
      default:
        break;
    }
  };
  return (
    <div className={Letra ? "square" : "square nodisplay"}>
      {Letra ? letraAdivinada() : ""}
    </div>
  );
}

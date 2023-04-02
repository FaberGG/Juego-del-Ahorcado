import "./App.css";
import { Animation } from "./Components/Animation";
import { Keyboard } from "./Components/Keyboard";
import { Word } from "./Components/Word";
import { useState } from "react";
function App() {
  const [OnPlay, setOnPlay] = useState(false);
  const [Adivinado, setAdivinado] = useState("");
  const [Palabra, setPalabra] = useState("");
  const [Fallos, setFallos] = useState("");
  const [WinState, setWinState] = useState("");
  const click = (e) => {
    switch (e) {
      case "Reinicio":
        setOnPlay(false);
        setAdivinado("");
        setPalabra("");
        setFallos("");
        setWinState("");
        break;
      case "Pista":
        break;
      default:
        if (
          Palabra.includes(e) &&
          OnPlay &&
          !Adivinado.includes(e) &&
          !WinState
        ) {
          setAdivinado(Adivinado + Palabra[Palabra.indexOf(e)]);
          let j = 1;
          let arrayPalabra = [...new Set(Palabra)];
          for (let i = 0; i < Adivinado.length; i++) {
            const f = Adivinado[i];
            if (Palabra.includes(f)) {
              j++;
            }
          }
          if (arrayPalabra.length === j && !WinState) setWinState("win");
        } else if (!Fallos.includes(e) && !Palabra.includes(e) && !WinState) {
          setFallos(Fallos + e);
          if (Fallos.length >= 6 && !WinState) setWinState("Lost");
        }
    }
  };
  return (
    <div className="App">
      <Word
        Palabra={Palabra}
        setPalabra={setPalabra}
        OnPlay={OnPlay}
        setOnPlay={setOnPlay}
        Adivinado={Adivinado}
        setAdivinado={setAdivinado}
      />
      <Animation Fallos={Fallos} />
      <Keyboard
        pasar={click}
        OnPlay={OnPlay}
        Adivinado={Adivinado}
        Fallos={Fallos}
        WinState={WinState}
      />
    </div>
  );
}

export default App;

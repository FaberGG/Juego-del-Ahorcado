import React from "react";
import "../Styles/Animation.css";
export const Animation = ({ Fallos }) => {
  return (
    <div className="animation">
      <div className="contenedor-animacion">
        <img
          className={Fallos.length === 1 ? "fail" : "nodisplay"}
          src="https://FaberGG.github.io/Juego-del-Ahorcado/build/Images/cuadro1.png"
          alt=""
        ></img>
        <img
          className={Fallos.length === 2 ? "fail" : "nodisplay"}
          src="https://FaberGG.github.io/Juego-del-Ahorcado/build/Images/cuadro2.png"
          alt=""
        ></img>
        <img
          className={Fallos.length === 3 ? "fail" : "nodisplay"}
          src="https://FaberGG.github.io/Juego-del-Ahorcado/build/Images/cuadro3.png"
          alt=""
        ></img>
        <img
          className={Fallos.length === 4 ? "fail" : "nodisplay"}
          src="https://FaberGG.github.io/Juego-del-Ahorcado/build/Images/cuadro4.png"
          alt=""
        ></img>
        <img
          className={Fallos.length === 5 ? "fail" : "nodisplay"}
          src="https://FaberGG.github.io/Juego-del-Ahorcado/build/Images/cuadro5.png"
          alt=""
        ></img>
        <img
          className={Fallos.length === 6 ? "fail" : "nodisplay"}
          src="https://FaberGG.github.io/Juego-del-Ahorcado/build/Images/cuadro6.png"
          alt=""
        ></img>
        <img
          className={Fallos.length === 7 ? "fail" : "nodisplay"}
          src="https://FaberGG.github.io/Juego-del-Ahorcado/build/Images/cuadro7.png"
          alt=""
        ></img>
      </div>
    </div>
  );
};

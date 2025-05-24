import React from "react";
import "../Styles/Animation.css";
//importo las imagenes de la carpeta Assers/Images
import Cuadro1 from "../Assets/Images/cuadro1.png";
import Cuadro2 from "../Assets/Images/cuadro2.png";
import Cuadro3 from "../Assets/Images/cuadro3.png";
import Cuadro4 from "../Assets/Images/cuadro4.png";
import Cuadro5 from "../Assets/Images/cuadro5.png";
import Cuadro6 from "../Assets/Images/cuadro6.png";
import Cuadro7 from "../Assets/Images/cuadro7.png";

export const Animation = ({ Fallos }) => {
  return (
    <div className="animation">
      <div className="contenedor-animacion">
        <img
          className={Fallos.length === 1 ? "fail" : "nodisplay"}
          src={Cuadro1}
          alt=""
        ></img>
        <img
          className={Fallos.length === 2 ? "fail" : "nodisplay"}
          src={Cuadro2}
          alt=""
        ></img>
        <img
          className={Fallos.length === 3 ? "fail" : "nodisplay"}
          src={Cuadro3}
          alt=""
        ></img>
        <img
          className={Fallos.length === 4 ? "fail" : "nodisplay"}
          src={Cuadro4}
          alt=""
        ></img>
        <img
          className={Fallos.length === 5 ? "fail" : "nodisplay"}
          src={Cuadro5}
          alt=""
        ></img>
        <img
          className={Fallos.length === 6 ? "fail" : "nodisplay"}
          src={Cuadro6}
          alt=""
        ></img>
        <img
          className={Fallos.length === 7 ? "fail" : "nodisplay"}
          src={Cuadro7}
          alt=""
        ></img>
      </div>
    </div>
  );
};

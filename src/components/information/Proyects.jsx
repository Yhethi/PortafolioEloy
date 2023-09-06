import React, { useEffect, useState } from "react";
import vidrio from "./../../assets/img/vidrio.png";
import vidrioN1 from "./../../assets/img/vidrioN1.png";
import vidrio1 from "./../../assets/img/vidrio1.png";
import Gallery from "../proyects/Gallery";

import marDown from "./../../assets/img/proyects/marDown.jpg";
import marUp from "./../../assets/img/proyects/marUp.png";
import ufo from "./../../assets/img/proyects/ufo.png";

import "./proyects.css";

const Proyects = ({ enableSquareProyects, changeData, setVidrioClicked }) => {
  const [dataGallery, setDataGallery] = useState(0);

  useEffect(() => {
    setVidrioClicked(true);
  }, []);

  const openGallery = (e) => {
    let allGallery = document.querySelector(".allGallery");
    allGallery.style.transform = "scale(1)";
    setDataGallery(e);
    console.log(e);
  };

  return (
    <div className="cara" id="cara3">
      <div className="dinamicImage">
        <img id="marDown" src={marDown} alt={marDown} />
        <div className="ufo">
          <img id="ufo" src={ufo} alt={ufo} />
        </div>
        <img id="marUp" src={marUp} alt={marUp} />
      </div>

      <Gallery dataGallery={dataGallery} />
      <div className="contenedor_white_proyects">
        <div
          className="squareProyects"
          id="proyects1"
          onClick={(e) => {
            openGallery(0);
          }}
          data-menu="0"
        >
          <h1>Web Designs</h1>
        </div>
        <div
          className="squareProyects"
          id="proyects2"
          onClick={(e) => {
            openGallery(1);
          }}
          data-menu="1"
        >
          <h1>Web Animations</h1>
        </div>
        <div
          className="squareProyects"
          id="proyects3"
          onClick={(e) => {
            openGallery(2);
          }}
          data-menu="2"
        >
          <h1>???</h1>
          {/* <h1>Edición de Videos</h1> */}
        </div>
        <div
          className="squareProyects"
          id="proyects4"
          onClick={(e) => {
            openGallery(3);
          }}
          data-menu="3"
        >
          <h1>???</h1>
          {/* <h1>Imagenes Publicitarias</h1> */}
        </div>
        <div
          className="squareProyects"
          id="proyects5"
          onClick={(e) => {
            openGallery(4);
          }}
          data-menu="4"
        >
          <h1>???</h1>
          {/* <h1>Traducción</h1> */}
        </div>
      </div>
    </div>
  );
};

export default Proyects;

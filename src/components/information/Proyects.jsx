import React, { useEffect, useState } from "react";
import vidrio from "./../../assets/img/vidrio.png";
import vidrioN1 from "./../../assets/img/vidrioN1.png";
import vidrio1 from "./../../assets/img/vidrio1.png";
import Gallery from "../proyects/Gallery";

const Proyects = ({ enableSquareProyects, changeData, setVidrioClicked }) => {
  const [dataGallery, setDataGallery] = useState(0);

  useEffect(() => {
    const vidrio1 = document.getElementById("vidrio1");
    const vidrioN1 = document.getElementById("vidrioN1");
    const vidrio = document.getElementById("vidrio");

    vidrio1.addEventListener("click", () => {
      vidrio1.classList.remove("vidrio1Roto");
      vidrio1.classList.add("shain");
      setTimeout(() => {
        vidrio1.style.filter = "opacity(0)";
        vidrioN1.style.filter = "opacity(0)";
        vidrio.style.filter = "opacity(1)";
        vidrio.classList.add("shain2");
        enableSquareProyects();
        setVidrioClicked(true);
      }, 2000);
    });

    // const squareProyects = document.querySelectorAll(".squareProyects");
    // squareProyects.forEach((item) => {
    //   item.addEventListener("click", () => {
    //     console.log(item.dataset.menu);
    //     setDataGallery(item.dataset.menu);
    //   });
    // });
  }, []);

  const openGallery = (e) => {
    let allGallery = document.querySelector(".allGallery");
    allGallery.style.transform = "scale(1)";
    setDataGallery(e);
    console.log(e);
  };

  return (
    <div className="cara" id="cara3">
      <div className="content_vidrios">
        <img src={vidrio} alt={vidrio} className="vidrios" id="vidrio" />
        <img src={vidrioN1} alt={vidrioN1} className="vidrios" id="vidrioN1" />
        <img
          src={vidrio1}
          alt={vidrio1}
          className="vidrios vidrio1Roto"
          id="vidrio1"
        />
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
          <h1>Diseño Web</h1>
        </div>
        <div
          className="squareProyects"
          id="proyects2"
          onClick={(e) => {
            openGallery(1);
          }}
          data-menu="1"
        >
          <h1>Animaciones Web</h1>
        </div>
        <div
          className="squareProyects"
          id="proyects3"
          onClick={(e) => {
            openGallery(2);
          }}
          data-menu="2"
        >
          <h1>Edición de Videos</h1>
        </div>
        <div
          className="squareProyects"
          id="proyects4"
          onClick={(e) => {
            openGallery(3);
          }}
          data-menu="3"
        >
          <h1>Imagenes Publicitarias</h1>
        </div>
        <div
          className="squareProyects"
          id="proyects5"
          onClick={(e) => {
            openGallery(4);
          }}
          data-menu="4"
        >
          <h1>Traducción</h1>
        </div>
      </div>
    </div>
  );
};

export default Proyects;

import React, { useEffect } from "react";
import "./inicio.css";
import cohete from "../../assets/img/inicio/cohete.png";
import garden from "../../assets/img/elements/garden.png";
import palmas from "../../assets/img/elements/palmas.png";
import paisajeInicio from "../../assets/img/elements/paisajeInicio.jpg";
import palmaIz from "../../assets/img/elements/palmaIz.png";
import palmaDe from "../../assets/img/elements/palmaDe.png";
import hojaPalma from "../../assets/img/elements/hojaPalma.png";
import fotoPerfil from "../../assets/img/inicio/fotoPerfil.png";
import react from "../../assets/img/inicio/react.png";
import php from "../../assets/img/inicio/php.png";
import js from "../../assets/img/inicio/js.png";
import laravel from "../../assets/img/inicio/laravel.png";

const Inicio = ({ setChangeData }) => {
  useEffect(() => {
    setTimeout(() => {
      const agujeroNegro = document.getElementById("agujeroNegro");
      agujeroNegro.classList.add("agujeroOpen");
    }, 4000);
    setTimeout(() => {
      changeTextForest();
    }, 2000);
  }, []);

  const changeTextForest = () => {
    const textForest = document.getElementById("textForest");
    textForest.style.transitionDuration = "2s";

    setTimeout(() => {
      textForest.style.transform = "scale(0)";
      setTimeout(() => {
        textForest.style.transform = "scale(1)";
        textForest.textContent = "The best designs for your website";
        setTimeout(() => {
          textForest.style.transform = "scale(0)";
          setTimeout(() => {
            textForest.style.transform = "scale(1)";
            textForest.textContent = "Create the page you want";
            setTimeout(() => {
              textForest.style.transform = "scale(0)";
              setTimeout(() => {
                textForest.style.transform = "scale(1)";
                textForest.textContent = "Get the best animations";
                setTimeout(() => {
                  changeTextForest();
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  const animarCohete = () => {
    const inicio4 = document.getElementById("inicio4");
    const cohete = document.getElementById("cohete");
    const shot = document.getElementById("shot");
    inicio4.addEventListener("mousemove", ({ clientX, clientY }) => {
      // ,{ clientX, clientY }
      const medidasCuadro = inicio4.getBoundingClientRect();
      // console.log(inicio4.getBoundingClientRect());
      // console.log(clientX - 690, clientY - 468);
      console.log((clientY * 100) / medidasCuadro.y - 99);
      let altura = (clientY * 100) / medidasCuadro.y - 99;
      let altura2 = (clientY * 100) / medidasCuadro.y - 100;

      cohete.style.top = `${altura}%`;
      shot.style.top = `${altura2}%`;
    });
    inicio4.addEventListener("click", () => {
      shot.classList.remove("shot");
      shot.classList.add("shotNow");
      setTimeout(() => {
        shot.classList.remove("shotNow");
        shot.classList.add("shot");
      }, 500);
    });
  };

  useEffect(() => {
    animarCohete();
  }, []);

  return (
    <div className="cara" id="cara1">
      <div className="paisajeInicio">
        <div className="gardens">
          <img className="gardenBottom" src={garden} alt={garden} />
          <img className="gardenBottom2" src={garden} alt={garden} />
        </div>
        <div className="palmas">
          <img className="palmasMove" src={palmas} alt={palmas} />
        </div>
        <img src={paisajeInicio} alt={paisajeInicio} />
      </div>
      <div className="contenedor_white">
        <div className="inicio1y2">
          <div className="squareInicio" id="inicio1">
            <div className="fotoPerfil">
              <div className="orbe orbe1"></div>
              <div className="orbe orbe2"></div>

              <img src={fotoPerfil} alt={fotoPerfil} />
            </div>
            <div className="infoPerfil">
              <h1 id="agujeroNegro">
                Eloy Bonilla <br></br> Developer
              </h1>
            </div>
          </div>
          <div className="squareInicio" id="inicio2">
            <h1>Solutions to your web page fast and simple</h1>
            <p>React, Laravel, PHP, JavaScript</p>
            <a
              id="bAboutme"
              href="#aboutme"
              onClick={() => {
                setChangeData(1);
              }}
            >
              ABOUT ME
            </a>
            <div className="codeImgs">
              <img id="react" src={react} alt={react} />

              <img id="js" src={js} alt={js} />

              <img id="laravel" src={laravel} alt={laravel} />

              <img id="php" src={php} alt={php} />
            </div>
          </div>
        </div>
        <div className="inicio3y4y5">
          <div className="squareInicio" id="inicio3">
            <h1 id="textForest">Get the best animations</h1>
            <div className="petalosCayendo"></div>
          </div>
          <div className="squareInicio" id="inicio4">
            <div className="nubesGame"></div>
            <div className="cespedGame"></div>
            <div className="playerGame">
              <img id="cohete" src={cohete} alt={cohete} />
              <div className="playerShot">
                <div id="shot" className="shot"></div>
              </div>
            </div>
          </div>
          <div className="squareInicio" id="inicio5">
            <img id="palmaIz" src={palmaIz} alt={palmaIz} />
            <img id="palmaDe" src={palmaDe} alt={palmaDe} />
            <img id="hojaPalma" src={hojaPalma} alt={hojaPalma} />
            <img id="hojaPalma2" src={hojaPalma} alt={hojaPalma} />

            <div className="botonesToGo">
              <a
                id="bProyects"
                href="#proyects"
                onClick={() => {
                  setChangeData(2);
                }}
              >
                PROYECTS
              </a>
              <a
                id="bContactme"
                href="#contactme"
                onClick={() => {
                  setChangeData(3);
                }}
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

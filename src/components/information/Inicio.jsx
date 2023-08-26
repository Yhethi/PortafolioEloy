import React, { useEffect } from "react";
import "./inicio.css";

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
        textForest.textContent = "Los mejores diseños para tu web";
        setTimeout(() => {
          textForest.style.transform = "scale(0)";
          setTimeout(() => {
            textForest.style.transform = "scale(1)";
            textForest.textContent = "Crea la pagina que desees";
            setTimeout(() => {
              textForest.style.transform = "scale(0)";
              setTimeout(() => {
                textForest.style.transform = "scale(1)";
                textForest.textContent = "Obtén las mejores animaciones";
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
    inicio4.addEventListener("mousemove", ({ clientX, clientY }) => {
      // ,{ clientX, clientY }
      const medidasCuadro = inicio4.getBoundingClientRect();
      // console.log(inicio4.getBoundingClientRect());
      // console.log(clientX - 690, clientY - 468);
      console.log((clientY * 100) / medidasCuadro.y - 99);
      let altura = (clientY * 100) / medidasCuadro.y - 99;
      cohete.style.top = `${altura}%`;
    });
  };

  useEffect(() => {
    animarCohete();
  }, []);

  return (
    <div className="cara" id="cara1">
      <div className="paisajeInicio">
        <div className="gardens">
          <img
            className="gardenBottom"
            src={
              import.meta.env.VITE_APP_API_URL +
              "/src/assets/img/elements/garden.png"
            }
            alt={
              import.meta.env.VITE_APP_API_URL +
              "/src/assets/img/elements/garden.png"
            }
          />
          <img
            className="gardenBottom2"
            src={
              import.meta.env.VITE_APP_API_URL +
              "/src/assets/img/elements/garden.png"
            }
            alt={
              import.meta.env.VITE_APP_API_URL +
              "/src/assets/img/elements/garden.png"
            }
          />
        </div>
        <div className="palmas">
          <img
            className="palmasMove"
            src={
              import.meta.env.VITE_APP_API_URL +
              "/src/assets/img/elements/palmas.png"
            }
            alt={
              import.meta.env.VITE_APP_API_URL +
              "/src/assets/img/elements/palmas.png"
            }
          />
        </div>
        <img
          src={
            import.meta.env.VITE_APP_API_URL +
            "/src/assets/img/elements/paisajeInicio.jpg"
          }
          alt={
            import.meta.env.VITE_APP_API_URL +
            "/src/assets/img/elements/paisajeInicio.jpg"
          }
        />
      </div>
      <div className="contenedor_white">
        <div className="inicio1y2">
          <div className="squareInicio" id="inicio1">
            <div className="fotoPerfil">
              <div className="orbe orbe1"></div>
              <div className="orbe orbe2"></div>

              <img
                src={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/fotoPerfil.png"
                }
                alt={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/fotoPerfil.png"
                }
              />
            </div>
            <div className="infoPerfil">
              <h1 id="agujeroNegro">
                Eloy Bonilla <br></br> Developer
              </h1>
            </div>
          </div>
          <div className="squareInicio" id="inicio2">
            <h1>Soluciones a tu pagina WEB rapido y sencillo</h1>
            <p>React, Laravel, PHP, JavaScript</p>
            <a
              id="bAboutme"
              href="#aboutme"
              onClick={() => {
                setChangeData(1);
              }}
            >
              SOBRE MI
            </a>
            <div className="codeImgs">
              <img
                id="react"
                src={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/react.png"
                }
                alt={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/react.png"
                }
              />

              <img
                id="js"
                src={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/js.png"
                }
                alt={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/js.png"
                }
              />

              <img
                id="laravel"
                src={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/laravel.png"
                }
                alt={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/laravel.png"
                }
              />

              <img
                id="php"
                src={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/php.png"
                }
                alt={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/php.png"
                }
              />
            </div>
          </div>
        </div>
        <div className="inicio3y4y5">
          <div className="squareInicio" id="inicio3">
            <h1 id="textForest">Obtén las mejores animaciones</h1>
            <div className="petalosCayendo"></div>
          </div>
          <div className="squareInicio" id="inicio4">
            <div className="nubesGame"></div>
            <div className="cespedGame"></div>
            <div className="playerGame">
              <img
                id="cohete"
                src={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/cohete.png"
                }
                alt={
                  import.meta.env.VITE_APP_API_URL +
                  "/src/assets/img/inicio/cohete.png"
                }
              />
            </div>
          </div>
          <div className="squareInicio" id="inicio5">
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;

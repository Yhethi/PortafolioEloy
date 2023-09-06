import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Inicio from "./components/information/Inicio";
import AboutMe from "./components/information/AboutMe";
import Proyects from "./components/information/Proyects";
import ContactMe from "./components/information/ContactMe";
import spaceFull from "./assets/img/spaceFull.jpg";
import fog from "./assets/img/niebla.png";
// icons

function App() {
  const [changeData, setChangeData] = useState(0);
  const [vidrioClicked, setVidrioClicked] = useState(false);

  const enableSquareInicio = () => {
    const squareInicio = document.querySelectorAll(".squareInicio");
    const c_white = document.querySelector(".contenedor_white");
    c_white.classList.add("aparecer");
    squareInicio.forEach((item) => {
      item.classList.add("aparecer");
    });
  };

  const disableSquareInicio = () => {
    const squareInicio = document.querySelectorAll(".squareInicio");
    const c_white = document.querySelector(".contenedor_white");
    c_white.classList.remove("aparecer");
    squareInicio.forEach((item) => {
      item.classList.remove("aparecer");
    });
  };

  const enableSquareAbout = () => {
    const squareAbout = document.querySelectorAll(".squareAbout");
    const c_white1 = document.querySelector(".contenedor_white_about");
    c_white1.classList.add("aparecer");
    squareAbout.forEach((item, key) => {
      if (key === 0) {
        item.classList.add("upSquare");
      } else if (key === 1) {
        item.classList.add("leftSquare");
      } else if (key === 2) {
        item.classList.add("downSquare");
      } else if (key === 3) {
        item.classList.add("rightSquare");
      } else if (key === 4) {
        item.classList.add("diagonalSquare");
      }
    });
  };

  const disableSquareAbout = () => {
    const squareAbout = document.querySelectorAll(".squareAbout");
    const c_white1 = document.querySelector(".contenedor_white_about");
    c_white1.classList.remove("aparecer");
    squareAbout.forEach((item, key) => {
      if (key === 0) {
        item.classList.remove("upSquare");
      } else if (key === 1) {
        item.classList.remove("leftSquare");
      } else if (key === 2) {
        item.classList.remove("downSquare");
      } else if (key === 3) {
        item.classList.remove("rightSquare");
      } else if (key === 4) {
        item.classList.remove("diagonalSquare");
      }
    });
  };

  const enableSquareProyects = () => {
    const squareProyects = document.querySelectorAll(".squareProyects");
    const c_white2 = document.querySelector(".contenedor_white_proyects");
    c_white2.classList.add("aparecer");
    squareProyects.forEach((item) => {
      item.classList.add("aparecer");
    });
  };

  const disableSquareProyects = () => {
    const squareProyects = document.querySelectorAll(".squareProyects");
    const c_white2 = document.querySelector(".contenedor_white_proyects");
    c_white2.classList.remove("aparecer");
    squareProyects.forEach((item) => {
      item.classList.remove("aparecer");
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    if (isOpen == true) {
      closeMenu();
      setIsOpen(false);
    } else {
      const pageMenu = document.getElementById("pageMenu");
      pageMenu.style.left = "0";
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    const pageMenu = document.getElementById("pageMenu");
    pageMenu.style.left = "-145px";
  };

  useEffect(() => {
    const cubo = document.getElementById("cubo");
    const cara1 = document.getElementById("cara1");
    const cara2 = document.getElementById("cara2");
    const cara3 = document.getElementById("cara3");
    const cara4 = document.getElementById("cara4");

    if (changeData == 0) {
      cubo.style.transform = "rotateY(-180deg)";
      cara1.style.zIndex = "1";
      cara2.style.zIndex = "0";
      cara3.style.zIndex = "0";
      cara4.style.zIndex = "0";
      enableSquareInicio();
      disableSquareAbout();
      disableSquareProyects();
    } else if (changeData == 1) {
      cubo.style.transform = "rotateY(-270deg)";
      cara1.style.zIndex = "0";
      cara2.style.zIndex = "1";
      cara3.style.zIndex = "0";
      cara4.style.zIndex = "0";
      disableSquareInicio();
      enableSquareAbout();
      disableSquareProyects();
    } else if (changeData == 2) {
      if (!vidrioClicked) {
        setVidrioClicked(true);
      } else if (vidrioClicked) {
        enableSquareProyects();
      }
      cubo.style.transform = "rotateY(-360deg)";
      cara1.style.zIndex = "0";
      cara2.style.zIndex = "0";
      cara3.style.zIndex = "1";
      cara4.style.zIndex = "0";
      disableSquareInicio();
      disableSquareAbout();
    } else if (changeData == 3) {
      cubo.style.transform = "rotateY(-450deg)";
      cara1.style.zIndex = "0";
      cara2.style.zIndex = "0";
      cara3.style.zIndex = "0";
      cara4.style.zIndex = "1";
      disableSquareInicio();
      disableSquareAbout();
      disableSquareProyects();
    }
  }, [changeData]);

  return (
    <>
      <div className="contain_wallpaper">
        {/* <img id="fog" src={fog} alt={fog} /> */}
        <div id="fog"></div>
        <img id="space" src={spaceFull} alt={spaceFull} />
      </div>
      <Header
        setChangeData={setChangeData}
        openMenu={openMenu}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="contenedor3d">
        <div className="cubo" id="cubo">
          <Inicio setChangeData={setChangeData} />
          <AboutMe />
          <Proyects
            enableSquareProyects={enableSquareProyects}
            changeData={changeData}
            setVidrioClicked={setVidrioClicked}
          />
          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;

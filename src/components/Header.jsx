import React from "react";
import "./header.css";
import { TbMenu2 } from "react-icons/tb";

const Header = ({ setChangeData, openMenu, isOpen, setIsOpen }) => {
  return (
    <div className="content_header">
      <div className="left">
        <div className="logo">
          <h1>PORTAFOLIO</h1>
        </div>
      </div>
      <div className="center">
        <u id="pageMenu">
          <div id="closeButtonMenu" onClick={openMenu}>
            {!isOpen ? <TbMenu2 /> : <>X</>}
          </div>
          <li>
            <a
              id="bInicio"
              href="#inicio"
              onClick={() => {
                setChangeData(0);
                setIsOpen(false);
                openMenu();
              }}
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              id="bAboutme"
              href="#aboutme"
              onClick={() => {
                setChangeData(1);
                setIsOpen(false);
                openMenu();
              }}
            >
              ABOUT ME
            </a>
          </li>
          <li>
            <a
              id="bProyects"
              href="#proyects"
              onClick={() => {
                setChangeData(2);
                setIsOpen(false);
                openMenu();
              }}
            >
              PROYECTS
            </a>
          </li>
          <li>
            <a
              id="bContactme"
              href="#contactme"
              onClick={() => {
                setChangeData(3);
                setIsOpen(false);
                openMenu();
              }}
            >
              CONTACT ME
            </a>
          </li>
        </u>
      </div>
      <div className="right">
        <h1>Eloy Bonilla</h1>
      </div>
    </div>
  );
};

export default Header;

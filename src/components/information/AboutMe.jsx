import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <div className="cara" id="cara2">
      <div className="paisajeAboutme">
        <div className="fires">
          <div className="fireBottom"></div>
          <div className="fireBottom2"></div>
        </div>
        <div className="fireRight">
          {/* <img
            className="fireMoveRight"
            src={"http://localhost:5173/src/assets/img/elements/palmas.png"}
            alt={"http://localhost:5173/src/assets/img/elements/palmas.png"}
          /> */}
        </div>
        <div className="spaceMoveAboutMe"></div>

        <img
          className="volcanes"
          src={"http://localhost:5173/src/assets/img/elements/volcanes.png"}
          alt=""
        />
      </div>
      <div className="contenedor_white_about">
        <div className="squareAbout" id="about1">
          1
        </div>
        <div className="squareAbout" id="about2">
          2
        </div>
        <div className="squareAbout" id="about3">
          3
        </div>
        <div className="squareAbout" id="about4">
          4
        </div>
        <div className="squareAbout" id="about5">
          5
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

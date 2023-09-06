import React from "react";
import "./aboutme.css";
import me from "../../assets/img/aboutMe/me.png";
import university from "../../assets/img/aboutMe/university.png";
import developed from "../../assets/img/aboutMe/developed.png";
import lenguajes from "../../assets/img/aboutMe/lenguajes.png";
import webBrain from "../../assets/img/aboutMe/webBrain.jpg";

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
        <div className="upAbout">
          <div className="squareAbout" id="about1">
            <div className="elements">
              <p>Hello my name is Eloy Boniila, i'll talk about me here</p>
              <img src={me} alt={me} />
            </div>
          </div>
          <div className="squareAbout" id="about2">
            <div className="elements2">
              <p>
                I am a developer graduated from a University in
                Venezuela
              </p>
              <img src={university} alt={university} />
            </div>
          </div>
          <div className="squareAbout" id="about3">
            <div className="elements2">
              <p>I have made web pages for a long time</p>
              <img src={developed} alt={developed} />
            </div>
          </div>
          <div className="squareAbout" id="about4">
            <div className="elements2">
              <p>Mastering various programming languages</p>
              <img src={lenguajes} alt={lenguajes} />
            </div>
          </div>
          <div className="squareAbout" id="about5">
            <div className="elements">
              <p>
                Which are capable of creating great things like the ones you see
                on this page
              </p>
              <img src={webBrain} alt={webBrain} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import "./contactMe.css";
import meta from "../../assets/img/contactme/meta.png";
import instagram from "../../assets/img/contactme/instagram.png";
import gmail from "../../assets/img/contactme/gmail.png";
import whatsapp from "../../assets/img/contactme/whatsapp.png";
import dLeon from "../../assets/img/contactme/dLeon.jpg";
import d1Leon from "../../assets/img/contactme/d1Leon.png";
import { NavLink, redirect, useNavigate } from "react-router-dom";

const ContactMe = () => {
  const navigate = useNavigate();
  return (
    <div className="cara" id="cara4">
      <img id="dLeon" src={dLeon} alt={dLeon} />
      <div className="flyDLeon">
        <img id="d1Leon1" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon2" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon3" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon4" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon5" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon6" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon7" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon8" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon9" src={d1Leon} alt={d1Leon} />
        <img id="d1Leon10" src={d1Leon} alt={d1Leon} />
      </div>
      <div className="socialContact">
        <div className="squareSocial">
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="https://www.facebook.com/EloyJoseBonillaGuerrero"
            exact
            target="_blank"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>FACEBOOK</p>
            <img src={meta} alt={meta} />
          </NavLink>
        </div>
        <div className="squareSocial">
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="https://www.instagram.com/eloyjose_27/?hl=es-la"
            exact
            target="_blank"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>INSTAGRAM</p>
            <img src={instagram} alt={instagram} />
          </NavLink>
        </div>
        <div className="squareSocial">
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="mailto:eloyjosebonillag@gmail.com?Subject=Buen%20dia%20Eloy%20quiero%20conversar%20contigo%20para%20un%20proyecto%20web!."
            exact
            target="_blank"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p style={{ textAlign: "center" }}>GMAIL</p>
            <img src={gmail} alt={gmail} />
          </NavLink>
        </div>
        <div className="squareSocial">
          <NavLink
            className="navbar-item"
            activeClassName="is-active"
            to="https://wa.me/584124706698?text=Hello,%20I'm%20interesting%20work%20with%20you."
            exact
            target="_blank"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>WHATSAPP</p>
            <img src={whatsapp} alt={whatsapp} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

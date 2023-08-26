import React, { useState } from "react";
import "./cubeGallery.css";

const CubeGallery = ({ datosApi, imgPreview }) => {
  console.log(datosApi);

  return (
    <div className="content_cubeGallery">
      <div className="onlyCubeGallery">
        <div className="cara" id="uno">
          <img
            src={datosApi.face1}
            alt={datosApi.face1}
            onClick={(e) => {
              imgPreview(e);
            }}
          />
        </div>
        <div className="cara" id="dos">
          <img
            src={datosApi.face2}
            alt={datosApi.face2}
            onClick={(e) => {
              imgPreview(e);
            }}
          />
        </div>
        <div className="cara" id="tres">
          <img
            src={datosApi.face3}
            alt={datosApi.face3}
            onClick={(e) => {
              imgPreview(e);
            }}
          />
        </div>
        <div className="cara" id="cuatro">
          <img
            src={datosApi.face4}
            alt={datosApi.face4}
            onClick={(e) => {
              imgPreview(e);
            }}
          />
        </div>
        <div className="cara" id="cinco">
          <img
            src={datosApi.src}
            alt={datosApi.src}
            onClick={(e) => {
              imgPreview(e);
            }}
          />
        </div>
        <div className="cara" id="seis"></div>
      </div>
    </div>
  );
};

export default CubeGallery;

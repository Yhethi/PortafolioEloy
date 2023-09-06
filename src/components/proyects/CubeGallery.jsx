import React, { useEffect, useState } from "react";
import "./cubeGallery.css";

const CubeGallery = ({ datosApi, imgPreview, isVideo }) => {
  const [isCubeVideo, setIsCubeVideo] = useState(false);

  const transform = () => {
    console.log("entra");
    console.log(datosApi.src);

    if (datosApi.src !== undefined) {
      if (
        datosApi.src.substr(datosApi.src.length - 4, datosApi.src.length) ===
        ".mp4"
      ) {
        setIsCubeVideo(true);
      } else {
        setIsCubeVideo(false);
      }
    }
  };

  useEffect(() => {
    transform();
  }, [datosApi]);

  // console.log(datosApi);

  return (
    <div className="content_cubeGallery">
      <div className="onlyCubeGallery">
        <div className="cara" id="uno">
          <img
            title={datosApi.title}
            src={datosApi.face1}
            alt={datosApi.face1}
            onClick={(e) => {
              imgPreview(e, 1);
            }}
          />
        </div>
        <div className="cara" id="dos">
          <img
            title={datosApi.title}
            src={datosApi.face2}
            alt={datosApi.face2}
            onClick={(e) => {
              imgPreview(e, 1);
            }}
          />
        </div>
        <div className="cara" id="tres">
          <img
            title={datosApi.title}
            src={datosApi.face3}
            alt={datosApi.face3}
            onClick={(e) => {
              imgPreview(e, 1);
            }}
          />
        </div>
        <div className="cara" id="cuatro">
          <img
            title={datosApi.title}
            src={datosApi.face4}
            alt={datosApi.face4}
            onClick={(e) => {
              imgPreview(e, 1);
            }}
          />
        </div>
        <div className="cara" id="cinco">
          {!isCubeVideo ? (
            <>
              <img
                title={datosApi.title}
                src={datosApi.src}
                alt={datosApi.src}
                onClick={(e) => {
                  imgPreview(e, 1);
                }}
              />
            </>
          ) : (
            <>
              <img
                title={datosApi.title}
                id="playVideo"
                src={datosApi.face1}
                alt={datosApi.face1}
                onClick={(e) => {
                  imgPreview(datosApi.src, 2);
                }}
                onLoad={(e) => {
                  setTimeout(() => {
                    // console.log("e",e);
                    e.target.click();
                  }, 1000);
                }}
              />
            </>
          )}
        </div>
        <div className="cara" id="seis"></div>
      </div>
    </div>
  );
};

export default CubeGallery;

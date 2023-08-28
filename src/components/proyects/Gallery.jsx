import React, { useEffect, useState } from "react";
import CubeGallery from "./CubeGallery";
import space from "../../assets/img/spaceFull.jpg";
import none from "../../assets/img/none.jpg";
import niebla2 from "../../assets/img/niebla2.png";

const Gallery = ({ dataGallery }) => {
  const [showApi, setShowApi] = useState([]);
  const [cubeImgs, setCubeImgs] = useState([]);
  const [datosApi, setDatosApi] = useState([]);
  const [closeModal, setCloseModal] = useState(0);

  const [imgView, setImgView] = useState(
    "http://localhost:5173/src/assets/img/none.jpg"
  );

  const imgPreview = (e) => {
    const imgPreview = document.querySelector(".imgPreview");
    imgPreview.style.transitionDuration = "0 !important";
    imgPreview.style.transform =
      "scale(0) translateX(200px) translateY(-170px)";
    imgPreview.style.width = "0";
    imgPreview.style.height = "0";

    setTimeout(() => {
      imgPreview.style.transitionDuration = "1s";
      imgPreview.style.transform =
        "scale(1) translateX(200px) translateY(-170px)";
      imgPreview.style.width = "50%";
      imgPreview.style.height = "500px";
      setImgView(e.target.src);
    }, 100);
  };

  const [proyects, setProyects] = useState([
    {
      id: 1,
      title: "",
      src: space,
      face1: space,
      face2: niebla2,
      face3: none,
      face4: space,
    },
    {
      id: 2,
      title: "",
      src: space,
      face1: space,
      face2: niebla2,
      face3: none,
      face4: space,
    },
    {
      id: 3,
      title: "",
      src: space,
      face1: space,
      face2: niebla2,
      face3: none,
      face4: space,
    },
    {
      id: 4,
      title: "",
      src: space,
      face1: space,
      face2: niebla2,
      face3: none,
      face4: space,
    },
    {
      id: 5,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 6,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 7,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 8,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 9,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 10,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 11,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 12,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
  ]);
  const [animacion, setAnimacion] = useState([
    {
      id: 1,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 2,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 3,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 4,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 5,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 6,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 7,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 8,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 9,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 10,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 11,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 12,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
  ]);

  const [edicionVideos, setEdicionVideos] = useState([
    {
      id: 1,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 2,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 3,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 4,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 5,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 6,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 7,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 8,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 9,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 10,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 11,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 12,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
  ]);

  const [imagesPublic, setImagesPublic] = useState([
    {
      id: 1,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 2,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 3,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 4,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 5,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 6,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 7,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 8,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 9,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 10,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 11,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 12,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
  ]);

  const [traduccion, setTraduccion] = useState([
    {
      id: 1,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 2,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 3,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 4,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 5,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 6,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 7,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 8,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 9,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 10,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 11,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
    {
      id: 12,
      title: "",
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
      face1: none,
      face2: none,
      face3: none,
      face4: none,
      src: none,
    },
  ]);

  useEffect(() => {
    if (dataGallery === 0) {
      setShowApi(proyects);
      console.log(showApi);
    }
    if (dataGallery === 1) {
      setShowApi(animacion);
      console.log(showApi);
    }
    if (dataGallery === 2) {
      setShowApi(edicionVideos);
      console.log(showApi);
    }
    if (dataGallery === 3) {
      setShowApi(imagesPublic);
      console.log(showApi);
    }
    if (dataGallery === 4) {
      setShowApi(traduccion);
      console.log(showApi);
    }
  }, [dataGallery]);

  const closeGallery = () => {
    if (closeModal == 0) {
      const allGallery = document.querySelector(".allGallery");
      allGallery.style.transform = "scale(0)";
    }
    if (closeModal == 1) {
      const cubeCenter = document.querySelector(".cubeCenter");
      cubeCenter.style.transform = "scale(0)";
      cubeCenter.style.width = "0%";
      cubeCenter.style.height = "0%";
      const imgPreview = document.querySelector(".imgPreview");
      imgPreview.style.transform = "scale(0)";
      imgPreview.style.width = "0%";
      imgPreview.style.height = "0%";
      const onlyCubeGallery = document.querySelector(".onlyCubeGallery");
      onlyCubeGallery.classList.remove("girar");
      setCloseModal(0);
    }
  };

  const showCube = (id) => {
    const cubeCenter = document.querySelector(".cubeCenter");
    const onlyCubeGallery = document.querySelector(".onlyCubeGallery");
    onlyCubeGallery.classList.add("subidaCube");

    setTimeout(() => {
      onlyCubeGallery.classList.remove("subidaCube");
      onlyCubeGallery.classList.add("girar");
    }, 5000);
    cubeCenter.style.transform = "scale(1)";
    cubeCenter.style.width = "100%";
    cubeCenter.style.height = "100%";
    setCloseModal(1);
    let data = showApi.find((item) => item.id === id);
    setDatosApi(data);
  };

  return (
    <div className="allGallery">
      <div className="contenedor_gallery">
        {showApi.map((item) => {
          return (
            <>
              <img
                key={item.id}
                src={item.src}
                alt={item.src}
                onClick={() => {
                  showCube(item.id);
                }}
                className="imgGallery"
              />
            </>
          );
        })}
      </div>
      <div className="closeGallery" onClick={closeGallery}>
        X
      </div>
      <div className="cubeCenter">
        <CubeGallery datosApi={datosApi} imgPreview={imgPreview} />
        <div className="imgPreview">
          <img src={imgView} alt={imgView} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

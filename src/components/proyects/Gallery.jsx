import React, { useEffect, useState } from "react";
import CubeGallery from "./CubeGallery";
import space from "../../assets/img/spaceFull.jpg";
import none from "../../assets/img/none.jpg";
import niebla2 from "../../assets/img/niebla2.png";

// Proyects img
// 1
import p1Img1 from "../../assets/img/proyects/1/1.jpg";
import p1Img2 from "../../assets/img/proyects/1/2.jpg";
import p1Img3 from "../../assets/img/proyects/1/3.jpg";
import p1Img4 from "../../assets/img/proyects/1/4.jpg";
import p1Img5 from "../../assets/img/proyects/1/5.jpg";
// 2
import p2Img1 from "../../assets/img/proyects/2/1.jpg";
import p2Img2 from "../../assets/img/proyects/2/2.jpg";
// 3
import p3Img1 from "../../assets/img/proyects/3/1.jpg";
import p3Img2 from "../../assets/img/proyects/3/2.jpg";
import p3Img3 from "../../assets/img/proyects/3/3.jpg";
// 4
import p4Img1 from "../../assets/img/proyects/4/1.jpg";
import p4Img2 from "../../assets/img/proyects/4/2.jpg";
import p4Img3 from "../../assets/img/proyects/4/3.jpg";
// 5
import p5Img1 from "../../assets/img/proyects/5/1.jpg";
import p5Img2 from "../../assets/img/proyects/5/2.jpg";
import p5Img3 from "../../assets/img/proyects/5/3.jpg";
import p5Img4 from "../../assets/img/proyects/5/4.jpg";
import p5Img5 from "../../assets/img/proyects/5/5.jpg";
import p5Img6 from "../../assets/img/proyects/5/6.jpg";
import p5Img7 from "../../assets/img/proyects/5/7.jpg";
import p5Img8 from "../../assets/img/proyects/5/8.jpg";
// 6
import p6Img1 from "../../assets/img/proyects/6/1.jpg";
import p6Img2 from "../../assets/img/proyects/6/2.jpg";
import p6Img3 from "../../assets/img/proyects/6/3.jpg";
// 7
import p7Img1 from "../../assets/img/proyects/7/1.jpg";
import p7Img2 from "../../assets/img/proyects/7/2.jpg";
import p7Img3 from "../../assets/img/proyects/7/3.jpg";
import p7Img4 from "../../assets/img/proyects/7/4.jpg";
import p7Img5 from "../../assets/img/proyects/7/5.jpg";
// Animations
// 1
import a1Img1 from "../../assets/img/animations/1/1.jpg";
import kunais from "../../assets/img/animations/1/kunais.mp4";
// 2
import a2Img1 from "../../assets/img/animations/2/1.jpg";
import a2Img2 from "../../assets/img/animations/2/2.jpg";
import a2Img3 from "../../assets/img/animations/2/3.jpg";
import a2Img4 from "../../assets/img/animations/2/4.jpg";
import bubbles from "../../assets/img/animations/2/bubbles.mp4";
// 3
import a3Img1 from "../../assets/img/animations/3/1.jpg";
import a3Img2 from "../../assets/img/animations/3/2.jpg";
import a3Img3 from "../../assets/img/animations/3/3.jpg";
import a3Img4 from "../../assets/img/animations/3/4.jpg";
import a3Img5 from "../../assets/img/animations/3/5.jpg";
import rocket from "../../assets/img/animations/3/rocket.mp4";

// 4
import a4Img1 from "../../assets/img/animations/4/1.jpg";
import a4Img2 from "../../assets/img/animations/4/2.jpg";
import a4Img3 from "../../assets/img/animations/4/3.jpg";
import a4Img4 from "../../assets/img/animations/4/4.jpg";
import a4Img5 from "../../assets/img/animations/4/5.jpg";
import house from "../../assets/img/animations/4/house.mp4";

// 5
import a5Img1 from "../../assets/img/animations/5/1.jpg";
import a5Img2 from "../../assets/img/animations/5/2.jpg";
import a5Img3 from "../../assets/img/animations/5/3.jpg";
import watch from "../../assets/img/animations/5/watch.mp4";
import { NavLink } from "react-router-dom";

const Gallery = ({ dataGallery }) => {
  const [showApi, setShowApi] = useState([]);
  const [cubeImgs, setCubeImgs] = useState([]);
  const [datosApi, setDatosApi] = useState([]);
  const [closeModal, setCloseModal] = useState(0);
  const [size, setSize] = useState(0);
  const [isVideo, setIsVideo] = useState(false);

  const [imgView, setImgView] = useState(
    "http://localhost:5173/src/assets/img/none.jpg"
  );
  const [titleImg, setTitleImg] = useState("");

  window.addEventListener("resize", (e) => {
    console.log(window.innerWidth);
    setSize(window.innerWidth);
  });

  const imgPreview = (e, type) => {
    const imgPreview = document.querySelector(".imgPreview");

    // console.log(e.target.src.substr(e.target.src.length - 4, e.target.src.length));
    if (type === 2) {
      if (e.substr(e.length - 4, e.length) === ".mp4") {
        setIsVideo(true);
      }

      imgPreview.style.transitionDuration = "0 !important";
      imgPreview.style.transform =
        "scale(0) translateX(200px) translateY(-250px)";
      imgPreview.style.width = "0";
      imgPreview.style.height = "0";

      setTimeout(() => {
        imgPreview.style.transitionDuration = "1s";
        imgPreview.style.transform =
          "scale(1) translateX(200px) translateY(-250px)";
        imgPreview.style.width = "50%";
        imgPreview.style.height = "500px";

        animacion.map((item, key) => {
          if (item.src === e) {
            setTitleImg(item.title);
          }
        });
        setImgView(e);
      }, 100);
    } else {
      console.log("Entra aqui");
      imgPreview.style.transitionDuration = "0 !important";
      imgPreview.style.transform =
        "scale(0) translateX(200px) translateY(-250px)";
      imgPreview.style.width = "0";
      imgPreview.style.height = "0";

      setTimeout(() => {
        imgPreview.style.transitionDuration = "1s";
        imgPreview.style.transform =
          "scale(1) translateX(200px) translateY(-250px)";
        imgPreview.style.width = "50%";
        imgPreview.style.height = "500px";
        setIsVideo(false);
        setTitleImg(e.target.title);
        setImgView(e.target.src);
      }, 100);
    }
  };

  const [proyects, setProyects] = useState([
    {
      id: 1,
      title: "https://figma-practice-ivory.vercel.app/",
      face1: p1Img2,
      face2: p1Img3,
      face3: p1Img4,
      face4: p1Img5,
      src: p1Img1,
    },
    {
      id: 2,
      title: "https://dashboard-store-v1.vercel.app/",
      face1: p2Img1,
      face2: p2Img2,
      face3: p2Img2,
      face4: p2Img1,
      src: p2Img1,
    },
    {
      id: 3,
      title: "https://react-redux-ruby.vercel.app/",
      face1: p3Img2,
      face2: p3Img3,
      face3: p3Img1,
      face4: p3Img2,
      src: p3Img1,
    },
    {
      id: 4,
      title: "https://gif-expert-app-fawn.vercel.app/",
      face1: p4Img1,
      face2: p4Img2,
      face3: p4Img3,
      face4: p4Img1,
      src: p4Img3,
    },
    {
      id: 5,
      title: "https://fullcarsca.000webhostapp.com/",
      face1: p5Img1,
      face2: p5Img5,
      face3: p5Img3,
      face4: p5Img7,
      src: p5Img2,
    },
    {
      id: 6,
      title: "https://ponencias-rubik-cube.vercel.app/",
      face1: p6Img1,
      face2: p6Img2,
      face3: p6Img2,
      face4: p6Img3,
      src: p6Img1,
    },
    {
      id: 7,
      title: "https://github.com/Yhethi/pdgroup",
      face1: p7Img1,
      face2: p7Img2,
      face3: p7Img3,
      face4: p7Img4,
      src: p7Img4,
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
      title: "https://kunaisoft-kunais.vercel.app/",
      face1: a1Img1,
      face2: a1Img1,
      face3: a1Img1,
      face4: a1Img1,
      src: kunais,
    },
    {
      id: 2,
      title: "https://bubble-effect.vercel.app/",
      face1: a2Img1,
      face2: a2Img2,
      face3: a2Img3,
      face4: a2Img4,
      src: bubbles,
    },
    {
      id: 3,
      title: "https://rocket-animation-five.vercel.app/",
      face1: a3Img1,
      face2: a3Img2,
      face3: a3Img3,
      face4: a3Img4,
      src: rocket,
    },
    {
      id: 4,
      title: "https://3d-house-nine.vercel.app/",
      face1: a4Img1,
      face2: a4Img2,
      face3: a4Img3,
      face4: a4Img4,
      src: house,
    },
    {
      id: 5,
      title: "https://3d-watch-yhethi.vercel.app/",
      face1: a5Img1,
      face2: a5Img2,
      face3: a5Img2,
      face4: a5Img3,
      src: watch,
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
        {showApi.map((item, key) => {
          if (
            item.src.substr(item.src.length - 4, item.src.length) === ".mp4"
          ) {
            return (
              <>
                <img
                  key={item.id}
                  src={item.face1}
                  alt={item.face1}
                  onClick={() => {
                    showCube(item.id);
                  }}
                  className="imgGallery"
                />
              </>
            );
          } else {
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
          }
        })}
      </div>
      <div className="closeGallery" onClick={closeGallery}>
        X
      </div>
      <div className="cubeCenter">
        <CubeGallery
          datosApi={datosApi}
          imgPreview={imgPreview}
          isVideo={isVideo}
        />
        <div className="imgPreview">
          {!isVideo ? (
            <>
              <img src={imgView} alt={imgView} />
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to={titleImg}
                target="_blank"
                exact
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  // justifyContent: "center",
                  alignItems: "center",
                  marginTop: "150px",
                }}
              >
                {titleImg.length > 0 && (
                  <p
                    style={{
                      marginTop: "-110px",
                    }}
                  >
                    {titleImg}
                  </p>
                )}
              </NavLink>
            </>
          ) : (
            <>
              <video
                src={imgView}
                width="750"
                height="500"
                controls
                autoPlay
              ></video>
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to={titleImg}
                target="_blank"
                exact
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  // transform: "translateY(110px)",
                  marginTop: "110px",
                }}
              >
                {titleImg.length > 0 && <p>{titleImg}</p>}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

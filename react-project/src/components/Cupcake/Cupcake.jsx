import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Img2 from "./img/muf.png";
import Img3 from "./img/muf1.png";
import Img4 from "./img/muf2.png";
import Img5 from "./img/muf3.png";
import Img6 from "./img/ic.png";
import Img7 from "./img/ic2.png";
import Img8 from "./img/ic3.png";
import Img9 from "./img/sp1.png";
import Img10 from "./img/sp2.png";
import Img11 from "./img/sp3.png";

import "./Cupcake.css";
import Carousel from "react-bootstrap/Carousel";

const Cupcake = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img3,
      name: "RedVelvet",
    },
    {
      id: 2,
      imgSrc: Img4,
      name: "Čokoláda",
    },
    {
      id: 3,
      imgSrc: Img5,
      name: "Vanilka",
    },
  ];
  let data2 = [
    {
      id: 4,
      imgSrc: Img6,
      name: "Modrá",
    },
    {
      id: 6,
      imgSrc: Img8,
      name: "Bílá",
    },
  ];

  let data3 = [
    {
      id: 7,
      imgSrc: Img9,
      name: "Jahůdka",
    },
    {
      id: 8,
      imgSrc: Img10,
      name: "Čokoládka",
    },
    {
      id: 9,
      imgSrc: Img11,
      name: "Borůvky",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");
  const [tempingSrc2, setTempingSrc2] = useState("");
  const [tempingSrc3, setTempingSrc3] = useState("");
  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  };

  const getImg2 = (imgSrc) => {
    setTempingSrc2(imgSrc);
    setModel(true);
  };

  const getImg3 = (imgSrc) => {
    setTempingSrc3(imgSrc);
    setModel(true);
  };
  return (
    <div className="all">
      <div className="cont">
     <span>DALŠÍ</span>
     <span className="left">ZPĚT</span>
        <Carousel variant="dark" interval={null} >

          <Carousel.Item >
            <div className="test">
              <h1>VYBER SI PŘÍCHUŤ</h1>
              <div className="imgs">
                {" "}
                <img src={Img2} height="195px" />
              </div>

              {data.map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg(item.imgSrc)}
                  >
                    <Button variant="light" className="button">
                      {item.name}
                    </Button>
                  </div>
                );
              })}
              <div className="imgs">
                <div className={model ? "model open" : "model"}>
                  <img src={tempingSrc} height="200px" />
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item >
            <div className="test">
              {" "}
              <h1>VYBER SI POLEVU</h1>
              {data2.map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg2(item.imgSrc)}
                  >
                    <Button variant="light" className="button">
                      {item.name}
                    </Button>
                  </div>
                );
              })}
              <div className="imgs">
                <img src={tempingSrc} height="200px" />
              </div>
              <div className="imgs2">
                <div className={model ? "model open" : "model"}>
                  <img src={tempingSrc2} height="200px" />
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="test">
              {" "}
              <h1>VYBER SI POSYPEK</h1>
              {data3.map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg3(item.imgSrc)}
                  >
                    <Button variant="light" className="button">
                      {item.name}
                    </Button>
                  </div>
                );
              })}
              <div className="imgs">
                <img src={tempingSrc} height="200px" />
              </div>
              <div className="imgs2">
                <img src={tempingSrc2} height="200px" />
              </div>
              <div className="imgs3">
                <div className={model ? "model open" : "model"}>
                  <img src={tempingSrc3} height="190px" />
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="test">
              <h1>TOHLE JE TVŮJ SUSIKCUP!</h1>
              <div className="imgs">
                <img src={tempingSrc} height="200px" />
              </div>
              <div className="imgs2">
                <img src={tempingSrc2} height="200px" />
              </div>
              <div className="imgs3">
                <div className={model ? "model open" : "model"}>
                  <img src={tempingSrc3} height="190px" />
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      
    </div>
  );
};
export default Cupcake;

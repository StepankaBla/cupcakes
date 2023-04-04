import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Img3 from "./img/muf1.png";
import Img4 from "./img/muf2.png";
import Img5 from "./img/muf3.png";
import Img6 from "./img/ic.png";
import Img7 from "./img/ic2.png";
import Img8 from "./img/ic3.png";
import "./Cupcake.css";
import Carousel from "react-bootstrap/Carousel";

const Cupcake = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img3,
      name: "Strawberry",
    },
    {
      id: 2,
      imgSrc: Img4,
      name: "Chocolate",
    },
    {
      id: 3,
      imgSrc: Img5,
      name: "Vanilla",
    },
  ];
  let data2 = [
    {
      id: 4,
      imgSrc: Img6,
      name: "Red",
    },
    {
      id: 5,
      imgSrc: Img7,
      name: "Blue",
    },
    {
      id: 6,
      imgSrc: Img8,
      name: "Yellow",
    },
  ];
  const [model, setModel] = useState(false);
  const [tempingSrc, setTempingSrc] = useState("");
  const [tempingSrc2, setTempingSrc2] = useState("");
  const getImg = (imgSrc) => {
    setTempingSrc(imgSrc);
    setModel(true);
  };

  const getImg2 = (imgSrc) => {
    setTempingSrc2(imgSrc);
    setModel(true);
  };

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="test">
            <h1>Choose the flavor</h1>
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
                <img src={tempingSrc} height="200px"/>
              </div>
            </div>  
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="test">
            {" "}
            <h1>Choose the glaze</h1>
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
              <img src={tempingSrc} height="200px"/>
            </div>
            <div className="imgs2">
              <div className={model ? "model open" : "model"}>
                <img src={tempingSrc2} height="200px"/>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Cupcake;

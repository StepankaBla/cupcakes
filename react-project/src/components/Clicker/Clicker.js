import React from "react";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Reset } from "./counterAction";
import "./Clicker.css";
import hnusak from "./img/susak_hnusak.png";
import Button from "react-bootstrap/esm/Button";

const Clicker = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div className="all">
      <div className="clicker">
        <div className="posranek">
        <h1>ZAHRAJ SI SUSÍ CLICKER NYNÍ!</h1>
        <img
          className="increment"
          src={hnusak}
          alt="Increment"
          onClick={() => dispatch(Increment())}
        />
        </div>
        <Typography gutterBottom align="center" variant="h5" component="div">
          {counter}
        </Typography>
        <Button
          variant="primary"
          className="reset"
          align="center"
          onClick={() => dispatch(Reset())}
          style={{ backgroundColor: "#d7aeb1" }}
        >
          Reset
        </Button>
        <br></br>
      </div>
    </div>
  );
};

export default Clicker;

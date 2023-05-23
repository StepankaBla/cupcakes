import React from "react";
import "./Recipe.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cbc from "./img/cbc.png";
import vbc from "./img/vbc.png";
import sbc from "./img/sbc.png";
import Strawberry from "../Strawberry/Strawberry";
import {Link} from "react-router-dom";

function Recipe() {
  return (
    <div className="card" height={3000}>
      <div className="bckRec">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={sbc} height={250} />
          <Card.Body>
            <Card.Title style={{color: '#d7aeb1'}}>Jahodový cupcake</Card.Title>
            <Card.Text>
              Tento jahodový cupcake je z poloviny tak sladký jako kuchtík Štěpánka
            </Card.Text>
            <Button variant="primary" style={{backgroundColor: '#d7aeb1'}}>
              <Link to="/strawberry" className="plink">Recept</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="bckRec">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cbc} height={350} />
          <Card.Body>
            <Card.Title style={{color: '#d7aeb1'}}>Čokoládový cupcake</Card.Title>
            <Card.Text>
            Pro kuchtíka Vojtu je čokoládový muffin jako zakázaný ovocný strom - nedosáhne na něj kvůli jeho tmavé barvě!
            </Card.Text>
            <Button variant="primary" style={{backgroundColor: '#d7aeb1'}}>
              <Link to="/chocolate" className="plink">Recept</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
      <div className="bckRec">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={vbc} height={280} />
          <Card.Body>
            <Card.Title style={{color: '#d7aeb1'}}>Vanilkový cupcake</Card.Title>
            <Card.Text>
            Vanilkový cupcake je jako Ondrova kuchyně - nadýchaný, jemný a vždy dokonale připravený!
            </Card.Text>
            <Button variant="primary" style={{backgroundColor: '#d7aeb1'}}>
              <Link to="/chocolate" className="plink">Recept</Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Recipe;

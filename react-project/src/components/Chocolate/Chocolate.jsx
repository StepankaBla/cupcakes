import React from "react";
import "./Chocolate.css";
import chocolatec from "./img/chocolatec.png";

import Card from "react-bootstrap/Card";

function Chocolate() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={chocolatec} />
        <Card.Body>
          <Card.Text>
            Suroviny:
            <br />
            <li>1 a 1/4 šálku hladké mouky</li>
            <li>1 šálek cukru</li>
            <li>1/2 šálku kakaa</li>
            <li>1 lžička prášku do pečiva</li>
            <li>1/2 lžičky sody bikarbony</li>
            <li>1/2 lžičky soli</li>
            <li>2 vejce</li>
            <li>1 šálek mléka</li>
            <li>1/2 šálku oleje</li>
            <li>1 lžička vanilkového extraktu</li>
            <br />
            Postup: <br />Troubu předehřejte na 180°C a připravte si formičky na
            muffiny. Ve větší míse smíchejte hladkou mouku, kakao, prášek do
            pečiva, sodu bikarbonu a špetku soli. V další míse šlehejte vejce s
            cukrem, dokud nevznikne pěna. Přidejte mléko, olej a vanilkový
            extrakt a znovu promíchejte. Postupně vmíchejte suché ingredience do
            mokrých, dokud nedostanete hladké těsto. Těsto nalijte do
            muffinových formiček
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Chocolate;

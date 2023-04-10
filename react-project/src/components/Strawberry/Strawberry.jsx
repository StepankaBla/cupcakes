import React from "react";
import "./Strawberry.css";
import strawberryc from "./img/strawberryc.png";

import Card from 'react-bootstrap/Card';

function Strawberry() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={strawberryc} />
        <Card.Body>
          <Card.Text>
          Suroviny:
<br />
<li>1 a 1/2 šálku hladké mouky </li>
<li>1/2 šálku cukru</li>
<li>1/2 šálku másla (měkkého)</li>
<li>2 vejce</li>
<li>1/2 šálku jahodového pyré</li>
<li>2 lžičky prášku do pečiva</li>
<li>špetka soli</li>
<br />
Postup:
<br />

Troubu předehřejte na 180°C a připravte si formičky na muffiny.

Ve větší míse smíchejte hladkou mouku, prášek do pečiva a špetku soli.

V další míse šlehejte měkké máslo s cukrem, dokud nevznikne hladká směs.

Přidejte vejce, jedno po druhém, a důkladně je rozmíchejte s máslovou směsí.

Přidejte jahodové pyré a znovu promíchejte.

Postupně vmíchejte suché ingredience do mokrých, dokud nedostanete hladké těsto.

Těsto nalijte do muffinových formiček, naplňte je zhruba do 2/3.

Pečte v troubě po dobu 18-20 minut, nebo dokud nejsou muffiny propečené.

Nechte vychladnout a podávejte posypané jahodami nebo krémem na dort.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}



export default Strawberry;

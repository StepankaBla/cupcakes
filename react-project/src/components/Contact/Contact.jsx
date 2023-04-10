import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Contact.css";
import stepa from "./img/stepa.png";
import ondra from "./img/ondra.png";
import elis from "./img/elis.jpg";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Contact = () => {
  return (
    <p>
      <h1>NAŠI KUCHTÍCI</h1>
      <div className="content">
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={ondra}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kuchtík Ondřej Habrda
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ondřej Habrda, kuchtík a alkoholik, který se proslavil svými
                početnými večírky s hojným pitím alkoholických nápojů, má beef s
                Vojtěchem Vlachovským, jiným kuchtíkem. Mezi nimi se vyvinul
                konflikt spojený s ostrými verbálními výpady a výzvami na
                sociálních sítích, což způsobuje sledování fanoušky a
                veřejností.
              </Typography>
            </CardContent>
            <CardActions>
              <Typography></Typography>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={stepa}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kuchtík Štěpánka Blažková
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Kuchtík Štěpánka Blažková společně se svým "otrokem" Vojtěchem
                Vlachochým tvoří dezerty nazývané susikcups. Jejich vztah je
                zřejmě neobvyklý a označují se navzájem jako "kuchtík" a "otrok"
                v rámci svého tvůrčího konceptu nebo vtipného názvu pro jejich
                společné kulinářské projekty.
              </Typography>
            </CardContent>
            <CardActions>
              <Typography></Typography>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="250"
              image={elis}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kuchtík Eliška Rybníčková
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jako kuchtík se Eliška Rybníčková vášnivě věnuje pečení cupcaků
                a jejím jedinečným přístupem je použití plyšáka jménem Susík
                jako neobvyklé ingredience. Tento kreativní a neotřelý přístup
                ji činí originální a zajímavou kuchařkou, která si ráda hraje s
                novými nápady a inovativními recepty. Její cupcaky s plyšovým
                Susíkem jsou jedinečné a zaujmou každého, kdo je ochutná.
              </Typography>
            </CardContent>
            <CardActions>
              <Typography>
     
              </Typography>
            </CardActions>
          </Card>
        </div>
      </div>
    </p>
  );
};

export default Contact;

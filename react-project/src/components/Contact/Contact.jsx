import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Contact.css";
import stepa from "./img/stepa.png";
import ondra from "./img/ondra.png";
import elis from "./img/elis.jpg";
import { Progress, Grid } from "@nextui-org/react";

const Contact = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <p>
      <h1>NAŠI KUCHTÍCI</h1>

      <div className="content">


        <div >
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
            <h5 className="urovne">Úroveň pečení: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={15} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
            <h5 className="urovne">Vztah se Susičkem: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={30} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
            <h5 className="urovne">Slušivost v zástěře: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={92} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
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
            <h5 className="urovne">Úroveň pečení: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={80} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
            <h5 className="urovne">Vztah se Susičkem: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={0} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
            <h5 className="urovne">Slušivost v zástěře: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={30} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
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
            <h5 className="urovne">Úroveň pečení: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={40} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
            <h5 className="urovne">Vztah se Susičkem: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={90} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
            <h5 className="urovne">Slušivost v zástěře: </h5>
            <Grid>
              <div className="zkouska">
                <Progress value={60} shadow color="error" status="error" NormalSizes='xl' />
              </div>
            </Grid>
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

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
import { Modal, Button, Image, Text, Link } from "@nextui-org/react";

const Contact = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <p>
       
      <Modal noPadding open={visible} onClose={closeHandler}>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
        >
          <Text color="#363449">
            Photo by{" "}
            <Link
              color
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/@anniespratt"
            >
              Annie Spratt
            </Link>{" "}
            on{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://unsplash.com/s/visual/ef7937f3-0d44-43eb-b992-28050748f999?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >
              Unsplash
            </Link>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
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
             <Button onPress={handler}>
  ZJISTI VÍC!
      </Button>
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

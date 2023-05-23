import React from "react";
import "./AboutUs.css";
import logo from "./img/logo.png";
import Img4 from "./img/muf2.png";
import zeme from "./img/zeme.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <div className="contentContainer">
        <h1>Hlavní kuchtík Vojtěch Vlachovský</h1>
        <div className="content_box">
          <div data-aos="fade-right" className="content_box_right">
            <p>
              Vojtěch Vlachovský je skutečným kulinářským nadšencem, jehož vášní
              je pečení lahodných cupcaků. Každý víkend se ponořuje do své
              kuchyně a s láskou míchá těsto, vytváří neodolatelné kombinace
              příchutí a zdobí své výtvory kreativními nápady. Jeho cupcaky jsou
              opravdovým uměleckým dílem, kterému se nedá odolat. Vždycky se
              snaží vylepšit své dovednosti a objevovat nové recepty, které by
              okouzlily chuťové pohárky jeho rodiny a přátel.
            </p>
            <p>
              Každý kousek, který opustí jeho kuchyň, je pečený s precizností a
              láskou, a to se projevuje nejen v dokonale upečené konzistenci,
              ale i v nádherných vůních, které se šíří z jeho domu. Jeho cupcaky
              jsou oblíbeným lákadlem na různých oslavách a rodinných setkáních,
              kde si získává uznání svým výjimečným kulinářským uměním.
            </p>
          </div>
          <div className="">
            <motion.div
              style={{
                borderRadius: 30,
                backgroundColor: "#fff",
              }}
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 2, repeat: Infinity }}
              data-aos="fade-left"
              className="content_box_left_pic"
            >
              <img src={logo} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="contentContainer">
        <h1>Proč kuchtík Vojta nemá rád černé muffinky?</h1>
        <div className="content_box">
          <div data-aos="fade-right" className="content_box_right">
            <p>
              Důvodem nenávisti k černým cupcakům může být několik faktorů. Za
              prvé, někteří lidé se mohou cítit nepohodlně s neobvyklým vzhledem
              černých cupcaků, který se liší od tradičních jasnějších odstínů.
              Za druhé, může existovat předsudek nebo stereotypy spojené s
              černou barvou, které se mohou promítat i na vnímání těchto
              sladkých pochoutek. Za třetí, chuťové preference jednotlivců se
              různí a někteří nemusí preferovat chutě, které černé cupcaky
              nabízejí. Za čtvrté, může docházet k nesprávné interpretaci černé
              barvy jako nezdravé nebo nechutné, což může vyvolávat negativní
              reakce.
            </p>
            <p>
              Nakonec, někteří lidé jednoduše nemusí mít rádi černé cupcaky z
              důvodu osobních zkušeností nebo preferencí. Je důležité si
              uvědomit, že chuťové preference jsou subjektivní a každý má právo
              na své individuální vkusové preference, i když se mohou lišit od
              ostatních. Je důležité respektovat rozmanitost a zároveň
              nepropadat předsudkům nebo nenávisti vůči jídlu nebo potravinám na
              základě jejich barvy nebo vzhledu.
            </p>
          </div>
          <div className="descPic">
            <motion.div
              data-aos="fade-left"
              className="content_box_left_pic"
              style={{
                borderRadius: 30,
              }}
              whileHover={{ scale: 1.2 }}
            >
              <img src={Img4} alt="" height="200px" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

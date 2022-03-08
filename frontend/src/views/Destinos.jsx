import React from "react";
import ImgSalvador from "../components/imagens/Destinos/Salvador-Ba.jpg"
import ImgRioDeJaneiro from "../components/imagens/Destinos/RioDeJaneiro-RJ.jpg";
import ImgSaoPaulo from "../components/imagens/Destinos/sao_paulo.jpg";
import Carousel from "../components/funcionais/Carousel";
import "../App.css"

export default function Destinos() {
  return (
    // Envolivido com ReactFragment
    <React.Fragment> 
      <Carousel Img1={ImgSaoPaulo} Img2={ImgRioDeJaneiro} Img3={ImgSalvador}/> 
    </React.Fragment>
  );
}
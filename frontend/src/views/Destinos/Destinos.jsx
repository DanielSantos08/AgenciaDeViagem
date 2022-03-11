import React from "react";
import {Link} from 'react-router-dom'
import ImgSalvador from "../../components/basics/imagens/Destinos/Salvador-Ba.jpg"
import ImgRioDeJaneiro from "../../components/basics/imagens/Destinos/RioDeJaneiro-RJ.jpg";
import ImgSaoPaulo from "../../components/basics/imagens/Destinos/sao_paulo.jpg";
import Carousel from "../../components/funcionais/Carousel";
import "../../App.css"

export default function Destinos() {
  return (
    // Envolivido com ReactFragment
    <React.Fragment > 
      <Carousel Img1={ImgSaoPaulo} Img2={ImgRioDeJaneiro} Img3={ImgSalvador}/> 
      <Link to="/Destino" className="btn btn-primary text-white d-flex justify-content-center">Criar novo Destino</Link>
    </React.Fragment>
  );
}
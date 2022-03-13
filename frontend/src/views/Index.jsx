import React from "react";
import "../App.css";
import Card from "../components/funcionais/Card";
import Carousel from "../components/funcionais/Carousel";
import ImgSalvador from "../components/basics/imagens/Destinos/Salvador-Ba.jpg";
import ImgRioDeJaneiro from "../components/basics/imagens/Destinos/RioDeJaneiro-RJ.jpg";
import ImgChapadaVeadeiros from "../components/basics/imagens/Destinos/chapada-dos-veadeiros.jpg"
import ImgNoronha from "../components/basics/imagens/Destinos/fernandodenoronhaPE.jpg"
import ImgOcean from "../components/basics/imagens/calm_ocean.jpg"

export default function Home() {
  return (
    // Envolivido com React Fragment Reduzido
    <>
    <Carousel Img1={ImgOcean} Img2={ImgChapadaVeadeiros} Img3={ImgNoronha} />
    <p className="text-center h2 mt-4"><strong>Mais Buscados</strong></p>
    <section className="Cards">
    <Card titulo="Salvador-Ba" color="#fff" preco="2.000">{ImgSalvador}</Card>
    <Card titulo="Rio De Janeiro-RJ" color="#fff" preco="2.000">{ImgRioDeJaneiro}</Card>
    <Card titulo="Fernando de Noronha-PE" color="#fff" preco="2.000">{ImgNoronha}</Card>
    </section>
    </>
  );
}   
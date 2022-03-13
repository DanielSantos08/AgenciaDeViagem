import React from "react";
import "../../App.css";
import Card from "../../components/funcionais/Card";
import ImgSalvador from "../../components/basics/imagens/Destinos/Salvador-Ba.jpg";
import ImgRioDeJaneiro from "../../components/basics/imagens/Destinos/RioDeJaneiro-RJ.jpg";
import ImgSaoPaulo from "../../components/basics/imagens/Destinos/sao_paulo.jpg";
import ImgChapada from "../../components/basics/imagens/Destinos/chapada-dos-veadeiros.jpg";
import ImgNoronha from "../../components/basics/imagens/Destinos/fernandodenoronhaPE.jpg";
import ImgCuritiba from "../../components/basics/imagens/Destinos/Curitiba.jpg";


export default function Produtos() {
    return (
        <>
    <div className="Cards">
    <Card titulo="Salvador-Ba" color="#fff" preco="2.000">{ImgSalvador}</Card>
    <Card titulo="Rio De Janeiro-RJ" color="#fff" preco="2.000">{ImgRioDeJaneiro}</Card>
    <Card titulo="Fernando de Noronha-PE" color="#fff" preco="2.000">{ImgNoronha}</Card>
    </div>
    <div className="Cards">
    <Card titulo="São Paulo-SP" color="#fff" preco="2.000">{ImgSaoPaulo}</Card>
    <Card titulo="Curitiba-Ba" color="#fff" preco="2.000">{ImgCuritiba}</Card>
    <Card titulo="Chapada dos Veadeiros-GO" color="#fff" preco="2.000">{ImgChapada}</Card>
    </div>
    <div className="Cards">
    <Card titulo="Salvador-Ba" color="#fff" preco="2.000">{ImgSalvador}</Card>
    <Card titulo="Salvador-Ba" color="#fff" preco="2.000">{ImgSalvador}</Card>
    <Card titulo="Salvador-Ba" color="#fff" preco="2.000">{ImgSalvador}</Card>
    </div>
        </>
    );
}
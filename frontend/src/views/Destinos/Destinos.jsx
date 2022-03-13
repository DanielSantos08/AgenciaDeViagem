import { Link } from 'react-router-dom'
import "../../App.css"
import Carousel from "../../components/funcionais/Carousel";
import ImgSalvador from "../../components/basics/imagens/Destinos/Salvador-Ba.jpg"
import ImgRioDeJaneiro from "../../components/basics/imagens/Destinos/RioDeJaneiro-RJ.jpg";
import React, { useEffect, useState } from "react";
import ImgSaoPaulo from "../../components/basics/imagens/Destinos/sao_paulo.jpg";
import DestinosAxios from '../../services/DestinosClass';

export default function Destinos() {
    const [destinos, setDestinos] = useState([]);
  
    const getDestinos = () => {
      DestinosAxios.getDestinos()
        .then((response) => {
          setDestinos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

  useEffect(() => {
    getDestinos();
  }, []);
    
  return (
    <div className="container">
      <div>
        <React.Fragment >
          <Carousel Img1={ImgSaoPaulo} Img2={ImgRioDeJaneiro} Img3={ImgSalvador} />
        </React.Fragment>
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-around'>

        {destinos.map((destinos, key) => {
          return (
            <div key={key}>
              <div className="card m-2 d-flex flew-nowrap p-2" style={{ width: "22rem", height: "30rem" }}>
                <img className="card-img-top" src={destinos?.imgDestino} alt={"Imagem de " + destinos?.city} />
                <div className="card-body p-0">
                  <h5 className="card-title"><Link to="/PutDeleteDestinos"><strong>{destinos?.city}</strong></Link></h5>
                  <p className="card-body p-0 h-4">{destinos?.state} - {destinos?.country} </p>
                  <p className="card-body p-0">{destinos?.descricao} </p>
                  <div className='d-flex flex-row justify-content-around m-2'>
                    <Link to="/Passagem" className="btn btn-primary">Comprar</Link>
                    <p className='h4'> R$ {destinos.preco}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/CriarDestino" className="btn btn-primary text-white d-flex justify-content-center p-4 m-4">Criar novo Destino</Link>

    </div>
  );

}
import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function MinhasPassagens() {
  const [Passagem, setPassagem] = useState([]);
  useEffect(() => {
      api
      .get("/passagem")
      .then((response) => setPassagem(response.data))
      .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
    return (
        <div className="App">
        {Passagem.map((Passagem, key) =>{
            return(
            <div key={key}>
            <p>Passagem: {Passagem?.idPassagem}</p>
            <p>Cidade: {Passagem?.destino.city}</p>
            <p>Estado: {Passagem?.destino.state}</p>
            <p>País: {Passagem?.destino.country}</p>
            <p>Passagem: {Passagem?.id}</p>
            <p>Nome: {Passagem?.cliente.name}</p>
            <p>CPF: {Passagem?.cliente.cpf}</p>
            </div>
            );
        })}
    </div>
  );
}

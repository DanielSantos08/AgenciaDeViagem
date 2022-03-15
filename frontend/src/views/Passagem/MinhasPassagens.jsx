import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import PassagemAxios from "../../services/PassagemClass";

export default function MinhasPassagens() {
  const [Passagem, setPassagem] = useState([]);

  const getPassagem = () => {
    PassagemAxios.getPassagem()
      .then((response) => {
        setPassagem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPassagem();
  }, []);


  const deletePassagem = (idPessoa) => {
    PassagemAxios.deletePassagem(idPessoa)
      .then((response) => {
        getPassagem();
      })
      .catch((error) => {
        console.log(error);
      });
  };

    
    return (
        <div className="container ">
        {Passagem.map((Passagem, key) =>{
            return(
            <div key={key} style={{borderRadius: 20, border:"1px solid", padding: "2vh", marginTop:"10vh"}}>
            <p>Passagem: {Passagem?.idPassagem}</p>
            <p>Cidade: {Passagem?.destino.city}</p>
            <p>Estado: {Passagem?.destino.state}</p>
            <p>País: {Passagem?.destino.country}</p>
            <p>Nome: {Passagem?.cliente.name}</p>
            <p>CPF: {Passagem?.cliente.cpf}</p>
            <p>Forma de Pagamento: {Passagem.formaPagamento}</p>
            <Link
                  to={`/AtualizarPassagem/${Passagem?.idPassagem}`}
                  className="btn btn-info m-2"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => deletePassagem(Passagem?.idPassagem)}
                >
                  Deletar
                </button>
            </div>
            );
        })}
    </div>
  );
}

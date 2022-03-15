import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../services/api";
import ClienteAxios from "../../services/ClienteClass";

export default function Cliente() {
  const [Cliente, setCliente] = useState([]);

  const getCliente = () => {
    ClienteAxios.getCliente()
      .then((response) => {
        setCliente(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCliente();
  }, []);


  const deleteCliente = (idPessoa) => {
    ClienteAxios.deleteCliente(idPessoa)
      .then((response) => {
        getCliente("clientes");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {Cliente.map((Cliente, key) => {
        return (
          <div key={key}>
            <div>
              <div className="d-flex justify-content-around mb-5">
                <div className="p-4 m-4 mt-5">
                  <p>Usuário: {Cliente?.name}</p>
                  <p>CPF: {Cliente?.cpf}</p>
                  <p>E-mail: {Cliente?.email}</p>
                  <p>Senha: {Cliente?.password}</p>
                  <p>Cliente desde: {Cliente?.dataCadastro}</p>
                </div>
                <div className="p-4 mt-5">
                  <p>Endereço:</p>
                  <p>CEP: {Cliente.cep}</p>
                  <p>Rua: {Cliente.rua}</p>
                  <p>Bairro: {Cliente.bairro}</p>
                  <p>Cidade: {Cliente.cidade}</p>
                </div>
              </div>
                <Link
                  to={`/AtualizarCadastro/${Cliente.idPessoa}`}
                  className="btn btn-info m-4"
                >
                  Editar
                </Link>
                <button
                  className="btn btn-danger m-4"
                  onClick={() => deleteCliente(Cliente.idPessoa)}
                >
                  Deletar
                </button>
              <Link to="/MinhasPassagens" className="btn btn-primary text-white d-flex justify-content-center mb-5">Minhas Passagens</Link>
            </div>
          </div>

        );
      })}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import api from "../../services/api";

export default function Cliente() {
  const [Cliente, setCliente] = useState([]);

  useEffect(() => {
    api
    .get("/clientes/2")
      .then((response) => setCliente(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
    <div className="d-flex justify-content-around">
    <div className="p-4 m-4">
      <p>Usuário: {Cliente?.name}</p>
      <p>CPF: {Cliente?.cpf}</p>
      <p>E-mail: {Cliente?.email}</p>
      <p>Senha: {Cliente?.password}</p>
      <p>{Cliente?.dataCadastro}</p>
    </div>
    <div className="p=4 m-4"> 
      <p>Endereço:</p>
      <p>CEP: {Cliente.cep}</p>
      <p>Rua: {Cliente.rua}</p>
      <p>Bairro: {Cliente.bairro}</p>
      <p>Cidade: {Cliente.cidade}</p>
    </div>
    </div>
      <Link to="/MinhasPassagens" className="btn btn-primary text-white d-flex justify-content-center">Minhas Passagens</Link>
    </div>
  );
}

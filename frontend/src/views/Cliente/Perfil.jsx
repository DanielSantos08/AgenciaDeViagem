import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import api from "../../services/api";

export default function Cliente() {
  const [Cliente, setCliente] = useState();

  useEffect(() => {
    api
    .get("/clientes/4")
      .then((response) => setCliente(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
      <p>Usuário: {Cliente?.name}</p>
      <p>cpf: {Cliente?.cpf}</p>
      <p>email: {Cliente?.email}</p>
      <p>password: {Cliente?.password}</p>
      <Link to="/Passagens" className="btn btn-primary text-white d-flex justify-content-center">Minhas Passagens</Link>
    </div>
  );
}

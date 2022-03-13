import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteAxios from "../../services/ClienteClass";

export default function Create() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const cliente = {name, cpf, email, password, cep, rua, bairro, cidade};

    if (id) {
      ClienteAxios.putCliente(id, cliente).then((response) => {
        navigate("/Cliente");
      });
    } else {
      ClienteAxios.postCliente(cliente).then((response) => {
        navigate("/Cliente");
      });
    }
  };

  useEffect(() => {
    function getClienteById() {
      if (id) {
        ClienteAxios.getClienteById(id)
          .then((response) => {
            setName(response.data.name);
            setCpf(response.data.cpf);
            setEmail(response.data.email);
            setPassword(response.data.password);
            setCep(response.data.cep);
            setRua(response.data.rua);
            setBairro(response.data.bairro);
            setCidade(response.data.cidade);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getClienteById();
  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center mt-3">{id ? "Editar" : "Crie sua conta"}</h2>
          </legend>
          <div className="d-flex flex-wrap m-4">
            <label htmlFor="cliente" className="m-2">
            NOME:
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="cliente" className="m-2">
            CPF:
            </label>
            <input
              type="text"
              id="cpf"
              className="form-control"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
             <label htmlFor="cliente" className="m-2">
            CEP:
            </label>
            <input
              type="text"
              id="cep"
              className="form-control"
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
             <label htmlFor="cliente" className="m-2">
            RUA:
            </label>
            <input
              type="text"
              id="rua"
              className="form-control"
              placeholder="Digite sua rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
             <label htmlFor="cliente" className="m-2">
            BAIRRO:
            </label>
            <input
              type="text"
              id="bsirro"
              className="form-control"
              placeholder="Digite seu Bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
             <label htmlFor="cliente" className="m-2">
            CIDADE:
            </label>
            <input
              type="text"
              id="cidade"
              className="form-control"
              placeholder="Digite sua Cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
            <label htmlFor="cliente" className="m-2">
            E-MAIL:
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="cliente" className="m-2">
            SENHA:
            </label>
            <input
              type="text"
              id="password"
              className="form-control"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            
          <button
            type="submit"
            className="btn btn-primary m-4"
            onClick={(e) => criarOuEditarCliente(e)}
          >
            Enviar
          </button>
          <Link
            to="/"
            className="m-4 btn btn-danger"
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
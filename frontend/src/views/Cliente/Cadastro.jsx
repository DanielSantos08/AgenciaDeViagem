import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteAxios from "../../services/ClienteClass";

export default function Create() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const cliente = {name, cpf, email, password};

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
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getClienteById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Crie sua conta"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="cliente">
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
            <label htmlFor="cliente">
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
            <label htmlFor="cliente">
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
            <label htmlFor="cliente">
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
            className="btn btn-primary"
            onClick={(e) => criarOuEditarCliente(e)}
          >
            Enviar
          </button>
          <Link
            to="/"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
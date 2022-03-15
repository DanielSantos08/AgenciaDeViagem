import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PassagemAxios from "../../services/PassagemClass";
import DestinosAxios from "../../services/DestinosClass"
import "../../App.css";
import ClienteAxios from "../../services/ClienteClass";

export default function Create() {
  const [cliente, setCliente] = useState({idCliente: ""});
  const [destino, setDestino] = useState({idDestino: ""});
  const [destinos, setDestinos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [formaPagamento, setFormaPagamento] = useState("");
  const { idPassagem } = useParams();
 
  const navigate = useNavigate();

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

  const getCliente = () => {
    ClienteAxios.getCliente()
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCliente();
  }, []);

  const criarOuEditarPassagem = (e) => {
    e.preventDefault();

    const passagem = { cliente, destino, formaPagamento };

    if (idPassagem) {
      PassagemAxios.putPassagem(idPassagem, passagem).then((response) => {
        navigate("/MinhasPassagens");
      });
    } else {
      PassagemAxios.postPassagem(passagem).then((response) => {
        navigate("/MinhasPassagens");
      });
    }
  };

  useEffect(() => {
    function getPassagemById() {
      if (idPassagem) {
        PassagemAxios.getPassagemById(idPassagem)
          .then((response) => {
            setCliente({idCliente: response.data.idPessoa});
            setDestino({idDestino: response.data.idDestino});
            setFormaPagamento(response.data.formaPagamento);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getPassagemById();
  }, [idPassagem]);

  return (
    <main>
    <div className="container mb-5 py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{idPassagem ? "Editar" : "Comprar"}</h2>
          </legend>
          <div className="mb-3">

            <label htmlFor="id_destino" className="form-label">
              ID da Cidade
            </label>
            <select
              id="id_destino"
              name="id_destino"
              className="form-select"
            
              onChange={(e) => setDestino({ idDestino: Number.parseInt(e.target.value)})}>
              
              <option value="DEFAULT" >{idPassagem ? destino.city : 'Escolha um Destino'}</option>
              {destinos.map((destino) => (
                <option key={destino.idDestino} value={destino.idDestino}>
                  {destino.city} 
                </option> ))}
            </select> 

            <label htmlFor="id_pessoa" className="form-label">
              ID do Cliente
            </label>
            <select
              id="id_pessoa"
              name="id_pessoa"
              className="form-select"
            
              onChange={(e) => setCliente({idPessoa: Number.parseInt(e.target.value)})}>
              
              <option value="DEFAULT" >{idPassagem   ? cliente.name : 'Escolha um Cliente'}</option>
              {clientes.map((cliente) => (
                <option key={cliente.idPessoa} value={cliente.idPessoa}>
                  {cliente.name} 
                </option> ))}
            </select> 
 
              <label htmlFor="passagem">
            Forma de Pagamento:
            </label>
            <input
              type="text"
              id="formaPagamento"
              className="form-control mb-5"
              placeholder="Digite a Forma de Pagamento"
              value={formaPagamento}
              onChange={(e) => setFormaPagamento(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-5"
            onClick={(e) => criarOuEditarPassagem(e)}
          >
            Comprar
          </button>
          <Link
            to="/Destinos"
            className="btn btn-danger mb-5"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
    </main>
  );
}
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pass from "../../services/PassagemClass";
import DestinosAxios from "../../services/DestinosClass"

export default function Create() {
  const [cliente, setCliente] = useState({idCliente: "1"});
  const [destino, setDestino] = useState({idDestino: ""});
  const [destinos, setDestinos] = useState([]);
  const { id } = useParams();
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
  const criarOuEditarPassagem = (e) => {
    e.preventDefault();

    const passagem = { cliente, destino };

    if (id) {
      Pass.updatePassagem(id, passagem).then((response) => {
        navigate("/");
      });
    } else {
      Pass.createPassagem(passagem).then((response) => {
        navigate("/");
      });
    }
  };

  useEffect(() => {
    function getPassagemById() {
      if (id) {
        Pass.getPassagemById(id)
          .then((response) => {
            setCliente({idCliente: response.data.idCliente});
            setDestino({idDestino: response.data.idDestino});
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getPassagemById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Comprar"}</h2>
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
              
              <option value="DEFAULT" >{id ? destino.city : 'Escolha um Destino'}</option>
              {destinos.map((destino) => (
                <option key={destino.idDestino} value={destino.idDestino}>
                  {destino.city} 
                </option> ))}
            </select>

            <label htmlFor="id_cliente" className="form-label">
              ID do Cliente
            </label>
            <input
              type="text"
              id="id_cliente" 
              className="form-control"
              placeholder="Digite o seu id de Cliente"
              value={cliente}
              onChange={(e) => setCliente({idCliente: Number.parseInt(e.target.value)} )}
            /> 
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarPassagem(e)}
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
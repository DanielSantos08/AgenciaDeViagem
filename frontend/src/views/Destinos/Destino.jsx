import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinosAxios from "../../services/DestinosClass";

export default function Create() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destino = { city, state, country };

    if (id) {
        DestinosAxios.putDestinos(id, destino).then((response) => {
        navigate("/Passagens");
      });
    } else {
        DestinosAxios.postDestinos(destino).then((response) => {
        navigate("/Passagens");
      });
    }
  };

  useEffect(() => {
    function getDestinosById() {
      if (id) {
        DestinosAxios.getDestinosById(id)
          .then((response) => {
            setCity(response.data.city);
            setState(response.data.state);
            setCountry(response.data.country);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getDestinosById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar Destino"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Cidade" className="form-label">
              Cidade
            </label>
            <input
              type="text"
              id="destino"
              className="form-control"
              placeholder="Digite a Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="Estado" className="form-label">
              Estado
            </label>
            <input
              type="text"
              id="Estado"
              className="form-control"
              placeholder="Digite o Estado"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="País" className="form-label">
              País
            </label>
            <input
              type="text"
              id="País"
              className="form-control"
              placeholder="Digite o País"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarDestino(e)}
          >
            Cadastrar
          </button>
          <Link
            to="/destino"
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
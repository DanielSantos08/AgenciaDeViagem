import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
         <header>
         <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-warning border-bottom">
             <div className="container">
                 <Link className="navbar-brand" to="/">Agência de Viagens</Link>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                         aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                     <ul className="navbar-nav flex-grow-1 justify-content-between">
                         <li className="nav-item btn btn-primary">
                         <Link to="/" className="nav-link text-white">Home</Link>
                         </li>
                         <li className="nav-item btn btn-primary">
                         <Link to="/Destinos" className="nav-link text-white">Destinos</Link>
                         </li>
                         <li className="nav-item btn btn-primary">
                         <Link to="/Pacotes" className="nav-link text-white">Pacotes</Link>
                         </li>
                         <li className="nav-item btn btn-primary">
                         <Link to="/Contato" className="nav-link text-white">Contato</Link>
                         </li>
                     </ul>
                 </div>
             </div>
         </nav>
     </header>
    );
}
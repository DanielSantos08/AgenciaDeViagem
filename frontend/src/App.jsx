import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import Index from "./views/Index";
import Contato from "./views/Contato";
import Menu from "./components/basics/Menu";
import Footer from "./components/basics/Footer";
import Error from "./components/basics/404";
import Cliente from "./views/Cliente/Perfil";
import Cadastro from './views/Cliente/Cadastro'
import Destinos from "./views/Destinos/Destinos";
import CriarDestino from "./views/Destinos/CriarDestino";
import Pacotes from "./views/Destinos/Pacotes";
import Passagem from "./views/Passagem/Passagem";
import MinhasPassagens from "./views/Passagem/MinhasPassagens";
import PutDeleteDestinos from './views/Destinos/PutDeleteDestinos'


const App = props => (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Cliente" element={<Cliente/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/CriarDestino" element={<CriarDestino/>}/>
        <Route path="/Pacotes" element={<Pacotes/>} />
        <Route path="/Passagem" element={<Passagem/>} />
        <Route path="/MinhasPassagens" element={<MinhasPassagens/>} />
        <Route path="/PutDeleteDestinos" element={<PutDeleteDestinos/>} />
        <Route path="/Destinos-Update/:idDestino" element={<CriarDestino/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
export default App;

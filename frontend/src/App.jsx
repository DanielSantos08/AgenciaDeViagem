import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Destinos from "./views/Destinos/Destinos";
import Pacotes from "./views/Destinos/Pacotes";
import Contato from "./views/Contato";
import Index from "./views/Index";
import Menu from "./components/basics/Menu";
import Footer from "./components/basics/Footer";
import Formas_Pagamento from "./components/basics/Formas_Pagamento";
import './App.css';
import Error from "./components/basics/404";
import Cliente from "./views/Cliente/Perfil";
import Passagem from "./views/Passagem/Passagem";
import Passagens from "./views/Passagem/Passagens";
import Cadastro from './views/Cliente/Cadastro'
import Destino from "./views/Destinos/Destino";


const App = props => (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Pacotes" element={<Pacotes/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Cliente" element={<Cliente/>} />
        <Route path="/Passagem" element={<Passagem/>} />
        <Route path="/Passagens" element={<Passagens/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
        <Route path="/Destino" element={<Destino/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      <Formas_Pagamento/>
      <Footer />
    </BrowserRouter>
  );
export default App;

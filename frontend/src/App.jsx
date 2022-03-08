import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Destinos from "./views/Destinos";
import Pacotes from "./views/Pacotes";
import Contato from "./views/Contato";
import Index from "./views/Index";
import Menu from "./components/basics/Menu";
import Footer from "./components/basics/Footer";
import Formas_Pagamento from "./components/basics/Formas_Pagamento";
import './App.css';
import Error from "./views/404";


const App = props => (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/Destinos" element={<Destinos/>} />
        <Route path="/Pacotes" element={<Pacotes/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Formas_Pagamento/>
      <Footer />
    </BrowserRouter>
  );
export default App;

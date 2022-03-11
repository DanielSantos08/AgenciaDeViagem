import ImgPagamentos from "../basics/imagens/forma-de-pagamento-grande.png"
import "../../App.css";

export default function Pagamentos(){
    return(<>
    <div className="d-flex justify-content-center">
        <img className="h-25 w-50" src={ImgPagamentos} alt="Formas De Pagamento" />
    </div>
    </>)
}
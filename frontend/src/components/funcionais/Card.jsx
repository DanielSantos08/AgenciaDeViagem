import "./Card.css"
import {Link} from 'react-router-dom'

export default props => {
    //Passando estilo como parametro para o componente
   const estilo = {
       backgroundColor: props.color || "#888"
   }   
       return(
           //Poderia passar o estilo dentro da style acrescentando:{} do css dentro do:{} do objeto javascript
           //Da seguinte maneira : <div className="Card" style={{backgroundColor: props.color || "#123"}}> |style={{css}}|
        <div className="Card" style={estilo}> 
        <div className="Content"><img src={props.children} alt={props.titulo} /></div>
        <div className="Title">
           <span className="cityTitle">{props.titulo}</span> 
           <span className="cityPrice">R$ {props.preco}</span> 
        </div>
        <Link className="btn btn-success" to="Passagem">Comprar</Link> 
        </div>
    )
}
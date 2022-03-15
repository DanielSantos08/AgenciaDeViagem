import axios from "axios";

const ClienteApi =  "https://agenciadeviagem.herokuapp.com/clientes";

class ClienteAxios{
    getCliente() {
        return axios.get(ClienteApi);
    }
    getClienteById(id){
        return axios.get(ClienteApi+ "/"+ id)
    }
    postCliente(cliente){
        return axios.post(ClienteApi, cliente)
    }
    deleteCliente(id){
        return axios.delete(ClienteApi+ "/" +id)
    }
    putCliente(cliente, id){
        return axios.put(ClienteApi+ "/" + id, cliente)
    }
}
export default new ClienteAxios();
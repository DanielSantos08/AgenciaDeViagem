import axios from "axios";

const DestinosApi =  "http://localhost:8080/destinos";

class DestinosAxios{
    getDestinos() {
        return axios.get(DestinosApi);
    }
    getDestinosById(idDestinos){
        return axios.get(DestinosApi+ "/"+ idDestinos)
    }
    postDestinos(destinos){
        return axios.post(DestinosApi, destinos)
    }
    deleteDestinos(idDestinos){
        return axios.delete(DestinosApi+ "/" +idDestinos)
    }
    putDestinos(idDestinos, destinos){
        return axios.put(DestinosApi+ "/" + idDestinos, destinos)
    }
}
export default new DestinosAxios();
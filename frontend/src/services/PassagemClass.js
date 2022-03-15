import axios from "axios";

const passagemApi =  "https://agenciadeviagem.herokuapp.com/passagem";

class PassagemAxios{
    getPassagem() {
        return axios.get(passagemApi);
    }
    getPassagemById(idPassagem) {
        return axios.get(passagemApi + "/" + idPassagem);
    }
    postPassagem(passagem) {
        return axios.post(passagemApi, passagem);
    }
    deletePassagem(idPassagem) {
        return axios.delete(passagemApi + "/" + idPassagem);
    }
    putPassagem(idPassagem, passagem) {
        return axios.put(passagemApi + "/" + idPassagem, passagem);
    }
}
export default new PassagemAxios();
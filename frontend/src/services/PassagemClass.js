import axios from "axios";

const passagemApi =  "http://localhost:8080/passagem";

class Pass{
    getAllPassagem() {
        return axios.get(passagemApi);
    }
    
    getPassagemById(idPassagem) {
        return axios.get(passagemApi + "/" + idPassagem);
    }
    createPassagem(passagem) {
        return axios.post(passagemApi, passagem);
      }
    
      updatePassagem(idPassagem, passagem) {
        return axios.put(passagemApi + "/" + idPassagem, passagem);
      }
    
      deletePassagem(idPassagem) {
        return axios.delete(passagemApi + "/" + idPassagem);
      }
}
export default new Pass();
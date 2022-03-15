import axios from 'axios';

const api = axios.create({
    baseURL: "https://agenciadeviagem.herokuapp.com",
  });
  
  export default api;
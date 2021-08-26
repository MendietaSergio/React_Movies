  
import axios from "axios";

const baseURL = "https://movies-apirest.herokuapp.com/";
//Almacena el pedido del token
const token = window.localStorage.getItem('_Token');

const html = axios.create({ baseURL });
//configurar los header para que reciba el token.
//agarra la configuracion actual por parametro y agrega la nueva configuracion
html.interceptors.request.use(async (config) => {
    config.headers = { token };
    return config;
});

export default html;
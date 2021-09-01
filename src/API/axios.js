  
import axios from "axios";

const baseURL = "https://movies-apirest.herokuapp.com/";


const html = axios.create({ baseURL });
//configurar los header para que reciba el token.
//agarra la configuracion actual por parametro y agrega la nueva configuracion
html.interceptors.request.use(async (config) => {
    //Almacena el pedido del token, cada vez que hace un pedido.
    const token = window.localStorage.getItem('_Token');
    config.headers = { token };
    return config;
});

export default html;
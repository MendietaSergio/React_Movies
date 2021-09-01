import http from '../axios';

const newUser = (data) => {
    const { email, pass } = data;
    return { email, pass };
};
//funcion para conectar en cada pedido
const usersService = {
    register: (data) => http.post("register", newUser(data)),
    login: (data) => http.post("login", newUser(data)),
};
//objetos con funciones

export default usersService;
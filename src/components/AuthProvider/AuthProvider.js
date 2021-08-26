import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
//children => lo que le paso por etiqueta
//
const PrivateRoute = ({ token, setToken, children }) => {
  
  //para cuando se ejecute el componente
  useEffect(() => {
    const storageToken = window.localStorage.getItem('_Token');//capturo el token de localStorage
    setToken(storageToken);//setteo el nuevo estado
  }, [token]);//se ejecuta cambia el 'token'

  //si existe el token, renderizo 'children', si  no existe, redirecciono!
  return <>{token ? children : <Redirect to="/signin" />}</>;
};
//
const PublicRoute = ({ token, setToken, children }) => {
  useEffect(() => {
    const storageToken = window.localStorage.getItem('_Token');
    setToken(storageToken);
  }, [token]);

  //si existe el token, no me deja ir a iniciar sesión. Me lleva al Home.
  return <>{!token ? children : <Redirect to="/" />}</>;
  
};
//para exportar un solo componente que guarda los dos componentes diferentes.
const AuthProvider = { PrivateRoute, PublicRoute };

export default AuthProvider;
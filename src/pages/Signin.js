import { useState } from 'react'
import { Link } from 'react-router-dom'

/* Componentes */
import Register from '../components/Register/';
import Login from '../components/Login/';
//recibe la variable de token.
const Signin = ({
    setToken
  }) => {

    const [ login, setLogin ] = useState (true);   

    return (
        <>
        <h1 className="text-center my-4">Bienvenid@s a MoviesReact</h1>
            <div>
            <div className="text-center">
        {login ? (
          <p>
            ¿No estás registrado? ¿Qué esperás?{' '}
            <Link
              to="#"
              className="text-center"
              onClick={() => setLogin(false)}
            >
              Registrate!
            </Link>
          </p>
        ) : (
          <p>
            ¿Ya estás registrado?{' '}
            <Link
              to="#"
              className="text-center"
              onClick={() => setLogin(true)}
            >
              Logueate!
            </Link>
          </p>
        )}
      </div>
      {login ? <Login /> : <Register setToken={setToken}/>}
            </div>
        </>
    )

}

export default Signin;
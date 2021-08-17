import { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input';


const Signin = () => {

    const [ login, setLogin ] = useState (true);
    
    

    return (
        <>
        <h1 className="text-center my-4">Bienvenidos a Movies !!!</h1>
        <div className="text-center ">
        
        {login ?(
            <p>
                ¿No estás registrado? ¿Qué esperás?{' '}
                <Link className="text-center" to="#" onClick={() => setLogin(false)}>Registrate!</Link>
            </p> ):
            (<p>
            ¿Ya estás registrado?{' '}
            <Link className="text-center" to="#" onClick={() => setLogin(true)}>Iniciá Sesión!</Link>
            </p>)}
            
        </div>
        {login ? <p>Logín</p> : <p>Registro</p>}
        <Input
        name="nombre" 
        type="text"
        placeholder="Nombre..."
        label="Nombre: "
        defaultValue="Eric"
        error= {{message: 'error'}}
        />
        </>
    )

}

export default Signin;
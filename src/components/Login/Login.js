import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import validations from '../../validations/registerValidations';
import Button from '../Button/index';
import Input from '../Input';
import Message from '../Message';
import usersService from '../../API/services/user'
//logear con prueba123456789@gmail.com
//pass: 123456789
const Login = ({ className, setToken }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);//estado para cargar btn
  const [error, setError] = useState(false);//estado para marcar alerta
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await usersService.login(data);
      window.localStorage.setItem('_Token', response.data.token);
      setToken(response.data.token);
      history.push('/');
    } catch (error) {
      setError(true);//al fallar en la API, se cambia el estado de error a true
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container p-4 d-flex justify-content-center ${className}`}>
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col-12 col-md-8">
          <h3 className="text-center pb-3">Logueate!</h3>
        </div>
        <div className="col-12 col-md-9">
          <Message
            show={error}//le paso el estado en false
            setShow={setError}//cambio el valor del estado
            message="Credenciales inválidas"
            variant="danger"
            time={5000}
          />
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Input
              className="col-12"
              name="email"
              type="text"
              placeholder="Email"
              register={register}
              validation={validations.email}
              error={errors.email}
            />
            <Input
              className="col-12"
              name="pass"
              type="password"
              placeholder="Contraseña"
              register={register}
              validation={validations.pass}
              error={errors.pass}
            />
            <Button type="submit" text="ENVIAR" loading={loading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

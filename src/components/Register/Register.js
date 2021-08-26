import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import usersService from "../../API/services/user";
import validations from "../../validations/registerValidations";
import Button from "../Button/index";
import Input from "../Input";

import http from "../../API/axios";
//recibe la variable token
const Register = ({ className, setToken }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  //PARA QUE LA FUNCION onSubmit SEA ASINCRONA
  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // response ESPERA A QUE RESPONDA ALGO.
      const response = await http.post("register", data);
      console.log("Respuesta terminada...!");
      console.log(response);
      // const response = usersService.register(data);
      window.localStorage.setItem('_Token', response.data.token);
      //al registrar, carga el token.
      setToken(response.data.token);
      console.log(response.data);
      history.push("/");
    } catch (err) {
      // setLoading(false);
      if (err) {
        console.log("Error" + err);
      }
    } finally {//SE EJECUTA AL FINAL DE TODO (tanto en después del try, como en el catch).
      setLoading(false);
    }
  };

  return (
    <div className={`container p-4 d-flex justify-content-center ${className}`}>
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
        <div className="col-12 col-md-8">
          <h3 className="text-center pb-3">Registrate</h3>
        </div>
        <div className="col-12 col-md-9">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              className="col-12"
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              register={register}
              validation={validations.email}
              error={errors.email}
            />

            <Input
              className="col-12"
              name="pass"
              type="password"
              label="Contraseña"
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

export default Register;

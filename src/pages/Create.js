import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moviesService from "../API/services/movies";
import MovieForm from "../components/MovieForm/MovieForm";

const Create = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const submit = async (data) => {
    setLoading(true);
    try {
      setLoading(true)
      //espera la funcion, pero no se guarda en ningun lugar.
      await moviesService.create(data);
      history.push("/");//Para redireccionar.
      
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally{//se ejecuta después de del try/error.
      setLoading(false);
    }
  };

  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Crear película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        <MovieForm submit={submit} loading={loading} />
      </div>
    </div>
  );
};
export default Create;

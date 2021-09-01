import React from "react";
import { useState, useEffect } from "react";
import moviesService from "../API/services/movies";
import Card from "../components/Card";

const Home = () => {
  const [movies, setMovies] = useState([]); //inicializar como array vacío
  const [refresh, setRefresh] = useState(true);//para que refresque la pagina.
  //callback de useEffect no son asincrono.
  useEffect(() => {
    if(refresh){//si es true, hace el pedido. Si es false, no hace el pedido.
      const fetMovies = async () => {
        const { data } = await moviesService.getAll();
        console.log(data);
        setMovies(data.data);
      };
      fetMovies();
      setRefresh(false)
    }
  }, [refresh]);//cada vez que cambie el valor de 'refresh' se ejecuta useEffect
  const handleDeleteMovie = async (id) =>{
    try{
      await moviesService.remove(id);
    } catch(error){
      console.log(error);
    } finally{
      setRefresh(true)
    }
  }
  return (
    <div className="container">
      <h2 className="text-center my-5">Nuestras películas (todo legal)</h2>
      <section className="row">
        {movies.map((movie) => (
          <Card
            movie={movie}
            key={movie.id}
            setRefresh={setRefresh}
            handleDeleteMovie={handleDeleteMovie}
          />
        ))}
      </section>
    </div>
  );
};
export default Home;

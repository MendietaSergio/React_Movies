import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moviesService from '../API/services/movies';
import MovieForm from '../components/MovieForm';
import createFormData from '../utils/createFormData';


const Edit = () => {
  const { id } = useParams();
  const [ movie, setMovie ] = useState(null);
  const [ loading, setLoading] = useState();
  const history = useHistory();

  useEffect(() => {
    const fetchMovie = async () => {
      try{
        const response = await moviesService.getOne(id);
      setMovie(response.data.data);
      } catch (error){
        console.log(error);
      }
      
    };
    fetchMovie();
  }, [])

  const submit = async (data) => {
    
      try {
        setLoading(true);
        await moviesService.update(id, data);
        history.push('/');
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false)
      }
    };


  return (
    <div className="row d-flex justify-content-center">
      <h1 className="text-center m-5">Editar película</h1>
      <div className="col-12 col-lg-8 col-xl-7">
        {
          movie ? (
            <MovieForm movie={movie} submit={submit} loading={loading}/>
          ) : null
        }   
      </div>
    </div>
  );
};
export default Edit;
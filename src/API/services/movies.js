import http from '../axios';

const newMovie = (data) => {
  const { title, rating, awards, release_date, length, genre_id } = data;
  return { title, rating, awards, release_date, length, genre_id: +genre_id };
};

const moviesService = {
  getAll: () => http.get('api/movies'),//mostrar todas las peliculas
  getOne: (id) => http.get(`api/movies/${id}`),//para mostrar una pelicula
  create: (data) => http.post('api/movies/create', newMovie(data)),//crar una pelicula
  update: (id, data) => http.put(`api/movies/update/${id}`, newMovie(data)),//actualizar una pelicula
  remove: (id) => http.delete(`api/movies/delete/${id}`),//eliminar una pelicula
};

export default moviesService;
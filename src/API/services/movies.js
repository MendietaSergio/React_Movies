import http from '../axios';

const newMovie = (data) => {
  const { title, rating, awards, release_date, length, genre_id } = data;
  return { title, rating, awards, release_date, length, genre_id: +genre_id };
};

const moviesService = {
  getAll: () => http.get('api/movies'),
  getOne: (id) => http.get(`api/movies/${id}`),
  create: (data) => http.post('api/movies/create', newMovie(data)),
  update: (id, data) => http.put(`api/movies/update/${id}`, newMovie(data)),
  remove: (id) => http.delete(`api/movies/delete/${id}`),
};

export default moviesService;
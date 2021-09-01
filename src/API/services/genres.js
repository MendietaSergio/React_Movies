import http from '../axios';

const genresService = {
  getAll: () => http.get('api/genres'),
}

export default genresService;
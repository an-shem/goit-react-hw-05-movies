import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4b778d4c29fb731b86ff7a9149d1de58';

const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
};

const fetchSearchMovies = searchQuery => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};

const fetchMovie = id => {
  return axios
    .get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=images&language=en-US`,
    )
    .then(response => response.data);
};

const fetchCast = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const fetchReviews = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

const movieApi = {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovie,
  fetchCast,
  fetchReviews,
};

export default movieApi;

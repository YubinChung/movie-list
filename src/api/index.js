import axios from 'axios';

const API_KEY = `a3e763a37360726637c5723d64ed797a`
export const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`;

export const API = axios.create({
  baseURL: BASE_URL,
  crossDomain: true,
  timeout: 3000,
  headers: {
    "Content-Type": 'application/json;charset=utf-8',
    'Accept': 'application/json',
    "Access-Control-Allow-Origin" : `*`,
    'Access-Control-Allow-Methods': `*`,
    'Access-Control-Allow-Headers': `*`
  }
});


export const getMovies = async () => {
  const movies = await axios(BASE_URL).then(res => res.data.results )
  console.log('moo..', movies);
  return movies;
};

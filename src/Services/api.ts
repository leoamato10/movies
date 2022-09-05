import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a3750cf023828aeba1f8573bab0f27e9',
    language: 'en-US'
  }
});

export default movieDB;

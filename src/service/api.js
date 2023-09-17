import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-ehcf.onrender.com',
})

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization: import.meta.env.VITE_TMDB_API_KEY,
  },
})

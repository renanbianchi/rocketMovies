import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization: import.meta.env.VITE_TMDB_API_KEY,
  },
})

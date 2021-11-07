import axios from "axios";

export const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/discover/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&with_genres=99"
})
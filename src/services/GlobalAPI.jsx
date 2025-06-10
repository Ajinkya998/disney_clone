import axios from 'axios';

const moviesBaseURL = 'https://api.themoviedb.org/3';
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGQzNzYzODNhZDkxMDRkNjU4NjRmYzRkOWM5MmUwNiIsIm5iZiI6MTc0OTM4NTE4OS4wMjMsInN1YiI6IjY4NDU3ZmU1YmMwNGJmOWJiNjNmYzQyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fucepg-hup47_agWa5uO-16U_TOcB-0sotnCFNgF7Pw";

const getTrendingVideos = axios.get(`${moviesBaseURL}/trending/all/day`, {
    headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});
const getMovieGenreId = (id) => {
    return axios.get(movieByGenreBaseURL + "&with_genres=" + id, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}

export default {
    getTrendingVideos, getMovieGenreId
}
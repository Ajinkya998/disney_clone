import axios from 'axios';

const moviesBaseURL = 'https://api.themoviedb.org/3';
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';


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
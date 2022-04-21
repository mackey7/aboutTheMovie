import axios from "axios";
import { FETCH_MOVIE_ITEM, FETCH_SERACH_MOVIE } from "./types";
import { API_KEY } from "../env/key";

export const ImportMovieSerachFromApi = (query) => {
  return (dispatch) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then((response) => {
        dispatch(fetchSerchedMoviesSuccess(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
export const fetchSerchedMoviesSuccess = (payload) => {
  return {
    type: FETCH_SERACH_MOVIE,
    payload,
  };
};

export const fetchMoviesSuccess = (payload) => {
  return {
    type: FETCH_MOVIE_ITEM,
    payload,
  };
};

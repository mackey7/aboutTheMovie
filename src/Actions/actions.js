import { FETCH_MOVIE_ITEM } from "./types";

export const fetchMoviesSuccess = (payload) => {
  return {
    type: FETCH_MOVIE_ITEM,
    payload,
  };
};

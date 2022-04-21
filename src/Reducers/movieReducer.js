import { FETCH_MOVIE_ITEM, SERACH_MOVIE } from "../Actions/types";
const initial = {
  serched_movies: [],
  movie_item: [],
};
const moviesReducer = (state = null, actions) => {
  switch (actions.type) {
    case FETCH_MOVIE_ITEM: {
      return { ...state, movie_item: actions.payload };
    }
    case FETCH_SERACH_MOVIE: {
      return { ...state, serched_movies: actions.payload };
    }
    default:
      return state;
  }
};

export default moviesReducer;

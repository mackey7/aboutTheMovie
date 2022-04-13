import { FETCH_MOVIE_ITEM } from "../Actions/types";
const initial = {};
const moviesReducer = (state = null, actions) => {
  switch (actions.type) {
    case FETCH_MOVIE_ITEM: {
      return { ...state, movie_item: actions.payload };
    }
    default:
      return state;
  }
};

export default moviesReducer;

import {MoviesDetailsCallResponse} from '../../Types/MoviesDetailsTypes';
import {Movie, MoviesCallResponse} from '../../Types/MoviesTypes';
import * as types from '../Actions/actionTypes';

interface IState {
  movies?: MoviesCallResponse;
  wishlist?: Movie[];
  movieDetails?: MoviesDetailsCallResponse;
  isLoading: boolean;
  error?: string;
}

export const initialState: IState = {
  movies: undefined,
  wishlist: undefined,
  movieDetails: undefined,
  isLoading: false,
  error: undefined,
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        movies: action.payload,
      };
    case types.GET_MOVIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.GET_MOVIE_DETAIL:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        movieDetails: action.payload,
      };
    case types.GET_MOVIE_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        movieDetails: {},
      };
    case types.ADD_MOVIE_TO_WISHLIST:
      const wishlistMovie = state.wishlist ? state.wishlist : [];
      const movie = {...action.payload, inWishlist: true};

      movie && wishlistMovie.push(movie);

      return {
        ...state,
        wishlist: wishlistMovie,
      };

    case types.REMOVE_FROM_WISHLIST:
      const {id} = action.payload;
      const movieToRemove = state.wishlist.filter(e => e.id !== id);

      return {
        ...state,
        wishlist: movieToRemove,
      };

    default:
      return state;
  }
}

export {moviesReducer};

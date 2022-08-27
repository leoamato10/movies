import * as types from './actionTypes';

export function getMovies() {
  return {
    type: types.GET_MOVIES,
  };
}

export function getMovieDetail(id) {
  return {
    type: types.GET_MOVIE_DETAIL,
    payload: id,
  };
}

export function addToWishlist(movie) {
  return {
    type: types.ADD_MOVIE_TO_WISHLIST,
    payload: movie,
  };
}

export function removeFromWishlist(movie) {
  return {
    type: types.REMOVE_FROM_WISHLIST,
    payload: movie,
  };
}

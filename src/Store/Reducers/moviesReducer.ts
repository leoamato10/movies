import * as types from '../Actions/actionTypes';

export const initialState = {
  movies: [],
  wishlist: [],
  loading: false,
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case types.GET_MOVIES_FAILURE:
      console.log('desde reducer  f', action);
      return {
        ...state,
        // movies: true,
      };

    default:
      return state;
  }
}

export {moviesReducer};

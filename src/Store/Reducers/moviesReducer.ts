import * as types from '../Actions/actionTypes';

export const initialState = {
  movies: [],
  wishlist: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    // case types.AUTH_LOGIN:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case types.AUTH_LOGIN_SUCCESS:
    //   const {user, token} = action.payload.currentUser;
    //   return {
    //     ...state,
    //   };
    // case types.AUTH_LOGIN_FAILURE:
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
}

export {moviesReducer};

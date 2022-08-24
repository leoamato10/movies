import * as types from './actionTypes';

export function getMovies() {
  return {
    type: types.AUTH_LOGIN,
    payload,
  };
}

export function authLoginSucceeded(payload) {
  return {
    type: types.AUTH_LOGIN_SUCCESS,
    payload,
  };
}

export function authLoginFailed(payload) {
  return {
    type: types.AUTH_LOGIN_FAILURE,
    payload,
  };
}

export function setDefaultValues(payload) {
  return {
    type: types.SET_DEFAULT_VALUES,
    payload,
  };
}

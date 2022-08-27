import * as ActionType from '../Actions/actionTypes';
import {call, put, takeEvery} from 'redux-saga/effects';
import moviesApi from '../../Services/api';
import {Movies} from '../../Types/Types';

const axiosGetMovies = async () => {
  const topRatedPromise = moviesApi.get('/top_rated');
  const popularPromise = moviesApi.get('/popular');
  const upcomingPromise = moviesApi.get('/upcoming');

  const resps = await Promise.all([
    topRatedPromise,
    popularPromise,
    upcomingPromise,
  ]);

  return {
    topRated: resps[0].data.results,
    popular: resps[1].data.results,
    upcoming: resps[2].data.results,
  };
};

export function* handleGetMovies(action) {
  try {
    const payload: Movies = yield call(axiosGetMovies);

    yield put({type: ActionType.GET_MOVIES_SUCCESS, payload});
  } catch (e) {
    console.log('e', e);
    yield put({
      type: ActionType.GET_MOVIES_FAILURE,
      payload: 'Movies cant be loaded.',
    });
  }
}

export function* watchMovies() {
  yield takeEvery(ActionType.GET_MOVIES, handleGetMovies);
}

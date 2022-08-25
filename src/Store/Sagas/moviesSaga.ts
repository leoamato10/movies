import * as ActionType from '../Actions/actionTypes';
import {call, put, takeEvery} from 'redux-saga/effects';
import moviesDB from '../../Services/api';

const axiosGetMovies = async () => {
  const popularPromise = moviesDB.get('/popular');
  const topRatedPromise = moviesDB.get('/top_rated');
  const upcomingPromise = moviesDB.get('/upcoming');

  const resps = await Promise.all([
    popularPromise,
    topRatedPromise,
    upcomingPromise,
  ]);

  return {
    popular: resps[0].data.results,
    topRated: resps[1].data.results,
    upcoming: resps[2].data.results,
  };
};

export function* handleGetMovies(action) {
  try {
    const payload = yield call(axiosGetMovies, action);

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

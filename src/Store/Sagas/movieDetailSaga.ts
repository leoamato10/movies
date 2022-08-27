import * as ActionType from '../Actions/actionTypes';
import {call, put, takeEvery} from 'redux-saga/effects';
import moviesApi from '../../Services/api';
import {MoviesDetailsCallResponse} from '../../Types/MoviesDetailsTypes';

const axiosGetMovieDetail = async action => {
  const movieId = action.payload;

  const movieDetailsPromise = moviesApi.get(`/${movieId}`);
  const castPromise = moviesApi.get(`/${movieId}/credits`);

  const [movieDetailsResp, castPromiseResp] = await Promise.all([
    movieDetailsPromise,
    castPromise,
  ]);

  return {
    movieData: movieDetailsResp.data,
    cast: castPromiseResp.data.cast,
  };
};

export function* handleGetMovieDetail(action) {
  try {
    const payload: MoviesDetailsCallResponse = yield call(
      axiosGetMovieDetail,
      action,
    );

    yield put({type: ActionType.GET_MOVIE_DETAIL_SUCCESS, payload});
  } catch (e) {
    yield put({
      type: ActionType.GET_MOVIE_DETAIL_FAILURE,
      payload: 'Movies cant be loaded.',
    });
  }
}

export function* watchMovieDetail() {
  yield takeEvery(ActionType.GET_MOVIE_DETAIL, handleGetMovieDetail);
}

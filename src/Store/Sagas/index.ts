import { all } from 'redux-saga/effects';
import { watchMovies } from './moviesSaga';
import { watchMovieDetail } from './movieDetailSaga';

export default function* rootSaga() {
  yield all([watchMovies(), watchMovieDetail()]);
}

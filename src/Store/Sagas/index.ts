import {all} from 'redux-saga/effects';
import {watchMovies} from './moviesSaga';

export default function* rootSaga() {
  yield all([watchMovies()]);
}

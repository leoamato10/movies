import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {moviesReducer} from './Reducers/moviesReducer';
import sagaRoot from './Sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  moviesReducer,
  {},
  applyMiddleware(sagaMiddleware),
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(sagaRoot);

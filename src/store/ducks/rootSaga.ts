import {all, fork} from 'redux-saga/effects';

import movies from '../ducks/movies/sagas';

export default function* rootSaga() {
  yield all([fork(movies)]);
}
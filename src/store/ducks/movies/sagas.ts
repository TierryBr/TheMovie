import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSucces, loadError } from '../movies/actions';

import {REACT_APP_API_KEY} from '@env';

export default function* load(): any {
  try{
    const response = yield call(api.get, `movie/popular?api_key=${REACT_APP_API_KEY}`);

    yield put(loadSucces(response.data.results));
  } catch(err) {
    yield put(loadError());
  }
}

import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSucces, loadError } from '../movies/actions';

export default function* load(): any {
  try{
    const response = yield call(api.get, '/movie/popular?api_key=bc232e75d0432d93f3c6d11fca222446');

    yield put(loadSucces(response.data.results));
  } catch(err) {
    yield put(loadError());
  }
}

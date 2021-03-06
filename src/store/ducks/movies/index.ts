import { Reducer } from 'redux';
import { MoviesState, MoviesTypes } from './types';

const INITIAL_STATE: MoviesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<MoviesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case MoviesTypes.LOAD_SUCCES:
      return { ...state, loading: false, error: false, data: action.payload.data };
    case MoviesTypes.LOAD_ERROR:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
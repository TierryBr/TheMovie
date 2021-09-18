import { action } from 'typesafe-actions';

import { MoviesTypes, Movies } from './types';

export const loadRequest = () => action(MoviesTypes.LOAD_REQUEST);

export const loadSucces = (data: Movies[]) => action(MoviesTypes.LOAD_SUCCES, {data});

export const loadError = () => action(MoviesTypes.LOAD_ERROR);
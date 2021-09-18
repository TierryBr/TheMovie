export enum MoviesTypes {
  LOAD_REQUEST = '@movies/LOAD_REQUEST',
  LOAD_SUCCES = '@moviess/LOAD_SUCCES',
  LOAD_ERROR = '@movies/LOAD_ERROR',
}

export interface Movies {
  id: string,
  title: string,
  genres: string,
  language: string,
  date: string,
  vote: string
}

export interface MoviesState {
  readonly data: Movies[],
  readonly loading: boolean,
  readonly error: boolean
}
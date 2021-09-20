export enum MoviesTypes {
  LOAD_REQUEST = '@movies/LOAD_REQUEST',
  LOAD_SUCCES = '@moviess/LOAD_SUCCES',
  LOAD_ERROR = '@movies/LOAD_ERROR',
}

export interface Movies {
  id: string,
  title: string,
  overview: string,
  original_language: string,
  release_date: string,
  vote_average: string,
  poster_path: string,
  backdrop_path: string
}

export interface MoviesState {
  readonly data: Movies[],
  readonly loading: boolean,
  readonly error: boolean
}
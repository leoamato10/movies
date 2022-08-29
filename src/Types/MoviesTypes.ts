export interface MoviesCallResponse {
  popular: Movie[];
  topRated: Movie[];
  upComing: Movie[];
}

export interface Movies {
  dates?: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  filmCategory: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

import { Params } from "@/common/types/common";

export interface MovieDates {
  maximum: string;
  minimum: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface MovieResponse {
  dates: MovieDates;
  page: number;
  results: Movie[];
}

export interface ParamsNowPlaying extends Params {}

export interface ParamsTopRated extends Params {}

export interface ParamsSearchMovie {
  query: string;
  page?: number;
  primary_release_year?: number;
  include_adult?: boolean;
  region?: string;
  language?: string;
  year?: number;
}

export interface ParamsMovieDetails {
  movie_id: number;
  append_to_response?: string;
  language?: string;
}

export interface MovieVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type:
    | "Trailer"
    | "Teaser"
    | "Clip"
    | "Featurette"
    | "Behind the Scenes"
    | "Bloopers";
  official: boolean;
  published_at: string;
  id: string;
}

export interface MovieVideoResponse {
  id: number;
  results: MovieVideo[];
}

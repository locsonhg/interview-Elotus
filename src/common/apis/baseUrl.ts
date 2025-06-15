export const URL_TMDB = {
  NOW_PLAYING: "/movie/now_playing",
  TOP_RATED: "/movie/top_rated",
  SEARCH_MOVIE: "/search/movie",
  MOVIE_DETAILS: (movie_id: number) => `/movie/${movie_id}`,
  MOVIE_VIDEOS: (movie_id: number) => `/movie/${movie_id}/videos`,
};

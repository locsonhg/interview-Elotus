import { ResponceCommon } from "@/common/types/common";
import { URL_TMDB } from "../../apis/baseUrl";
import axiosClient from "../../configs/axiosClient";
import {
  Movie,
  MovieResponse,
  MovieVideoResponse,
  ParamsMovieDetails,
  ParamsNowPlaying,
  ParamsSearchMovie,
  ParamsTopRated,
} from "./movie.interface";

const getNowPlayingMovies = async (
  params: ParamsNowPlaying
): ResponceCommon<MovieResponse> => {
  const response = await axiosClient.get(URL_TMDB.NOW_PLAYING, {
    params: params,
  });
  return response;
};

const getTopRatedMovies = async (
  params: ParamsTopRated
): ResponceCommon<MovieResponse> => {
  const response = await axiosClient.get(URL_TMDB.TOP_RATED, {
    params: params,
  });
  return response;
};

const searchMovies = async (
  params: ParamsSearchMovie
): ResponceCommon<MovieResponse> => {
  const response = await axiosClient.get(URL_TMDB.SEARCH_MOVIE, {
    params: params,
  });
  return response;
};

const getMovieDetails = async (
  params: ParamsMovieDetails
): ResponceCommon<Movie> => {
  const { movie_id, ...d } = params;
  const response = await axiosClient.get(URL_TMDB.MOVIE_DETAILS(movie_id), {
    params: { ...d },
  });
  return response;
};

const getMovieVideos = async (
  params: ParamsMovieDetails
): ResponceCommon<MovieVideoResponse> => {
  const { movie_id, ...d } = params;
  const response = await axiosClient.get(URL_TMDB.MOVIE_VIDEOS(movie_id), {
    params: { ...d },
  });
  return response;
};

export default {
  getNowPlayingMovies,
  getTopRatedMovies,
  searchMovies,
  getMovieDetails,
  getMovieVideos,
};

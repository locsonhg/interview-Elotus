import { useQuery } from "@tanstack/react-query";
import movieService from "../movieService";
import { MovieResponse, ParamsNowPlaying } from "../movie.interface";

export const useGetNowPlayingMovie = (params: ParamsNowPlaying) => {
  return useQuery<MovieResponse>({
    queryKey: ["movies", "now-playing", params],
    queryFn: async () => {
      const response = await movieService.getNowPlayingMovies(params);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });
};

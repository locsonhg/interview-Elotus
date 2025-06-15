import { useQuery } from "@tanstack/react-query";
import movieService from "../movieService";
import { MovieResponse, ParamsSearchMovie } from "../movie.interface";

export const useGetSearchMovie = (params: ParamsSearchMovie) => {
  return useQuery<MovieResponse>({
    queryKey: ["searchMovie", params],
    queryFn: async () => {
      const response = await movieService.searchMovies(params);
      return response.data;
    },
    enabled: !!params.query,
  });
};

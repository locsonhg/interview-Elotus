import { useQuery } from "@tanstack/react-query";
import movieService from "../movieService";
import { MovieResponse, ParamsTopRated } from "../movie.interface";

export const useGetTopRated = (params: ParamsTopRated) => {
  return useQuery<MovieResponse>({
    queryKey: ["movies", "top-rated", params],
    queryFn: async () => {
      const response = await movieService.getTopRatedMovies(params);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });
};

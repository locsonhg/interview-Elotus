import { useQuery } from "@tanstack/react-query";
import movieService from "../movieService";
import { Movie, ParamsMovieDetails } from "../movie.interface";

export const useGetDetailMovie = (params: ParamsMovieDetails) => {
  return useQuery<Movie>({
    queryKey: ["detailMovie", params.movie_id],
    queryFn: async () => {
      const response = await movieService.getMovieDetails(params);
      return response.data;
    },
    enabled: !!params.movie_id,
  });
};

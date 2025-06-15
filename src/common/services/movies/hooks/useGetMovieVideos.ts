import { useQuery } from "@tanstack/react-query";
import movieService from "../movieService";
import { MovieVideoResponse, ParamsMovieDetails } from "../movie.interface";

export const useGetMovieVideos = (params: ParamsMovieDetails) => {
  return useQuery<MovieVideoResponse>({
    queryKey: ["movieVideos", params.movie_id],
    queryFn: async () => {
      const response = await movieService.getMovieVideos(params);
      return response.data;
    },
    enabled: !!params.movie_id,
  });
};

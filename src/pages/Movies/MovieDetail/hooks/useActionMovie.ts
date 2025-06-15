import { useGetDetailMovie } from "@/common/services/movies/hooks/useGetDetailMovie";
import { useGetMovieVideos } from "@/common/services/movies/hooks/useGetMovieVideos";
import { useParams } from "react-router-dom";

const useActionMovie = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: movie,
    isLoading: isLoadingDetailMovie,
    isError: isErrorDetailMovie,
  } = useGetDetailMovie({
    movie_id: Number(id) || 0,
  });

  const {
    data: videos,
    isLoading: isLoadingVideos,
    isError: isErrorVideos,
  } = useGetMovieVideos({
    movie_id: Number(id) || 0,
  });

  return {
    movie,
    videos,
    isLoading: [isLoadingDetailMovie, isLoadingVideos].some(Boolean),
    isError: [isErrorDetailMovie, isErrorVideos].some(Boolean),
  };
};

export default useActionMovie;

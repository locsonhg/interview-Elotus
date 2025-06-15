import { useSearchParams } from "react-router-dom";
import MovieListContainer from "@/common/components/Movies/MovieListContainer";
import { useGetSearchMovie } from "@/common/services/movies/hooks/useGetSearchMovie";

const MovieSearchScreen = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const useSearchHook = ({ page }: { page: number }) => {
    return useGetSearchMovie({ query, page });
  };

  return (
    <MovieListContainer
      title={`Search results for "${query}"`}
      useQueryHook={useSearchHook}
      mode="grid"
    />
  );
};

export default MovieSearchScreen;

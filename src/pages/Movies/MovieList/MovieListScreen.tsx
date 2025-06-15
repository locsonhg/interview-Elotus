import MovieListContainer from "@/common/components/Movies/MovieListContainer";
import { EnumTypeMovie } from "@/common/enums/enumTypeMovie";
import { Movie } from "@/common/services/movies/movie.interface";

interface MovieListScreenProps {
  title: EnumTypeMovie;
  useQueryHook: (params: { page: number }) => {
    data?: { results: Movie[]; total_pages?: number };
    isLoading: boolean;
  };
}

const MovieListScreen = (props: MovieListScreenProps) => {
  const { useQueryHook, title } = props;
  return (
    <MovieListContainer
      key={title}
      title={title}
      useQueryHook={useQueryHook}
      mode="grid"
    />
  );
};

export default MovieListScreen;

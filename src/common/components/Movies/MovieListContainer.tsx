import React, { useState } from "react";
import LoadingWrapper from "../Wrapper/LoadingWrapper";
import { Movie } from "@/common/services/movies/movie.interface";
import MovieListSlider from "./MovieListSlider";
import MovieListGridWithPagination from "./MovieListGridWithPagination";

interface MovieListContainerProps {
  title: string;
  useQueryHook: (params: { page: number }) => {
    data?: { results: Movie[]; total_pages?: number };
    isLoading: boolean;
  };
  mode?: "slider" | "grid";
}

const MovieListContainer: React.FC<MovieListContainerProps> = ({
  title,
  useQueryHook,
  mode = "slider",
}) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQueryHook({ page });

  const movies = data?.results || [];
  const totalPages = data?.total_pages || 1;

  return (
    <LoadingWrapper loading={isLoading}>
      {mode === "slider" ? (
        <MovieListSlider title={title} movies={movies} />
      ) : (
        <MovieListGridWithPagination
          title={title}
          movies={movies}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </LoadingWrapper>
  );
};

export default MovieListContainer;

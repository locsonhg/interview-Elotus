import React from "react";
import { Movie } from "@/common/services/movies/movie.interface";
import MovieCard from "./MovieCard";
import "@/common/styles/movieListGridWithPagination.scss";

interface MovieListGridWithPaginationProps {
  title: string;
  movies: Movie[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const MovieListGridWithPagination: React.FC<
  MovieListGridWithPaginationProps
> = ({ title, movies, page, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <div className="movie-grid-container">
      <h2 className="movie-grid-title">{title}</h2>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={handlePrev} disabled={page === 1}>
          &#8592; Prev
        </button>
        <span>
          Page <strong>{page}</strong> / {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages}>
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default MovieListGridWithPagination;

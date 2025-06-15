import React, { useRef } from "react";
import "@/common/styles/movieList.scss";
import MovieCard from "./MovieCard";
import { Movie } from "@/common/services/movies/movie.interface";

interface MovieListSliderProps {
  title: string;
  movies: Movie[];
}

const MovieListSlider: React.FC<MovieListSliderProps> = ({ title, movies }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!movies || movies.length === 0) return null;

  return (
    <div className="movie-list-wrapper">
      <h2 className="movie-list-title">{title}</h2>
      <div className="movie-slider-container">
        <button className="scroll-button left" onClick={() => scroll("left")}>
          &#8249;
        </button>
        <div className="movie-slider" ref={sliderRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-slide-item">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default MovieListSlider;

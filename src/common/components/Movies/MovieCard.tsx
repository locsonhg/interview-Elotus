import React from "react";
import "@/common/styles/movieCard.scss";
import LazyImage from "../LazyImage";
import { Movie } from "@/common/services/movies/movie.interface";
import { useNavigate } from "react-router-dom";
import { TMDBLink } from "@/common/configs/tmdbLink";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (movie.id) {
      navigate(`/movie/${movie.id}`);
    }
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      {movie.poster_path ? (
        <LazyImage
          src={`${TMDBLink.imageW300}${movie.poster_path}`}
          alt={movie.title}
          width="100%"
          height="auto"
          className="movie-card-img"
        />
      ) : (
        <div className="movie-card-img movie-card-placeholder">No Image</div>
      )}
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-rating">⭐ {movie.vote_average}</p>
        {movie.adult && <span className="movie-card-adult">18+</span>}
      </div>
    </div>
  );
};

export default MovieCard;

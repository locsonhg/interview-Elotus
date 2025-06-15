import { Movie } from "@/common/services/movies/movie.interface";
import React, { useEffect } from "react";
import "../styles/MovieInfor.scss";
import { TMDBLink } from "@/common/configs/tmdbLink";

interface MovieInforProps {
  movie: Movie;
}

const MovieInfor = (props: MovieInforProps) => {
  const { movie } = props;

  console.log(movie);

  useEffect(() => {
    document.title = movie?.title || "Movie Details";
    const layoutMain = document.querySelector(".layout-main") as HTMLElement;
    if (layoutMain) {
      layoutMain.style.padding = "0";
    }
    return () => {
      const layoutMain = document.querySelector(".layout-main") as HTMLElement;
      if (layoutMain) {
        layoutMain.style.padding = "20px";
      }
    };
  }, []);

  // Helper function to format runtime
  const formatRuntime = (minutes: number) => {
    if (!minutes) return "Updating";
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  // Helper function to get year from release date
  const getYear = (dateString: string) => {
    if (!dateString) return "Updating";
    return new Date(dateString).getFullYear();
  };

  // Helper function to format vote average
  const formatRating = (rating: number) => {
    if (!rating) return "0.0";
    return rating.toFixed(1);
  };

  return (
    <div className="focus-content">
      <div className="focus-wrapper">
        {/* Background Image */}
        <div className="focus-img-link">
          {movie?.backdrop_path && (
            <img
              src={`${TMDBLink.imageW1280}${movie?.backdrop_path}`}
              alt={movie.title || "Movie poster"}
            />
          )}
        </div>

        {/* Content Overlay */}
        <div className="content-overlay">
          <div className="movie-detail-content">
            <h1 className="movie-title">{movie?.title || "Updating..."}</h1>

            <div className="movie-tags">
              <span className="tag top1">TOP 1</span>
              {movie.vote_average && movie?.vote_average >= 8 && (
                <span className="tag vip">VIP</span>
              )}
            </div>

            <div className="movie-rating">
              <span className="star">★</span>
              <span className="score">{formatRating(movie.vote_average)}</span>
              <span className="divider">|</span>
              <span>T13</span>
              <span className="divider">|</span>
              <span>{getYear(movie.release_date)}</span>
              <span className="divider">|</span>
              <span>{formatRuntime(movie.runtime)}</span>
            </div>

            <div className="movie-genres">
              {movie.production_countries &&
                movie.production_countries.map((country, index) => (
                  <span key={index}>{country.name}</span>
                ))}
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span>
                ))}
            </div>

            <div className="movie-vip">
              <button className="vip-btn">
                <span>👑</span> First month $2.99
              </button>
            </div>

            <div className="movie-info">
              <div className="movie-info-row">
                <strong>Director:</strong>
                {movie.production_companies &&
                movie.production_companies.length > 0
                  ? movie.production_companies[0].name
                  : "Updating..."}
              </div>

              <div className="movie-info-row">
                <strong>Main cast:</strong> Updating...
              </div>

              <div className={`movie-desc`}>
                <strong>Description:</strong>
                {movie.overview || "No description"}
              </div>
            </div>

            <div className="movie-actions">
              <button className="play-btn">
                <span>▶</span> Play
              </button>
              <button className="share-btn">
                <span>🔗</span> Share
              </button>
              <button className="save-btn">
                <span>♡</span> Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfor;

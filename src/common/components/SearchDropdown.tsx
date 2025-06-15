// components/SearchDropdown.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "@/common/services/movies/movie.interface";
import { TMDBLink } from "../configs/tmdbLink";

interface SearchDropdownProps {
  movies: Movie[];
  query: string;
  onClose: () => void;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  movies,
  query,
  onClose,
}) => {
  const navigate = useNavigate();

  const handleSeeAll = () => {
    navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    onClose();
  };

  const handleClickMovie = (id: number) => {
    navigate(`/movie/${id}`);
    onClose();
  };

  return (
    <div className="search-dropdown">
      <ul>
        {movies.slice(0, 5).map((movie) => (
          <li
            key={movie.id}
            className="search-item"
            onClick={() => handleClickMovie(movie.id)}
          >
            <img
              src={
                movie.poster_path
                  ? `${TMDBLink.imageW92}${movie.poster_path}`
                  : "/no-image.png"
              }
              alt={movie.title}
            />
            <div className="search-item-info">
              <div className="title">{movie.title}</div>
              <div className="year">
                {movie.release_date?.slice(0, 4) ?? "N/A"}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {movies.length > 5 && (
        <button className="see-all-btn" onClick={handleSeeAll}>
          See all results →
        </button>
      )}
    </div>
  );
};

export default SearchDropdown;

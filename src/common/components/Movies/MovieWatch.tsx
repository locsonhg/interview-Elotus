import React from "react";
import "../styles/movieWatch.scss";

interface MovieWatchProps {
  videoKey: string; // VD: YouTube video key
  title?: string;
}

const MovieWatch: React.FC<MovieWatchProps> = ({ videoKey, title }) => {
  const src = `https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`;

  return (
    <div className="movie-watch">
      {title && <h2 className="movie-watch-title">{title}</h2>}

      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title || "Video player"}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default MovieWatch;

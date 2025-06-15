import React, { useState, useEffect, useRef, useCallback } from "react";
import { MovieVideo } from "@/common/services/movies/movie.interface";
import "../styles/MovieTrailerList.scss";

interface MovieTrailerListProps {
  videos: MovieVideo[];
}

interface VideoModalProps {
  videoKey: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  videoKey,
  isOpen,
  onClose,
  title,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-header">
          <h3>{title}</h3>
          <button className="video-modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const MovieTrailerList: React.FC<MovieTrailerListProps> = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 10;

  // Filter for trailers and teasers only
  const trailers =
    videos?.filter(
      (video) =>
        video.type === "Trailer" ||
        video.type === "Teaser" ||
        video.type === "Clip"
    ) || [];

  // Get currently visible trailers
  const visibleTrailers = trailers.slice(0, visibleCount);
  const hasMore = visibleCount < trailers.length;

  const loadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, trailers.length));
    setIsLoadingMore(false);
  }, [isLoadingMore, hasMore, trailers.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, isLoadingMore, loadMore]);

  if (!trailers || trailers.length === 0) {
    return null;
  }

  const handleVideoClick = (videoKey: string, title: string) => {
    setSelectedVideo(videoKey);
    setSelectedTitle(title);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setSelectedTitle("");
  };

  const getYoutubeThumbnail = (videoKey: string) => {
    return `https://img.youtube.com/vi/${videoKey}/hqdefault.jpg`;
  };

  return (
    <div className="movie-trailer-section">
      <div className="trailer-section-header">
        <h2>Trailers & Videos</h2>
        <span className="trailer-count">
          Showing {visibleTrailers.length} of {trailers.length} videos
        </span>
      </div>

      <div className="trailer-list">
        {visibleTrailers.map((video, index) => (
          <div
            key={video.id || index}
            className="trailer-item"
            onClick={() => handleVideoClick(video.key, video.name)}
          >
            <div className="trailer-thumbnail">
              <img
                src={getYoutubeThumbnail(video.key)}
                alt={video.name}
                loading="lazy"
              />
              <div className="play-overlay">
                <div className="play-button">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="video-duration">{video.type}</div>
            </div>

            <div className="trailer-info">
              <h3 className="trailer-title">{video.name}</h3>
              <div className="trailer-meta">
                <span className="video-type">{video.type}</span>
                {video.published_at && (
                  <span className="video-date">
                    {new Date(video.published_at).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Scroll Trigger & Loading Indicator */}
      {hasMore && (
        <div ref={loadMoreRef} className="infinite-scroll-trigger">
          {isLoadingMore && (
            <div className="loading-more-container">
              <div className="loading-spinner"></div>
              <span>Loading more videos...</span>
            </div>
          )}
        </div>
      )}

      {/* End of videos indicator */}
      {!hasMore && trailers.length > 10 && (
        <div className="end-of-videos">
          <span>You've reached the end of videos</span>
        </div>
      )}

      <VideoModal
        videoKey={selectedVideo || ""}
        isOpen={!!selectedVideo}
        onClose={closeModal}
        title={selectedTitle}
      />
    </div>
  );
};

export default MovieTrailerList;

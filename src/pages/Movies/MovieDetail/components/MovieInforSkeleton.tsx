import React from "react";
import "../styles/MovieInforSkeleton.scss";

const MovieInforSkeleton = () => {
  return (
    <div className="focus-content">
      <div className="focus-wrapper">
        {/* Background Image Skeleton */}
        <div className="focus-img-link skeleton-bg">
          <div className="skeleton-shimmer"></div>
        </div>

        {/* Content overlay */}
        <div className="content-overlay">
          <div className="movie-detail-content">
            {/* Title Skeleton */}
            <div className="skeleton-title"></div>
            {/* Tags Skeleton */}
            <div className="skeleton-tags">
              <div className="skeleton-tag skeleton-tag-small"></div>
              <div className="skeleton-tag skeleton-tag-small"></div>
            </div>
            {/* Genres Skeleton */}
            <div className="skeleton-genres">
              <div className="skeleton-genre"></div>
              <div className="skeleton-genre"></div>
              <div className="skeleton-genre"></div>
              <div className="skeleton-genre"></div>
            </div>
            {/* VIP Button Skeleton */}
            <div className="skeleton-vip">
              <div className="skeleton-vip-btn"></div>
            </div>
            {/* Info Skeleton */}
            <div className="skeleton-info">
              <div className="skeleton-info-row">
                <div className="skeleton-line skeleton-line-medium"></div>
              </div>
              <div className="skeleton-info-row">
                <div className="skeleton-line skeleton-line-medium"></div>
              </div>
              <div className="skeleton-info-row">
                <div className="skeleton-line skeleton-line-long"></div>
                <div className="skeleton-line skeleton-line-long"></div>
                <div className="skeleton-line skeleton-line-short"></div>
              </div>
            </div>
            {/* Actions Skeleton */}
            <div className="skeleton-actions">
              <div className="skeleton-btn skeleton-btn-primary"></div>
              <div className="skeleton-btn skeleton-btn-secondary"></div>
              <div className="skeleton-btn skeleton-btn-secondary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInforSkeleton;

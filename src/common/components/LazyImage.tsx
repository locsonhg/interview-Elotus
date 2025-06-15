import React, { useState } from "react";
import "../styles/image.scss";
import type { LazyImageProps } from "../types/ImageType";

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt = "",
  className = "",
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="lazy-image-wrapper">
      {!loaded && <div className="lazy-image-skeleton" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`lazy-image ${className} ${loaded ? "loaded" : ""}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;

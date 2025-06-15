import "../styles/skeleton.scss";

const Skeleton = () => {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 12 }).map((_, idx) => (
        <div key={idx} className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-title" />
          <div className="skeleton-rating" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;

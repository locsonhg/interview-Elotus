import "@/common/styles/movieDetail.scss";
import useActionMovie from "./hooks/useActionMovie";
import MovieInfor from "./components/MovieInfor";
import MovieInforSkeleton from "./components/MovieInforSkeleton";
import MovieTrailerList from "./components/MovieTrailerList";
import "./styles/MovieDetailScreen.scss";

const WatchMovieScreen = () => {
  const { movie, videos, isError, isLoading } = useActionMovie();

  // Show skeleton while loading
  if (isLoading) {
    return <MovieInforSkeleton />;
  }

  // Show error state if needed
  if (isError) {
    return (
      <div className="error-container">
        <h2>Error loading movie details</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  const renderMovieTrailer = () => {
    if (videos && videos?.results && videos?.results?.length) {
      return <MovieTrailerList videos={videos?.results} />;
    }
  };

  return (
    <>
      <MovieInfor movie={movie} />
      {renderMovieTrailer()}
    </>
  );
};

export default WatchMovieScreen;

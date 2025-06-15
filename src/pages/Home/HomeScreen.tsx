import MovieListContainer from "@/common/components/Movies/MovieListContainer";
import { useGetNowPlayingMovie } from "@/common/services/movies/hooks/useGetNowPlayingMovie";
import { useGetTopRated } from "@/common/services/movies/hooks/useGetTopRated";

const HomeScreen = () => {
  return (
    <>
      <MovieListContainer
        title="Now Playing"
        useQueryHook={useGetNowPlayingMovie}
        mode="slider"
      />
      <MovieListContainer
        title="Top Rated"
        useQueryHook={useGetTopRated}
        mode="slider"
      />
    </>
  );
};

export default HomeScreen;

// src/router/index.tsx
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import BaseLayout from "@/common/layouts/BaseLayout";
import { useGetNowPlayingMovie } from "../services/movies/hooks/useGetNowPlayingMovie";
import { useGetTopRated } from "../services/movies/hooks/useGetTopRated";
import { ENUM_TYPE_MOVIE } from "../enums/enumTypeMovie";

// Lazy-loaded pages
const HomePage = lazy(() => import("@/pages/Home/HomeScreen"));
const MovieDetailPage = lazy(
  () => import("@/pages/Movies/MovieDetail/MovieDetailScreen")
);
const MovieListScreen = lazy(
  () => import("@/pages/Movies/MovieList/MovieListScreen")
);
const MovieSearchScreen = lazy(
  () => import("@/pages/Movies/MovieSearchList/MovieSearchList")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "now-playing",
        element: (
          <MovieListScreen
            title={ENUM_TYPE_MOVIE.NOW_PLAYING}
            useQueryHook={useGetNowPlayingMovie}
          />
        ),
      },
      {
        path: "top-rated",
        element: (
          <MovieListScreen
            title={ENUM_TYPE_MOVIE.TOP_RATED}
            useQueryHook={useGetTopRated}
          />
        ),
      },
      {
        path: "search",
        element: <MovieSearchScreen />,
      },
      {
        path: "movie/:id",
        element: <MovieDetailPage />,
      },
    ],
  },
]);

export const ENUM_TYPE_MOVIE = {
  NOW_PLAYING: "Now playing",
  TOP_RATED: "Top Rated",
};

export type EnumTypeMovie =
  (typeof ENUM_TYPE_MOVIE)[keyof typeof ENUM_TYPE_MOVIE];

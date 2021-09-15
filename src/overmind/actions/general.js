export const setInitializing = async (
  { state, effects, actions },
  isInitializing
) => {
  state.initializing = isInitializing;
};

export const getHotelsRecommend = async ({ state, effects, actions }) => {
  state.recommendLoading = true;
  state.recommend = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "distance"
  );
  state.recommendLoading = false;
};

export const getHotelsPopular = async ({ state, effects, actions }) => {
  state.popularLoading = true;
  state.popular = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "prominence"
  );
  state.popularLoading = false;
};

export const getHotelsTrending = async ({ state, effects, actions }) => {
  state.trendingLoading = true;
  state.trending = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "prominence",
    5000
  );
  state.trendingLoading = false;
};
export const setDetails = async ({ state, effects, actions }, details) => {
  state.details = details;
};

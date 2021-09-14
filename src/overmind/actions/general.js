export const setInitializing = async (
  { state, effects, actions },
  isInitializing
) => {
  state.initializing = isInitializing;
};

export const getHotelsRecommend = async ({ state, effects, actions }) => {
  state.recommend = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "distance"
  );
};

export const getHotelsPopular = async ({ state, effects, actions }) => {
  state.popular = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "prominence"
  );
};

export const getHotelsTrending = async ({ state, effects, actions }) => {
  state.trending = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "prominence",
    5000
  );
};
export const setDetails = async ({ state, effects, actions }, details) => {
  state.details = details;
};

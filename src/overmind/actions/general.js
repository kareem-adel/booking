export const setInitializing = async (
  { state, effects, actions },
  isInitializing
) => {
  state.initializing = isInitializing;
};

export const getHotelsRecommend = async ({ state, effects, actions }) => {
  state.recommendLoading = true;
  const ret = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "distance",
    state.recommendNextToken
  );
  state.recommend.push(...ret.hotels);
  state.recommendNextToken = ret.nextToken;
  state.recommendLoading = false;
};

export const getHotelsPopular = async ({ state, effects, actions }) => {
  state.popularLoading = true;
  const ret = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "prominence",
    state.popularNextToken
  );
  state.popular.push(...ret.hotels);
  state.popularNextToken = ret.nextToken;
  state.popularLoading = false;
};

export const getHotelsTrending = async ({ state, effects, actions }) => {
  state.trendingLoading = true;
  const ret = await effects.api.getHotels(
    state.location?.coords?.latitude,
    state.location?.coords?.longitude,
    "prominence",
    state.trendingNextToken,
    5000
  );
  state.trending.push(...ret.hotels);
  state.trendingNextToken = ret.nextToken;
  state.trendingLoading = false;
};
export const setDetails = async ({ state, effects, actions }, details) => {
  state.details = details;
};

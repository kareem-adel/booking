export const setUser = async ({ state, effects, actions }, user) => {
  state.user = user;
};

export const setLocation = async ({ state, effects, actions }, location) => {
  state.location = location;
};
export const signOut = async ({ state, effects, actions }) => {
  return effects.api.signOut();
};

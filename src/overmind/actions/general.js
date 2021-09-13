export const action = async ({ state, effects, actions }) => {
    //change state state.property = value
    //call api await effects.api.endpoint()
}

export const setUser = async ({ state, effects, actions }, user) => {
    state.user = user;
}

export const setInitializing = async ({ state, effects, actions }, isInitializing) => {
    state.initializing = isInitializing;
}
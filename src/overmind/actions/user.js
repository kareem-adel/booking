import Toast from "react-native-toast-message";
import { rehydrate } from "overmind";
import * as initialState from "../state";
const { initializing, ...filteredInitialState } = initialState.state;

export const setUser = async ({ state, effects, actions }, user) => {
  state.user = user;
};

export const setLocation = async ({ state, effects, actions }, location) => {
  state.location = location;
};

export const signOut = async ({ state, effects, actions }) => {
  return effects.api.signOut().then(
    () => {
      Toast.show({
        type: "success",
        text1: "Good bye !",
        visibilityTime: 4000,
      });
      rehydrate(state, filteredInitialState);
    },
    (error) => {
      Toast.show({
        type: "error",
        text1: error,
      });
    }
  );
};

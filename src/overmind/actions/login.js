import Toast from "react-native-toast-message";

export const login = async (
  { state, effects, actions },
  { email, password }
) => {
  state.login.loading = true;
  const ret = await effects.api.login(email, password);
  state.login.loading = false;
  if (ret === "") {
    Toast.show({
      type: "success",
      text1: "Welcome back",
      visibilityTime: 4000,
    });
  } else {
    Toast.show({
      type: "error",
      text1: ret,
    });
  }
  return ret;
};
export const setLoginEmailusernameError = async (
  { state, effects, actions },
  emailusernameError
) => {
  state.login.emailusernameError = emailusernameError;
};
export const setLoginEmailusername = async (
  { state, effects, actions },
  emailusername
) => {
  state.login.emailusername = emailusername;
};
export const setLoginPasswordError = async (
  { state, effects, actions },
  passwordError
) => {
  state.login.passwordError = passwordError;
};
export const setLoginPassword = async (
  { state, effects, actions },
  password
) => {
  state.login.password = password;
};
export const toggleLoginPassword = async ({ state, effects, actions }) => {
  state.login.secureTextEntry = !state.login.secureTextEntry;
};

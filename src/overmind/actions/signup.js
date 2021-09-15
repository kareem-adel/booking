import Toast from "react-native-toast-message";

export const signup = async ({ state, effects, actions }, {email, password}) => {
  state.signup.loading = true;
  const ret = await effects.api.signup(email, password);
  state.signup.loading = false;
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
export const setSignupUsernameError = async (
  { state, effects, actions },
  usernameError
) => {
  state.signup.usernameError = usernameError;
};
export const setSignupUsername = async (
  { state, effects, actions },
  username
) => {
  state.signup.username = username;
};
export const setSignupEmailError = async (
  { state, effects, actions },
  emailError
) => {
  state.signup.emailError = emailError;
};
export const setSignupEmail= async (
  { state, effects, actions },
  email
) => {
  state.signup.email = email;
};
export const setSignupPasswordError = async (
  { state, effects, actions },
  passwordError
) => {
  state.signup.passwordError = passwordError;
};
export const setSignupPassword = async (
  { state, effects, actions },
  password
) => {
  state.signup.password = password;
};
export const toggleSignupPassword = async ({ state, effects, actions }) => {
  state.signup.secureTextEntry = !state.signup.secureTextEntry;
};

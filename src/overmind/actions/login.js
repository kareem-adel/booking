export const login = async ({ state, effects, actions }, {email, password}) => {
  return effects.api.login(email, password);
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

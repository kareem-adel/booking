export const usernameValidation = (username) => {
  if (username.length < 3) {
    return "Needs to be 3 characters or longer";
  }
  return "";
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
export const emailValidation = (email) => {
  if (!validateEmail(email)) {
    return "Invalid email format";
  }
  return "";
};
export const passwordValidation = (password) => {
  if (password.length < 8) {
    return "Needs to be 8 characters or longer";
  }
  return "";
};

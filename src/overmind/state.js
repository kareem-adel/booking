import { derived } from "overmind";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../Utils/Validation";

export const state = {
  initializing: true,
  user: null,
  login: {
    emailusername: "",
    emailusernameError: "",
    password: "",
    passwordError: "",
    secureTextEntry: true,
    loginButtonEnabled: derived((state, rootState) => {
      return (
        usernameValidation(state.emailusername) === "" &&
        passwordValidation(state.password) === ""
      );
    }),
  },
  signup: {
    username: "",
    usernameError: "",
    email: "",
    emailError: "",
    password: "",
    passwordError: "",
    secureTextEntry: true,
    signupButtonEnabled: derived((state, rootState) => {
      return (
        usernameValidation(state.username) === "" &&
        emailValidation(state.email) === "" &&
        passwordValidation(state.password) === ""
      );
    }),
  },
};

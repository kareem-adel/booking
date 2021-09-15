import { derived } from "overmind";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../Utils/Validation";

export const state = {
  initializing: true,
  user: null,
  location: null,
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
    loading: false,
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
    loading: false,
  },
  recommend: [],
  recommendLoading: false,
  popular: [],
  popularLoading: false,
  trending: [],
  trendingLoading: false,
  details: {},
  bookModal: {
    mode: "booking",
    visible: false,
    checkIn: "",
    checkOut: "",
    continueButtonEnabled: derived((state, rootState) => {
      return state.checkIn !== "" && state.checkOut !== "";
    }),
    loading: false,
  },
  myBookings:[],
  myBookingsLoading: false,
};

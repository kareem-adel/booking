import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import auth from "@react-native-firebase/auth";
import CText from "../../components/CText";
import SInput from "../../components/SInput";
import { useActions, useState } from "../../overmind";
import {
  emailValidation,
  passwordValidation,
  usernameValidation,
} from "../../Utils/Validation";

const Signup = () => {
  const actions = useActions();
  const state = useState();

  const signup = async (email, password) => {
    if (email.indexOf("@") < 0) {
      email += "@mail.com";
    }
    return actions.signup({ email, password });
  };
  return (
    <View style={{ flex: 1, marginLeft: 25, marginRight: 25 }}>
      <View style={{ height: 32 }}></View>
      <CText>Username</CText>
      <SInput
        //autoFocus={true}
        validation={(input) => {
          actions.setSignupUsernameError(usernameValidation(input));
        }}
        error={state.signup.usernameError}
        updateState={(text) => {
          actions.setSignupUsername(text);
          //whenever the input is correct remove error
          var validation = usernameValidation(text);
          if (validation === "") {
            actions.setSignupUsernameError("");
          }
        }}
        containerStyle={{ marginTop: 16 }}
        placeholder={"Insert username"}
        value={state.signup.username}
      ></SInput>

      <View style={{ height: 31 }}></View>

      <CText>E-mail</CText>
      <SInput
        validation={(input) => {
          actions.setSignupEmailError(emailValidation(input));
        }}
        error={state.signup.emailError}
        updateState={(text) => {
          actions.setSignupEmail(text);
          //whenever the input is correct remove error
          var validation = usernameValidation(text);
          if (validation === "") {
            actions.setSignupEmailError("");
          }
        }}
        containerStyle={{ marginTop: 16 }}
        placeholder={"Insert E-mail"}
        value={state.signup.email}
      ></SInput>

      <View style={{ height: 31 }}></View>

      <CText>Password</CText>
      <SInput
        validation={(input) => {
          actions.setSignupPasswordError(passwordValidation(input));
        }}
        error={state.signup.passwordError}
        updateState={(text) => {
          //whenever the input is correct remove error
          actions.setSignupPassword(text);
          var validation = passwordValidation(text);
          if (validation === "") {
            actions.setSignupPasswordError("");
          }
        }}
        isPassword={true}
        togglePassword={actions.toggleSignupPassword}
        containerStyle={{ marginTop: 16 }}
        secureTextEntry={state.signup.secureTextEntry}
        placeholder={"Insert password"}
        value={state.signup.password}
      ></SInput>

      <View style={{ height: 30 }}></View>

      <TouchableOpacity
        disabled={!state.signup.signupButtonEnabled || state.signup.loading}
        style={{
          ...styles.button,
          backgroundColor:
            state.signup.signupButtonEnabled && !state.signup.loading
              ? "#00A76E"
              : "grey",
        }}
        onPress={() => {
          signup(state.signup.email, state.signup.password).then(
            (ret) => {
              console.log({ ret });
            },
            (error) => {
              console.log({ error });
            }
          );
        }}
      >
        {state.signup.loading && (
          <ActivityIndicator size="small" color="#FFFFFF" />
        )}
        {!state.signup.loading && (
          <CText style={styles.buttonText}>{`Sign Up`}</CText>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  button: {
    marginTop: 29,
    backgroundColor: "#00A76E",
    padding: 16,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 25,
    fontSize: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

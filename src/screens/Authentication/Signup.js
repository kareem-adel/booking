import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import auth from "@react-native-firebase/auth";
import CText from "../../components/CText";
import SInput from "../../components/SInput";
import { useActions, useState } from "../../overmind";
import { emailValidation, passwordValidation, usernameValidation } from "../../Utils/Validation";

const Signup = () => {
  const actions = useActions();
  const state = useState();

  const signup = async (email, password) => {
    if (email.indexOf("@") < 0) {
      email += "@mail.com";
    }
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        return "";
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
          return "That email address is already in use!";
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          return "That email address is invalid!";
        }

        console.error(error);
        return error;
      });
  };
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={{ flex: 1, marginLeft: 25, marginRight: 25 }}>
        <View style={{ height: 32 }}></View>
        <CText>Username</CText>
        <SInput
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
          disabled={!state.signup.signupButtonEnabled}
          style={{
            ...styles.button,
            backgroundColor: state.signup.signupButtonEnabled
              ? "#00A76E"
              : "grey",
          }}
          onPress={() => {
            signup(state.signup.email, state.signup.password).then(
              (ret) => {
                console.log({ ret });
                if (ret !== "") {
                  Alert.alert("Login error", ret, [
                    {
                      text: "ok",
                    },
                  ]);
                }
              },
              (error) => {
                console.log({ error });
              }
            );
          }}
        >
          <CText style={styles.buttonText}>{`Sign Up`}</CText>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

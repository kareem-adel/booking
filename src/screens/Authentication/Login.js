import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert } from "react-native";

import CText from "../../components/CText";
import SInput from "../../components/SInput";
import { useActions, useState } from "../../overmind";
import { passwordValidation, usernameValidation } from "../../Utils/Validation";

const Login = () => {
  const actions = useActions();
  const state = useState();

  const login = async (email, password) => {
    if (email.indexOf("@") < 0) {
      email += "@mail.com";
    }
    return actions.login({email, password});
  };
  return (
    <View style={{ flex: 1, marginLeft: 25, marginRight: 25 }}>
      <View style={{ height: 32 }}></View>
      <CText>Username or E-mail</CText>
      <SInput
        validation={(input) => {
          actions.setLoginEmailusernameError(usernameValidation(input));
        }}
        error={state.login.emailusernameError}
        updateState={(text) => {
          actions.setLoginEmailusername(text);
          //whenever the input is correct remove error
          var validation = usernameValidation(text);
          if (validation === "") {
            actions.setLoginEmailusernameError("");
          }
        }}
        containerStyle={{ marginTop: 16 }}
        placeholder={"Insert username or E-mail"}
        value={state.login.emailusername}
      ></SInput>

      <View style={{ height: 31 }}></View>

      <CText>Password</CText>
      <SInput
        validation={(input) => {
          actions.setLoginPasswordError(passwordValidation(input));
        }}
        error={state.login.passwordError}
        updateState={(text) => {
          //whenever the input is correct remove error
          actions.setLoginPassword(text);
          var validation = passwordValidation(text);
          if (validation === "") {
            actions.setLoginPasswordError("");
          }
        }}
        isPassword={true}
        togglePassword={actions.toggleLoginPassword}
        containerStyle={{ marginTop: 16 }}
        secureTextEntry={state.login.secureTextEntry}
        placeholder={"Insert password"}
        value={state.login.password}
      ></SInput>

      <View style={{ height: 30 }}></View>

      <TouchableOpacity style={{ alignSelf: "flex-end" }}>
        <CText>Forgot Password?</CText>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!state.login.loginButtonEnabled}
        style={{
          ...styles.button,
          backgroundColor: state.login.loginButtonEnabled ? "#00A76E" : "grey",
        }}
        onPress={() => {
          login(state.login.emailusername, state.login.password).then(
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
        <CText style={styles.buttonText}>{`Login`}</CText>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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

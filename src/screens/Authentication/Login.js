import React from "react";
import { StyleSheet, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";

const Login = () => {
  const login = async (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        return true;
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          return "auth/invalid-email";
        }

        if (error.code === "auth/user-not-found") {
          console.log("User was not found!");
          return "auth/user-not-found";
        }

        if (error.code === "auth/user-disabled") {
          console.log("User account is disabled!");
          return "auth/user-disabled";
        }

        if (error.code === "auth/wrong-password") {
          console.log("Wrong password!");
          return "auth/wrong-password";
        }

        console.error(error);
        return error;
      });
  };
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});

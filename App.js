import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import RootNavigation from "./src/navigation/RootNavigation";
import { config } from "./src/overmind";
import { DefaultTheme } from "@react-navigation/native";

const overmind = createOvermind(config);

export default function App() {
  return (
    <Provider value={overmind}>
      <StatusBar barStyle={"dark-content"} backgroundColor={DefaultTheme.colors.background} />
      <RootNavigation></RootNavigation>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

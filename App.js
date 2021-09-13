import React from "react";
import { StyleSheet } from "react-native";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigation/RootNavigation";
import { config } from "./src/overmind";

const overmind = createOvermind(config);

export default function App() {
  return (
    <Provider value={overmind}>
      <RootNavigation></RootNavigation>
      <StatusBar style="auto" />
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

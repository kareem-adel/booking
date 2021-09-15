import React from "react";
import { StyleSheet, Text, View, useWindowDimensions, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "./Login";
import Signup from "./Signup";
import Icon from "../../../assets/icon.svg";

const Tab = createMaterialTopTabNavigator();

const AuthenticationMain = () => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      contentContainerStyle={{ minHeight: Math.max(width, height) }}
    >
      <View style={{ flex: 1 }}>
        <Icon style={styles.icon} width={60} height={60}></Icon>
        <Tab.Navigator
          screenOptions={{
            swipeEnabled: false,
            tabBarIndicatorStyle: { backgroundColor: "#00A76E", height: 3 },
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: 16,
            },
            tabBarStyle: {
              elevation: 0,
              height: 60,
              justifyContent: "center",
            },
          }}
        >
          <Tab.Screen
            name="Login"
            component={Login}
            options={{ tabBarLabel: "Log In" }}
          />
          <Tab.Screen
            name="Signup"
            component={Signup}
            options={{ tabBarLabel: "Sign Up" }}
          />
        </Tab.Navigator>
      </View>
    </ScrollView>
  );
};

export default AuthenticationMain;

const styles = StyleSheet.create({
  icon: { alignSelf: "center", marginTop: 50, marginBottom: 40 },
});

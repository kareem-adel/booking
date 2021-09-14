import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "./Login";
import Signup from "./Signup";
import Icon from "../../../assets/icon.svg";

const Tab = createMaterialTopTabNavigator();

const AuthenticationMain = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1}}>

        <Icon style={styles.icon} width={60} height={60}></Icon>
        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: { backgroundColor: "#00A76E", height: 3 },
            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: 16,
            },
            tabBarStyle: { elevation: 0, height: 60, justifyContent: "center" },
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

import React, { useEffect } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import * as Location from "expo-location";
import { useActions, useState } from "../overmind";
import { LocationAccuracy } from "expo-location";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView } from "react-native-gesture-handler";
import CText from "../components/CText";
import Recommended from "./Home/Recommend";
import Trending from "./Home/Trending";
import { DefaultTheme } from "@react-navigation/native";
import Recommend from "./Home/Recommend";
import Award from "../../assets/award.svg";
import Popular from "./Home/Popular";

const Tab = createMaterialTopTabNavigator();
const Home = () => {
  const { width, height } = useWindowDimensions();
  const actions = useActions();
  const state = useState();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: LocationAccuracy.Lowest,
      });
      actions.setLocation(location);
    })();
  }, []);
  return (
    <ScrollView contentContainerStyle={{ minHeight: Math.max(width, height) }}>
      <Award
        style={{
          position: "absolute",
          width: 24,
          height: 24,
          color: "#A9A9A9",
          right: 27,
          top: 32,
        }}
      ></Award>
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginLeft: 25,
            marginRight: 25,
            marginTop: 92,
            marginBottom: 45,
          }}
        >
          <CText style={styles.greetingTitle}>{`Good Morning,`}</CText>
          <CText style={styles.greetingTitle}>{`${state.user.email}!`}</CText>
        </View>

        <Tab.Navigator
          screenOptions={{
            swipeEnabled: false,
            tabBarIndicatorStyle: {
              position: "relative",
              left: "16.667%",
              top: "85%",
              marginLeft: -3.5,
              backgroundColor: "#00A76E",
              borderRadius: 4,
              width: 7,
              height: 7,
            },

            tabBarLabelStyle: {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: 16,
            },
            tabBarStyle: {
              backgroundColor: DefaultTheme.colors.background,
              elevation: 0,
              height: 60,
              justifyContent: "center",
            },
          }}
        >
          <Tab.Screen
            name="Recommend"
            component={Recommend}
            options={{ tabBarLabel: "Recommend" }}
          />
          <Tab.Screen
            name="Popular"
            component={Popular}
            options={{ tabBarLabel: "Popular" }}
          />
          <Tab.Screen
            name="Trending"
            component={Trending}
            options={{ tabBarLabel: "Trending" }}
          />
        </Tab.Navigator>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  greetingTitle: {
    fontWeight: "bold",
    lineHeight: 45,
    fontSize: 28,
  },
});

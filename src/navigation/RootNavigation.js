import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useActions, useState } from "../overmind";
import Home from "../screens/Home";
import Details from "../screens/Details";
import HotelBooking from "../screens/HotelBooking";
import Profile from "../screens/Profile";
import Bookings from "../screens/Bookings";
import Onboarding from "../screens/Onboarding";
import AuthenticationMain from "../screens/Authentication/Main";
import auth from "@react-native-firebase/auth";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

const RootNavigation = () => {
  const actions = useActions();
  const state = useState();

  const initializing = state.initializing;
  const setInitializing = actions.setInitializing;

  function onAuthStateChanged(user) {
    actions.setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      {state.user !== null ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="HotelBooking" component={HotelBooking} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Bookings" component={Bookings} />
        </>
      ) : (
        <>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Authentication" component={AuthenticationMain} />
        </>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});

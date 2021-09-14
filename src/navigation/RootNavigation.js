import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
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
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  console.log({ initializing, user: state.user });

  if (initializing) {
    return <AppLoading autoHideSplash={true} />;
  }

  return (
    <NavigationContainer
    /*theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "white",
        },
      }}*/
    >
      {state.user !== null ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ header: (props) => null }}
          />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="HotelBooking" component={HotelBooking} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Bookings" component={Bookings} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ header: (props) => null }}
          />
          <Stack.Screen
            name="AuthenticationMain"
            component={AuthenticationMain}
            options={{ header: (props) => null }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});

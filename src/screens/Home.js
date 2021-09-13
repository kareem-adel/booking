import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

const Home = () => {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        let location = Location.getLastKnownPositionAsync({});
        setLocation(location);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

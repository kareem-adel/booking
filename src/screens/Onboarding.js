import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Onboarding = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AuthenticationMain")}
      >
        <Text style={styles.buttonText}>go to Authentication</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  button: {},
  buttonText: {},
});

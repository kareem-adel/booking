import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useActions, useState } from "../overmind";
import CText from "./CText";
import Failed from "../../assets/failed.svg";

const BookingFail = (props) => {
  const actions = useActions();
  const state = useState();
  return (
    <View style={{ flex: 1 }}>
      <Failed
        style={{
          width: 78,
          height: 78,
          color: "#FD9942",
          alignSelf: "center",
          marginTop: 50,
        }}
      ></Failed>

      <CText style={styles.title}>{`Transaction Failed`}</CText>
      <CText
        style={styles.body}
      >{`Please check your internet connection and try again in a moments. Good luck!`}</CText>

      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: "#00A76E",
        }}
        onPress={() => {
          actions.setBookModalVisible(true);
        }}
      >
        <CText style={styles.buttonText}>{`Try Again`}</CText>
      </TouchableOpacity>
    </View>
  );
};

export default BookingFail;

const styles = StyleSheet.create({
  title: {
    margin: 25,
    marginTop: 42,
    fontSize: 24,
    fontWeight: "700",
  },
  body: {
    marginTop: 8,
    marginLeft: 25,
    marginRight: 25,
    lineHeight: 25,
  },
  button: {
    width: "100%",
    marginTop: 40,
    backgroundColor: "#00A76E",
    padding: 16,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 25,
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 16,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontWeight: "700",
  },
});
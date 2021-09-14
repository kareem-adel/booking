import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Eye from "../../assets/eye.svg";
import Eyeoff from "../../assets/eyeoff.svg";
import CText from "./CText";

const SInput = (props) => {
  return (
    <>
      <View style={{ ...styles.container, ...props.containerStyle }}>
        <TextInput
          onEndEditing={(event) => {
            props.validation && props.validation(event.nativeEvent.text);
          }}
          onChangeText={(text) => {
            props.updateState && props.updateState(text);
          }}
          {...props}
          style={{ flex: 1, ...props.inputStyle }}
        ></TextInput>
        {props.isPassword && (
          <TouchableOpacity
            style={{ adding: 11 }}
            onPress={() => {
              props.togglePassword && props.togglePassword();
            }}
          >
            {props.secureTextEntry ? (
              <Eyeoff style={styles.icon} width={22} height={22}></Eyeoff>
            ) : (
              <Eye style={styles.icon} width={22} height={22}></Eye>
            )}
          </TouchableOpacity>
        )}
      </View>
      {!!props.error && props.error.length > 0 && (
        <CText style={{ color: "red", marginLeft: 8, marginTop: 8 }}>
          {props.error}
        </CText>
      )}
    </>
  );
};

export default SInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 55,
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "white",
    padding: 8,
    marginLeft: 8,
    marginRight: 8,
    paddingLeft: 20,
    paddingRight: 15,
  },
  icon: { color: "#A9A9A9" },
});

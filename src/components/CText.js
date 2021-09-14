import React from "react";
import { Text } from "react-native";

const CText = (props) => {
  return (
    <Text {...props} style={[{ fontFamily: "Nunito Sans", color:"#3E3E3E" }, props.style]}>
      {props.children}
    </Text>
  );
};

export default CText;

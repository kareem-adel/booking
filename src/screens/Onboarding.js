import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useEffect,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CText from "../components/CText";

const Onboarding = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ alignItems: "flex-start" }}
    >
      <View style={{ height: 32 }}></View>
      <View style={styles.subContainer}>
        <Image
          style={{
            width: width * 0.9,
            height: width * 0.9 * 1.233,
            maxHeight: height * 0.6,
            ...styles.image,
          }}
          resizeMode={"cover"}
          source={require("../../assets/onboarding.png")}
        ></Image>
        <CText style={styles.title}>{`Travel with no worry`}</CText>
        <CText
          style={styles.body}
        >{`You can now experience the next level travel experience for hotel bookings.`}</CText>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AuthenticationMain")}
        >
          <CText style={styles.buttonText}>{`Next`}</CText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: { },
  subContainer: { flex: 1,  },
  image: { borderTopRightRadius: 40, borderBottomRightRadius: 40 },
  title: {
    margin: 25,
    marginTop: 60,
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    marginTop: 8,
    marginLeft: 25,
    marginRight: 25,
    lineHeight: 25,
  },
  button: {
    marginTop: 50,
    backgroundColor: "#00A76E",
    padding: 16,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 25,
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 16
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

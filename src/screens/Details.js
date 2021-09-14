import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Arrowleft from "../../assets/arrowleft.svg";
import { useActions, useState } from "../overmind";
import CText from "../components/CText";
import Star from "../../assets/star.svg";
import { useNavigation } from "@react-navigation/native";

const Details = () => {
  const { width } = useWindowDimensions();
  const actions = useActions();
  const state = useState();
  const navigation = useNavigation();
  const { id, image, name, description, location, rating, reviews } =
    state.details;
  return (
    <ScrollView>
      <View style={{ flex: 1, marginLeft: 25, marginRight:25 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 2,
            marginTop: 33,
          }}
        >
          <TouchableOpacity
            style={{ padding: 8 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Arrowleft
              style={{
                width: 24,
                height: 24,
                color: "#3E3E3E",
              }}
            ></Arrowleft>
          </TouchableOpacity>
          <CText
            style={{
              color: "#3E3E3E",
              fontSize: 20,
              marginLeft: 23,
              fontWeight: "700",
            }}
          >
            Description
          </CText>
        </View>

        <View
          style={{
            flexDirection: "row",
            flex: 1,
            marginTop: 25,
            marginBottom: 25,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 15,
          }}
        >
          <Image
            style={{
              marginRight: 15,
              width: 95,
              height: 95,
              alignSelf: "center",
              borderRadius: 10,
            }}
            resizeMode={"cover"}
            source={{ uri: image }}
          ></Image>

          <View style={{ flex: 1, paddingTop: 3, paddingBottom: 3 }}>
            <CText
              style={{
                textAlign: "left",
                color: "#3E3E3E",
                marginBottom: 10,
                fontWeight: "700",
                fontSize: 18,
              }}
            >
              {name}
            </CText>
            <CText
              //numberOfLines={1}
              style={{
                textAlign: "left",
                color: "rgba(62, 62, 62, 0.6)",
                fontWeight: "400",
                fontSize: 14,
                marginBottom: 7,
              }}
            >
              {location}
            </CText>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Star
                style={{
                  width: 16,
                  height: 16,
                  color: "#FD9942",
                  marginRight: 12,
                }}
              ></Star>
              <CText
                style={{
                  color: "#FD9942",
                  fontSize: 14,
                  fontWeight: "600",
                  marginRight: 12,
                }}
              >
                {rating}
              </CText>
              <CText
                style={{ color: "#A9A9A9", fontSize: 14, fontWeight: "600" }}
              >
                {`(${reviews} Reviews)`}
              </CText>
            </View>
          </View>
        </View>

        <CText
          style={{
            color: "rgba(62, 62, 62, 0.8)",
            fontSize: 14,
            fontWeight: "400",
          }}
        >
          {`${description}`}
        </CText>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AuthenticationMain")}
        >
          <CText style={styles.buttonText}>{`Book`}</CText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
    button: {
        marginTop: 77,
        backgroundColor: "#00A76E",
        padding: 16,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 25,
        fontSize: 18,
        alignSelf: "center",
        marginBottom: 16
      },
      buttonText: {
        color: "white",
        fontWeight: "700",
      },
});

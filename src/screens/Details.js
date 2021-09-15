import React, { useMemo, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import Arrowleft from "../../assets/arrowleft.svg";
import { useActions, useState } from "../overmind";
import CText from "../components/CText";
import Star from "../../assets/star.svg";
import { useNavigation } from "@react-navigation/native";

import { ModalContent, BottomModal } from "react-native-modals";
import Booking from "../components/Booking";
import BookingSuccess from "../components/BookingSuccess";
import BookingFail from "../components/BookingFail";

const Details = () => {
  const actions = useActions();
  const state = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      if (state.bookModal.visible) {
        actions.setBookModalVisible(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const { id, place_id, image, name, description, location, rating, reviews } =
    state.details;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, marginLeft: 25, marginRight: 25 }}>
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
            onPress={() => actions.setBookModalVisible(true)}
          >
            <CText style={styles.buttonText}>{`Book`}</CText>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomModal
        visible={state.bookModal.visible}
        onTouchOutside={() => actions.setBookModalVisible(false)}
        height={state.bookModal.mode == "booking" ? 0.8 : 0.6}
        width={1}
        onSwipeOut={() => actions.setBookModalVisible(false)}
      >
        <View
          style={{
            marginTop: 15,
            alignSelf: "center",
            width: "25%",
            height: 5,
            backgroundColor: "rgba(169, 169, 169, 0.2)",
            borderRadius: 3,
          }}
        ></View>
        <ModalContent
          style={{
            flex: 1,
            backgroundColor: "fff",
          }}
        >
          <ScrollView>
          {(() => {
            switch (state.bookModal.mode) {
              case "booking":
                return <Booking></Booking>;
              case "success":
                return <BookingSuccess navigation={navigation}></BookingSuccess>;
              case "fail":
                return <BookingFail></BookingFail>;
            }
          })()}
          </ScrollView>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginTop: 77,
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

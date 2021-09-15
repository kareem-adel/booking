import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Arrowleft from "../../assets/arrowleft.svg";
import Camera from "../../assets/camera.svg";
import Arrowrightgreen from "../../assets/arrowrightgreen.svg";
import Award from "../../assets/award.svg";
import Logout from "../../assets/logout.svg";
import Success from "../../assets/success.svg";

import CText from "../components/CText";
import { useNavigation } from "@react-navigation/native";
import { useActions, useState } from "../overmind";

const Profile = () => {
  const actions = useActions();
  const state = useState();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
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
              Profile
            </CText>
          </View>

          <View style={{ marginTop: 92 / 3 }}>
            <Image
              resizeMode={"cover"}
              style={{
                width: 90,
                height: 90,
                alignSelf: "center",
                borderRadius: 45,
              }}
              source={{ uri: "https://picsum.photos/seed/picsum/512/512" }}
            ></Image>
            <View
              style={{
                alignSelf: "center",
                marginTop: -45 / 1.5,
                marginLeft: 50,
                backgroundColor: "white",
                width: 45,
                height: 45,
                borderRadius: 45 / 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(0, 167, 110, 1)",
                  width: 40,
                  height: 40,
                  borderRadius: 45 / 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Camera
                  style={{
                    width: 22,
                    height: 22,

                    color: "white",
                  }}
                ></Camera>
              </View>
            </View>
          </View>

          <CText
            style={{
              marginTop: 12,
              color: "rgba(62, 62, 62, 1)",
              fontSize: 24,
              fontWeight: "700",
              alignSelf: "center",
            }}
          >
            {state.user?.email}
          </CText>
          <CText
            style={{
              marginTop: 5,
              color: "rgba(62, 62, 62, 0.4)",
              fontSize: 16,
              fontWeight: "600",
              alignSelf: "center",
            }}
          >
            {`Egypt`}
          </CText>

          <View
            style={{
              marginTop: 40,
              borderRadius: 10,
              backgroundColor: "white",
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 18,
              paddingRight: 18,
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <CText
                style={{
                  color: "rgba(0, 167, 110, 1)",
                  fontSize: 28,
                  fontWeight: "700",
                  alignSelf: "center",
                }}
              >
                {`47`}
              </CText>
              <CText
                style={{
                  color: "rgba(62, 62, 62, 0.6)",
                  fontSize: 14,
                  fontWeight: "400",
                  alignSelf: "center",
                }}
              >
                {`Reviews`}
              </CText>
            </View>
            <View style={{ flexDirection: "column" }}>
              <CText
                style={{
                  color: "rgba(0, 167, 110, 1)",
                  fontSize: 28,
                  fontWeight: "700",
                  alignSelf: "center",
                }}
              >
                {`75`}
              </CText>
              <CText
                style={{
                  color: "rgba(62, 62, 62, 0.6)",
                  fontSize: 14,
                  fontWeight: "400",
                  alignSelf: "center",
                }}
              >
                {`Transactions`}
              </CText>
            </View>
            <View style={{ flexDirection: "column" }}>
              <CText
                style={{
                  color: "rgba(0, 167, 110, 1)",
                  fontSize: 28,
                  fontWeight: "700",
                  alignSelf: "center",
                }}
              >
                {`2`}
              </CText>
              <CText
                style={{
                  color: "rgba(62, 62, 62, 0.6)",
                  fontSize: 14,
                  fontWeight: "400",
                  alignSelf: "center",
                }}
              >
                {`Bookings`}
              </CText>
            </View>
          </View>

          <CText
            style={{
              marginTop: 35,
              color: "rgba(62, 62, 62, 1)",
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            {`Options`}
          </CText>

          <View
            style={{
              marginTop: 25,
              borderRadius: 10,
              backgroundColor: "white",
              paddingTop: 21,
              paddingBottom: 21,
              paddingLeft: 25,
              paddingRight: 25,
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Award
                style={{
                  marginRight: 21,
                  width: 24,
                  height: 24,
                }}
              ></Award>
              <CText
                style={{
                  color: "rgba(62, 62, 62, 1)",
                  fontSize: 16,
                  fontWeight: "600",
                  alignSelf: "center",
                }}
              >
                {`User Settings`}
              </CText>
            </View>

            <Arrowrightgreen
              style={{
                width: 6,
                height: 13,
              }}
            ></Arrowrightgreen>
          </View>

          <TouchableOpacity
            onPress={() => {
              actions.signOut().then(
                () => {
                  console.log("Signed out successfully");
                },
                (error) => {
                  console.log({ error });
                }
              );
            }}
          >
            <View
              style={{
                marginTop: 25,
                borderRadius: 10,
                backgroundColor: "white",
                paddingTop: 21,
                paddingBottom: 21,
                paddingLeft: 25,
                paddingRight: 25,
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Logout
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 20,
                  }}
                ></Logout>
                <CText
                  style={{
                    color: "rgba(62, 62, 62, 1)",
                    fontSize: 16,
                    fontWeight: "600",
                    alignSelf: "center",
                  }}
                >
                  {`Logout`}
                </CText>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
              navigation.navigate("Bookings");
          }}>
            <View
              style={{
                marginTop: 25,
                borderRadius: 10,
                backgroundColor: "white",
                paddingTop: 21,
                paddingBottom: 21,
                paddingLeft: 25,
                paddingRight: 25,
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Success
                  style={{
                    marginRight: 21,
                    width: 20,
                    height: 20,
                  }}
                ></Success>
                <CText
                  style={{
                    color: "rgba(62, 62, 62, 1)",
                    fontSize: 16,
                    fontWeight: "600",
                    alignSelf: "center",
                  }}
                >
                  {`Bookings`}
                </CText>
              </View>

              <Arrowrightgreen
                style={{
                  width: 6,
                  height: 13,
                }}
              ></Arrowrightgreen>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Arrowleft from "../../assets/arrowleft.svg";
import CText from "../components/CText";
import { useNavigation } from "@react-navigation/native";

const Bookings = () => {
  const navigation = useNavigation();
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
              Bookings
            </CText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({});

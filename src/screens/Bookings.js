import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Arrowleft from "../../assets/arrowleft.svg";
import CText from "../components/CText";
import { useNavigation } from "@react-navigation/native";
import { useActions, useState } from "../overmind";
import moment from "moment";

const Bookings = () => {
  const actions = useActions();
  const state = useState();
  const navigation = useNavigation();

  useEffect(() => {
    actions.getBookings();
    return () => {};
  }, []);

  console.log({ myBookings: state.myBookings });

  const renderItem = ({
    item: {
      id,
      checkIn,
      checkOut,
      description,
      image,
      location,
      name,
      rating,
      reviews,
    },
  }) => {
    console.log({
      id,
      checkIn,
      checkOut,
      description,
      image,
      location,
      name,
      rating,
      reviews,
    });
    checkIn = moment(checkIn, "DD-MM-YYYY").format("DD/MM/YYYY");
    checkOut = moment(checkOut, "DD-MM-YYYY").format("DD/MM/YYYY");
    return (
      <View
        style={{
          marginLeft: 25,
          marginRight: 25,
          flexDirection: "row",
          flex: 1,
          marginTop: 3,
          marginBottom: 3,
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
            <CText
              style={{
                color: "rgba(62, 62, 62, 0.6)",
                fontSize: 14,
                fontWeight: "400",
              }}
            >
              {`from ${checkIn} To ${checkOut}`}
            </CText>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginLeft: 27,
          marginRight: 27,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 33,
          marginBottom: 27,
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
      <FlatList
        onRefresh={() => {
          actions.getBookings();
        }}
        refreshing={state.myBookingsLoading}
        data={state.myBookings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListFooterComponent={() => <View style={{ width: 25 }}></View>}
      />
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({});

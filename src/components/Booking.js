import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { useActions, useState } from "../overmind";
import CText from "../components/CText";
import CalendarPicker from "react-native-calendar-picker";
import Down from "../../assets/down.svg";
import Arrowright from "../../assets/arrowright.svg";
import moment from "moment";


const Booking = () => {
    const bottomSheetRef = useRef(null);
    const { width } = useWindowDimensions();
    const actions = useActions();
    const state = useState();
  return (
    <>
      <CalendarPicker
        customDayHeaderStyles={(date) => {
          return {
            textStyle: {
              color: "rgba(62, 62, 62, 0.6)",
            },
          };
        }}
        weekdays={["S", "M", "T", "W", "T", "F", "S"]}
        dayLabelsWrapper={{ borderBottomWidth: 0, borderTopWidth: 0 }}
        headerWrapperStyle={{ justifyContent: "flex-start" }}
        customComponent={
          <Down
            style={{
              marginLeft: 24,
              width: 13,
              height: 6,
              color: "rgba(62, 62, 62, 0.6)",
            }}
          ></Down>
        }
        showDayStragglers={true}
        selectedDayStyle={{
          width: 40,
          height: 40,
          backgroundColor: "rgba(0, 167, 110, 1)",
        }}
        selectedDayTextColor={"rgba(255, 255, 255, 1)"}
        allowRangeSelection={true}
        selectedRangeStartTextStyle={{ color: "rgba(255, 255, 255, 1)" }}
        selectedRangeEndTextStyle={{ color: "rgba(255, 255, 255, 1)" }}
        selectedRangeStartStyle={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          backgroundColor: "rgba(0, 167, 110, 1)",
        }}
        selectedRangeEndStyle={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          backgroundColor: "rgba(0, 167, 110, 1)",
        }}
        selectedRangeStyle={{
          height: "80%",
          backgroundColor: "rgba(0, 167, 110, 0.2)",
        }}
        allowBackwardRangeSelect={true}
        onDateChange={(date, type) => {
          console.log({ date, type });
          if (date == null) return;
          if (type == "START_DATE") {
            actions.setCheckIn(date.format("DD-MM-YYYY"));
            actions.setCheckOut("");
          } else {
            actions.setCheckOut(date.format("DD-MM-YYYY"));
          }
        }}
      />

      <View
        style={{
          marginLeft: 11,
          marginRight: 11,
          marginTop: 45,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <CText
            style={{
              fontWeight: "400",
              fontSize: 18,
              color: "rgba(62, 62, 62, 0.6)",
              marginBottom: 10,
            }}
          >
            Check In
          </CText>
          <CText
            style={{
              fontWeight: "700",
              fontSize: 24,
              color: "rgba(62, 62, 62, 1)",
            }}
          >
            {state.bookModal.checkIn == ""
              ? "----"
              : moment(state.bookModal.checkIn, "DD-MM-YYYY").format("MMM DD")}
          </CText>
        </View>
        <Arrowright
          style={{
            marginLeft: 24,
            width: 13,
            height: 6,
            color: "rgba(62, 62, 62, 0.6)",
          }}
        ></Arrowright>
        <View style={{ flexDirection: "column" }}>
          <CText
            style={{
              fontWeight: "400",
              fontSize: 18,
              color: "rgba(62, 62, 62, 0.6)",
              marginBottom: 10,
            }}
          >
            Check Out
          </CText>
          <CText
            style={{
              fontWeight: "700",
              fontSize: 24,
              color: "rgba(62, 62, 62, 1)",
            }}
          >
            {state.bookModal.checkOut == ""
              ? "----"
              : moment(state.bookModal.checkOut, "DD-MM-YYYY").format("MMM DD")}
          </CText>
        </View>
      </View>

      <TouchableOpacity
        disabled={!state.bookModal.continueButtonEnabled}
        style={{
          ...styles.button,
          backgroundColor: state.bookModal.continueButtonEnabled
            ? "#00A76E"
            : "grey",
        }}
        onPress={() => {
          actions.submitBooking();
        }}
      >
        <CText style={styles.buttonText}>{`Continue`}</CText>
      </TouchableOpacity>
    </>
  );
};

export default Booking;

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
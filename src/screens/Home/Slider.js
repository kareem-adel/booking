import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import CText from "../../components/CText";
import Star from "../../../assets/star.svg";
import { useNavigation } from "@react-navigation/native";
import { useActions, useState } from "../../overmind";

const Slider = ({ feed, loading, requestNextSet }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const actions = useActions();
  const state = useState();

  const Item = ({
    id,
    place_id,
    image,
    name,
    description,
    location,
    rating,
    reviews,
  }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          actions.setDetails({
            id,
            place_id,
            image,
            name,
            description,
            location,
            rating,
            reviews,
          });
          navigation.navigate("Details");
        }}
      >
        <View
          style={{
            flex: 1,
            marginLeft: 25,
            borderRadius: 30,
            overflow: "hidden",
          }}
        >
          <ImageBackground
            style={{
              width: width * 0.8,
              height: "100%",
              alignSelf: "center",
              borderRadius: 50,
              backgroundColor: "grey",
            }}
            resizeMode={"cover"}
            source={{ uri: image }}
          >
            <View
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "rgba(62, 62, 62, 0.6)",
                borderRadius: 25,
                padding: 14,
                paddingTop: 9,
                paddingBottom: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Star
                style={{
                  width: 16,
                  height: 16,
                  color: "#FD9942",
                  marginRight: 11,
                }}
              ></Star>
              <CText
                style={{ color: "white", fontSize: 14, fontWeight: "600" }}
              >
                {rating}
              </CText>
            </View>

            <View
              style={{ position: "absolute", left: 25, bottom: 25, right: 25 }}
            >
              <CText
                style={{
                  textAlign: "left",
                  color: "white",
                  marginBottom: 14,
                  fontWeight: "700",
                  fontSize: 20,
                }}
              >
                {name}
              </CText>
              <CText
                style={{
                  textAlign: "left",
                  color: "white",
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                {location}
              </CText>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => {
    return <Item {...item} />;
  };
  return (
    <View style={{ flex: 1, marginTop: 40, marginBottom: 40 }}>
      <FlatList
        onEndReached={() => {
          !!requestNextSet && !loading && requestNextSet();
        }}
        data={feed}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ width: 25 }}></View>}
      />
      {loading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});

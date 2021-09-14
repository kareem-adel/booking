import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import CText from "../../components/CText";
import Star from "../../../assets/star.svg";

const Slider = ({ navigation, fetchFeed, feed }) => {
  const { width } = useWindowDimensions();

  const Item = ({ image, name, location, rating }) => {
    return (
      <TouchableOpacity
        onPress={() => {
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
            }}
            resizeMode={"cover"}
            source={{ uri: image }}
          >
            <View
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "#3C3E3E3E",
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
        data={feed}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => <View style={{ width: 25 }}></View>}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});

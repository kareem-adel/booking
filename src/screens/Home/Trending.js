import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useActions, useState } from "../../overmind";
import Slider from "./Slider";

const Trending = ({ navigation }) => {
  const actions = useActions();
  const state = useState();
  useEffect(() => {
    !!state.location &&
      actions.getHotelsTrending();
    return () => {};
  }, [state.location]);
  return <Slider feed={state.trending}></Slider>;
};

export default Trending;

const styles = StyleSheet.create({});
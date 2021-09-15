import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useActions, useState } from "../../overmind";
import Slider from "./Slider";

const Recommend = ({ navigation }) => {
  const actions = useActions();
  const state = useState();
  useEffect(() => {
    !!state.location && actions.getHotelsRecommend();
    return () => {};
  }, [state.location]);
  return (
    <Slider
      feed={state.recommend}
      loading={state.recommendLoading}
      requestNextSet={actions.getHotelsRecommend}
    ></Slider>
  );
};

export default Recommend;

const styles = StyleSheet.create({});

import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useActions, useState } from "../../overmind";
import Slider from "./Slider";

const Popular = ({ navigation }) => {
  const actions = useActions();
  const state = useState();
  useEffect(() => {
    !!state.location && actions.getHotelsPopular();
    return () => {};
  }, [state.location]);
  return (
    <Slider
      feed={state.popular}
      loading={state.popularLoading}
      requestNextSet={actions.getHotelsPopular}
    ></Slider>
  );
};

export default Popular;

const styles = StyleSheet.create({});

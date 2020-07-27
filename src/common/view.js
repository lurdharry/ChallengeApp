import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Clipboard,
} from "react-native";

import { hp, wp } from "./utils";
import * as Colors from "./Colors";

export const BackgroundView = props => {
  return <View style={[styles.background, props.style]}>{props.children}</View>;
};

export const MainView = props => {
  return (
    <View style={[styles.mainBackground, props.style]}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.DarkBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  mainBackground: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.White,
    width: wp(375),
    marginTop: hp(49),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
});

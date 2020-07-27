import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { hp } from "./utils";

export const RegularText = ({ title, style, ...rest }) => (
  <Text style={[styles.regularTextStyle, style]} {...rest}>
    {title}
  </Text>
);

const styles = StyleSheet.create({
  regularTextStyle: {
    fontSize: 14,
  },
});

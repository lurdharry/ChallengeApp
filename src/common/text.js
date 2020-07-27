import React from "react";
import { StyleSheet, Text } from "react-native";

export const RegularText = ({ title, style, ...rest }) => (
  <Text style={[styles.regularTextStyle, style]} {...rest}>
    {title}
  </Text>
);

const styles = StyleSheet.create({
  regularTextStyle: {
    fontSize: 14,
    fontFamily: "Graphik-Regular",
  },
});

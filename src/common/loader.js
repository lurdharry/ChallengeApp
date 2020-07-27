import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { TransparentWhite } from "./Colors";
import * as Colors from "./Colors";

const Spinner = ({ size, style }) => {
  return (
    <View style={[style, styles.spinnerStyle]}>
      <ActivityIndicator size={size || "large"} color={Colors.DarkBlue} />
    </View>
  );
};
const TransactionLoader = ({ backgroundGradient, style }) => {
  return (
    <View
      style={[
        styles.loader,
        backgroundGradient && { backgroundColor: backgroundGradient },
        style,
      ]}
    >
      <Spinner />
    </View>
  );
};
export { Spinner, TransactionLoader };

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loader: {
    height: "100%",
    width: "100%",
    backgroundColor: TransparentWhite,
    position: "absolute",
    zIndex: 4,
  },
});

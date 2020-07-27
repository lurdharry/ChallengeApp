import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { wp, hp } from "./utils";
import { DarkBlue, PaRed, TransparentWhite } from "./Colors";
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
  overlay: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
  },
  spinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  otpView: {
    height: hp(46),
    marginTop: hp(20),
    fontFamily: "Graphik-SemiBold",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row",
    marginHorizontal: wp(25),
  },

  underlineHighlighted: {
    borderColor: DarkBlue,
  },
  errorMessage: {
    color: PaRed,
    textAlign: "center",
    marginTop: hp(15),
  },
  spinner: {
    justifyContent: "center",
    marginTop: hp(20),
  },
  loader: {
    height: "100%",
    width: "100%",
    backgroundColor: TransparentWhite,
    position: "absolute",
    zIndex: 4,
  },
});

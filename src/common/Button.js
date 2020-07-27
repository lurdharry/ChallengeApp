import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Button as Btn } from "react-native-elements";
import { hp, wp } from "./utils";
import * as Colors from "./Colors";

export const Button = ({
  pale,
  style,
  buttonStyle,
  disabled,
  disabledStyle,
  loading,
  onPress,
  title,
  titleStyle,
  icon,
  iconRight,
  containerStyle,
}) => {
  return (
    <Btn
      icon={icon}
      containerStyle={containerStyle}
      title={title}
      buttonStyle={[pale ? styles.paleButton : styles.button, buttonStyle]}
      loading={loading}
      titleStyle={[pale ? styles.paleTitle : styles.title, titleStyle]}
      disabled={disabled}
      disabledStyle={disabledStyle || styles.disabledStyle}
      disabledTitleStyle={styles.disabledTitleStyle}
      onPress={onPress}
      iconRight={iconRight}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp(325),
    height: hp(52),
    backgroundColor: Colors.DarkBlue,
    borderStyle: "solid",
    borderRadius: 4,
  },
  paleButton: {
    width: wp(325),
    height: hp(52),
    backgroundColor: Colors.PaleBlue,
    borderStyle: "solid",
    borderRadius: 4,
  },
  title: {
    fontFamily: "Graphik-Medium",
    fontSize: 16,
    color: Colors.White,
    marginTop: Platform.OS === "android" ? -hp(7) : 0,
  },
  paleTitle: {
    fontFamily: "Graphik-Medium",
    fontSize: 16,
    color: Colors.DarkBlue,
    marginTop: Platform.OS === "android" ? -hp(7) : 0,
  },
  disabledStyle: {
    backgroundColor: Colors.InactiveBlue,
  },
  disabledTitleStyle: {
    color: Colors.White,
  },
});

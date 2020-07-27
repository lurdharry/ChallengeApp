/* eslint-disable no-nested-ternary */
import React from "react";
import { Platform, View, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wpd } from "react-native-responsive-screen";
import { hp, wp } from "./utils";
import { RegularText } from "./text";
import { Ionicons } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

export const Header = ({
  backIconColor,
  icon,
  title,
  titleStyle,
  right,
  rightStyle,
  onPress,
}) => {
  return (
    <View style={icon === false ? styles.rightMenuHeader : styles.menuHeader}>
      {icon !== false &&
        (Platform.OS === "ios" ? (
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Ionicons name="ios-arrow-back" size={28} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => Actions.pop() || onPress}>
            <Ionicons name="md-arrow-back" size={28} color="white" />
          </TouchableOpacity>
        ))}
      <RegularText
        title={title}
        style={[
          icon !== false
            ? styles.menuText
            : { alignSelf: "center", marginTop: 0 },
          titleStyle,
        ]}
      />
      {right && <View style={[styles.right, rightStyle]}>{right}</View>}
    </View>
  );
};

export const MainHeader = ({ props, title, titleStyle }) => {
  return props ? (
    <View style={styles.mainHeader}>{props.chilren}</View>
  ) : (
    <RegularText title={title} style={[styles.mainHeader, titleStyle]} />
  );
};
const styles = StyleSheet.create({
  menuHeader: {
    marginTop: Platform.OS === "ios" ? (isIPhoneX() ? hp(40) : hp(20)) : 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: wp(10),
  },
  rightMenuHeader: {
    marginTop: Platform.OS === "ios" ? hp(40) : 0,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "space-between",
  },
  mainHeader: {
    marginTop: Platform.OS === "ios" ? hp(40) : 0,
    alignSelf: "center",
  },
  menuText: {
    alignSelf: "center",
    marginTop: 0,
    flexGrow: 1,
    textAlign: "center",
    marginRight: wpd("11%"),
  },
  backIcon: {
    marginTop: 0,
    marginLeft: 0,
  },
});

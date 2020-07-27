import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { hp, wp, Button, RegularText } from "./index";
import * as Colors from "./Colors";
import { empty } from "../assets/images";

export const BackgroundView = props => {
  return <View style={[styles.background, props.style]}>{props.children}</View>;
};

export const MainView = props => {
  return (
    <View style={[styles.mainBackground, props.style]}>{props.children}</View>
  );
};

export const HeaderRightView = ({ onAscend, onDescend }) => (
  <View style={{ flexDirection: "row", marginEnd: wp(15) }}>
    <TouchableOpacity onPress={onAscend}>
      <FontAwesome name="sort-amount-asc" size={18} color={Colors.White} />
    </TouchableOpacity>
    <TouchableOpacity onPress={onDescend}>
      <FontAwesome
        name="sort-amount-desc"
        size={18}
        color={Colors.White}
        style={{ marginLeft: wp(10) }}
      />
    </TouchableOpacity>
  </View>
);

export const EmptyActivity = ({ onPress }) => (
  <View
    style={{
      marginTop: hp(70),
      alignItems: "center",
      marginHorizontal: wp(30),
    }}
  >
    <Image source={empty} resizeMode="contain" style={styles.emptyImage} />
    <RegularText
      title="Your Activity List is currently empty"
      style={[{ textAlign: "center", fontSize: 20, marginBottom: hp(80) }]}
    />
    <Button title="Add an Activity" onPress={onPress} />
  </View>
);

const styles = StyleSheet.create({
  emptyImage: { width: wp(300), height: hp(195), marginBottom: hp(60) },
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
    width: "100%",
    marginTop: hp(49),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
});

import React from "react";

import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { hp, RegularText, Red, wp, BlackCoral, Snow300 } from "../common";
import * as Colors from "../common/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Logo } from "../assets/images";
import moment from "moment";

export const ActivePaycodeCard = ({ details, onPress, onDelete, onEdit }) => {
  const { title, startDate } = details;
  const date = moment(startDate).format("LLL");
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ alignSelf: "center" }}>
          <Image source={Logo} resizeMode="contain" style={styles.icon} />
        </View>
        <View style={styles.codeBox}>
          <RegularText title={title} style={styles.title} />
          <RegularText title={date} style={styles.time} />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignSelf: "baseline" }}>
        <TouchableOpacity onPress={onEdit}>
          <AntDesign name="edit" size={14} color={Colors.LightBlue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={{ marginLeft: wp(10) }}>
          <AntDesign name="delete" size={14} color={Red} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  time: {
    fontSize: 12,
    lineHeight: hp(12),
    color: Colors.Smoke400,
  },

  codeBox: {
    marginLeft: wp(16),
    alignSelf: "center",
  },
  title: {
    fontSize: hp(14),
    lineHeight: hp(12),
    // fontWeight: "500",
    color: Colors.Grey200,
    marginBottom: hp(13),
  },
  card: {
    height: hp(87),
    paddingVertical: hp(25),
    width: wp(330),
    backgroundColor: Colors.Snow300,
    borderRadius: hp(4),
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: wp(19),
    paddingRight: wp(10),
    marginTop: hp(20),
    alignSelf: "center",
  },
  icon: {
    height: hp(38),

    width: wp(38),
  },
});

import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {
  hp,
  RegularText,
  Red,
  PaBlack200,
  wp,
  Button,
  PaYellow,
  TransactionLoader,
  BlackCoral,
  Snow300,
  Smoke100,
} from "../common";
import * as Colors from "../common/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Logo } from "../assets/images";
import moment from "moment";

export const ActivePaycodeCard = ({ details, onPress, onDelete, onEdit }) => {
  const { title, createdAt } = details;
  const date = moment(createdAt).format("DD.MM.YYYY • LT");
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ alignSelf: "center" }}>
          <Image source={Logo} resizeMode="contain" style={styles.icon} />
        </View>
        <View style={styles.codeBox}>
          <RegularText title={title} style={styles.paycode} />
          <RegularText title={date} style={styles.time} />
        </View>
      </View>
      <TouchableOpacity onPress={onEdit} style={{ marginLeft: wp(40) }}>
        <AntDesign name="edit" size={14} color={Colors.LightBlue} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <AntDesign name="delete" size={14} color={Red} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  amount: {
    fontSize: hp(12),
    lineHeight: hp(12),
    fontWeight: "500",
    color: Colors.Grey200,
  },
  time: {
    fontSize: hp(12),
    lineHeight: hp(12),
    color: Colors.Smoke400,
  },
  icontime: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeBox: {
    marginLeft: wp(16),
    alignSelf: "center",
  },
  paycode: {
    fontSize: hp(12),
    lineHeight: hp(12),
    fontWeight: "500",
    color: Colors.Grey200,
    marginBottom: hp(13),
  },
  card: {
    height: hp(87),
    paddingVertical: hp(25),
    width: wp(325),
    backgroundColor: Colors.Snow300,
    borderRadius: hp(4),
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: wp(19),
    marginTop: hp(20),
    alignSelf: "center",
  },
  headerGrid: {
    marginTop: hp(14),
  },
  transactionName: {
    color: Colors.Grey200,
    fontSize: 14,
  },
  container: {
    paddingLeft: wp(25),
  },
  detailBox: {
    width: wp(325),
    marginTop: hp(20),
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: Colors.Platinum,
    alignItems: "center",
    marginBottom: hp(25),
  },
  transactionDateView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(295),
    marginTop: hp(13),
  },
  transactionDate: {
    color: Colors.Smoke400,
  },
  divider: {
    width: wp(325),
    height: 0.5,
    backgroundColor: Colors.Platinum,
    marginTop: hp(10),
  },
  detailsText: {
    marginTop: hp(6),
    fontSize: hp(12),
    lineHeight: 25,
    color: Colors.Smoke400,
  },
  detailGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(4),
    width: wp(295),
  },
  firstDetailGrid: {
    marginTop: hp(11),
  },
  transactionKey: {
    color: Colors.Smoke400,
    height: hp(25),
  },
  transactionKeyx: {
    color: Colors.Grey200,
    height: hp(25),
  },
  detailButton: {
    // marginTop: hp(20),
    backgroundColor: Colors.DarkBlue,
  },
  detailButtonText: {
    color: Colors.White,
  },
  btcButton: {
    marginTop: hp(20),
    backgroundColor: Colors.PaleYellow,
  },
  btcButtonText: {
    color: Colors.VividAmber,
  },
  homeCard: {
    height: hp(87),
    width: wp(325),
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: wp(30),
    backgroundColor: Colors.Snow300,
    borderRadius: hp(4),
    marginTop: hp(20),
  },
  cardtitle: {
    color: Colors.Grey200,
    fontSize: hp(12),
    lineHeight: hp(25),
    fontWeight: "500",
    marginLeft: wp(37),
  },
  icon: {
    height: hp(38),

    width: wp(38),
  },
  item: {
    width: wp(325),
    height: hp(85),
    borderRadius: hp(4),
    borderBottomColor: BlackCoral,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: Snow300,
    paddingLeft: wp(25),
    paddingRight: wp(37),
    alignItems: "center",
  },

  container: {
    flex: 1,
    paddingTop: hp(20),
    backgroundColor: "#fff",
  },
});

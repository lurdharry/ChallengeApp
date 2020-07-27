import { StyleSheet } from "react-native";
import { hp, wp } from "../common";

import * as Colors from "../common/Colors";

export const activityStyles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: Colors.White,
  },
  inputView: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: hp(20),
    borderTopRightRadius: hp(20),
    paddingTop: hp(10),
  },
  createButton: {
    width: wp(325),
    height: hp(52),
    alignSelf: "center",
    marginTop: hp(60),
  },
  nameContainer: {
    width: wp(325),
    marginVertical: 0,
    marginTop: hp(18),
    height: hp(50),
    alignSelf: "center",
  },
  buttonStyle: {
    width: wp(325),
    height: hp(52),
    alignSelf: "center",
    marginTop: hp(15),
  },
  titleInput: {
    width: wp(325),
    alignSelf: "center",
  },

  descriptionInput: {
    width: wp(325),
    alignSelf: "center",
    marginTop: hp(15),
    marginBottom: hp(15),
  },
});
export const homeStyles = StyleSheet.create({
  picture: {
    height: hp(200),
    width: wp(130),
    alignSelf: "center",
    marginTop: hp(30),
  },
  buttonContainer: {
    alignSelf: "center",
    width: wp(300),
    height: hp(50),
    marginTop: hp(30),
  },
  button: {
    width: wp(300),
    height: hp(50),
    alignSelf: "center",
  },
  title: {
    marginLeft: wp(25),
    fontSize: hp(40),
    textAlign: "center",
    // marginTop: hp(30),
    alignSelf: "flex-start",
  },
  action: {
    fontSize: hp(20),
    textAlign: "center",
    marginTop: hp(40),
  },
});

export const createActivityStyles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: Colors.White,
  },
  inputView: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: hp(20),
    borderTopRightRadius: hp(20),
    paddingTop: hp(10),
  },
  createButton: {
    width: wp(325),
    height: hp(52),
    alignSelf: "center",
    marginTop: hp(60),
  },
  nameContainer: {
    width: wp(325),
    marginVertical: 0,
    marginTop: hp(18),
    height: hp(50),
    alignSelf: "center",
  },
  buttonStyle: {
    width: wp(325),
    height: hp(52),
    alignSelf: "center",
    marginTop: hp(15),
  },
  titleInput: {
    width: wp(325),
    alignSelf: "center",
  },

  descriptionInput: {
    width: wp(325),
    alignSelf: "center",
    marginTop: hp(15),
    marginBottom: hp(15),
  },
});

export const allActivitiesStyles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    color: Colors.White,
  },
});

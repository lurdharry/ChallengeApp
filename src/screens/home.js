import React from "react";
import { Actions } from "react-native-router-flux";

import { StyleSheet, SafeAreaView, Image, Dimensions } from "react-native";
import {
  hp,
  RegularText,
  wp,
  Button,
  MainView,
  BackgroundView,
  DarkBlue,
} from "../common";
import { Guest } from "../assets/images";
import { StatusBar } from "expo-status-bar";

export const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor={DarkBlue} />
      <BackgroundView>
        <MainView>
          <RegularText title="Welcome Back," style={styles.title} />
          <Image source={Guest} resizeMode="contain" style={styles.picture} />
          <RegularText
            title="What would you like to do today?"
            style={styles.action}
          />
          <Button
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            title="create an activity"
            onPress={() => Actions.create_activity()}
          />
          <Button
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            title="Check my Activities"
            onPress={() => Actions.all_activities()}
          />
        </MainView>
      </BackgroundView>
    </>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

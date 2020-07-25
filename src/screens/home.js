import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  hp,
  RegularText,
  Red,
  PaBlack200,
  wp,
  Button,
  PaYellow,
} from "../common";

export default function Home() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <RegularText
            title="Welcome to your Activity Monitor"
            style={styles.title}
          />
          <RegularText title="select an Action" style={styles.action} />
          <Button
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            title="create an activity"
          />
          <Button
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            title="My Activities"
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  ggg: {
    height: 90,
  },
  buttonContainer: {
    alignSelf: "center",
    width: wp(300),
    height: hp(50),
    marginTop: hp(10),
  },
  button: {
    backgroundColor: PaYellow,
    width: wp(300),
    height: hp(50),
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    // color: Red,
    fontSize: hp(40),
    textAlign: "center",
    marginTop: hp(30),
  },
  action: {
    fontSize: hp(40),
    textAlign: "center",
    marginTop: hp(30),
  },
});

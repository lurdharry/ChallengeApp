import React, { useEffect } from "react";
import { Actions } from "react-native-router-flux";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Image } from "react-native";
import {
  hp,
  RegularText,
  wp,
  Button,
  MainView,
  BackgroundView,
  DarkBlue,
  TransactionLoader,
} from "../common";
import { Guest } from "../assets/images";
import { StatusBar } from "expo-status-bar";
import { getAllActivities } from "../store/actions/activityAction";
import { homeStyles as styles } from "./allStyles";

export const Home = () => {
  const { loading } = useSelector(state => state.activity);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActivities());
  }, []);
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
            title="Create an Activity"
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
      {loading && <TransactionLoader />}
    </>
  );
};

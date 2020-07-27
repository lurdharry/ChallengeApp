/* eslint-disable consistent-return */
import React, { useState } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { hp, wp, TextInput, TextArea, RegularText, Button } from "./index";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import * as Colors from "./Colors";
import { createActivity } from "../store/actions/activityAction";
import { TransactionLoader } from "./loader";

export const AddActivity = ({ navigation, close, loading }) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const showDatePicker = value => {
    setDatePickerVisibility(true);
    setType(value);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();

    if (type === "start") {
      setstartDate(date);
    } else {
      setendDate(date);
    }
  };
  const create_an_activity = () => {
    const data = {
      title: title,
      startDate: startDate,
      endDate: endDate,
      description: description,
      createdAt: new Date(),
    };
    dispatch(createActivity(data));
    navigation.navigate("Activity");
    () => close;
  };

  return (
    <>
      <TextInput
        value={title}
        style={styles.titleInput}
        label="Title"
        labelStyle={styles.labeStyle}
        onChangeText={text => setTitle(text)}
      />
      <TextArea
        value={description}
        style={styles.descriptionInput}
        label="Description"
        onChangeText={text => setdescription(text)}
      />
      <Button
        title={startDate ? `Change Start Date` : `Set Start Date`}
        buttonStyle={[
          styles.buttonStyle,
          !startDate && { marginBottom: hp(40) },
        ]}
        onPress={() => showDatePicker("start")}
        pale
      />
      {startDate ? (
        <TextInput
          value={moment(startDate).format("DD.MM.YYYY • LT")}
          isEditable={false}
          style={styles.nameContainer}
        />
      ) : null}
      <Button
        title={endDate ? `Change End Date` : `Set End Date`}
        buttonStyle={[styles.buttonStyle, !endDate && { marginBottom: hp(40) }]}
        onPress={() => showDatePicker("end")}
        pale
      />
      {endDate ? (
        <TextInput
          value={moment(startDate).format("DD.MM.YYYY • LT")}
          isEditable={false}
          style={styles.nameContainer}
        />
      ) : null}
      <Button
        buttonStyle={styles.createButton}
        title="Create an Activity"
        style={styles.dateBox}
        disabled={!title || !description || !startDate || !endDate}
        onPress={create_an_activity}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date()}
        timePickerModeAndroid="spinner"
        minuteInterval={10}
      />
      {loading && <TransactionLoader />}
    </>
  );
};

const styles = StyleSheet.create({
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
  labeStyle: {
    marginLeft: wp(25),
  },
  descriptionInput: {
    width: wp(325),
    alignSelf: "center",
    marginTop: hp(15),
    marginBottom: hp(15),
  },
});

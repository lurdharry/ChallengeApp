/* eslint-disable consistent-return */
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  hp,
  TextInput,
  TextArea,
  Button,
  TransactionLoader,
  BackgroundView,
  MainView,
  Header,
} from "../common";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

import { editActivity } from "../store/actions/activityAction";
import { activityStyles as styles } from "./allStyles";

export const Details = props => {
  const { title, description, startDate, endDate, id } = props.data;
  const [] = useState(id);

  const [name, setName] = useState(title);
  const [desc, set_description] = useState(description);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [start_Date, set_startDate] = useState(startDate);
  const [end_Date, set_endDate] = useState(endDate);
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.activity);
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
      set_startDate(date);
    } else {
      set_endDate(date);
    }
  };
  const edit_an_activity = () => {
    const data = {
      title: name,
      startDate: start_Date,
      endDate: end_Date,
      description: desc,
      createdAt: new Date(),
    };
    dispatch(editActivity(data, id));
  };

  return (
    <>
      <BackgroundView style={{ paddingTop: hp(35) }}>
        <Header title="Edit Activity" titleStyle={styles.headerText} />
        <MainView>
          <KeyboardAwareScrollView style={styles.inputView}>
            <TextInput
              value={name}
              style={styles.titleInput}
              label="Title"
              onChangeText={text => setName(text)}
            />
            <TextArea
              value={desc}
              style={styles.descriptionInput}
              label="Description"
              onChangeText={text => set_description(text)}
            />
            <Button
              title="Edit Start Date"
              buttonStyle={[
                styles.buttonStyle,
                !start_Date && { marginBottom: hp(40) },
              ]}
              onPress={() => showDatePicker("start")}
              pale
            />
            {start_Date ? (
              <TextInput
                value={moment(start_Date).format("LLLL")}
                isEditable={false}
                style={styles.nameContainer}
              />
            ) : null}
            <Button
              title="Edit End Date"
              buttonStyle={[
                styles.buttonStyle,
                !end_Date && { marginBottom: hp(40) },
              ]}
              onPress={() => showDatePicker("end")}
              pale
            />
            {end_Date ? (
              <TextInput
                value={moment(end_Date).format("LLLL")}
                isEditable={false}
                style={styles.nameContainer}
              />
            ) : null}
            <Button
              buttonStyle={styles.createButton}
              title="Submit"
              style={styles.dateBox}
              loading={loading}
              disabled={!title || !description || !startDate || !endDate}
              onPress={edit_an_activity}
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
          </KeyboardAwareScrollView>
          {/* </View> */}
        </MainView>
      </BackgroundView>
      {loading && <TransactionLoader />}
    </>
  );
};

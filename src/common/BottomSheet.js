import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import BottomOverlay from "react-native-raw-bottom-sheet";
import { hp, wp, RegularText, Button } from "./index";
import * as Colors from "./Colors";
import { TextInput } from "./textInput";
import moment from "moment";

export const BottomSheet = ({
  height,
  openRef,
  render,
  onClose,
  onOpen,
  noScroll,
  dragFromTop,
}) => {
  return (
    <SafeAreaView>
      <BottomOverlay
        ref={openRef}
        height={height}
        duration={300}
        closeOnDragDown
        animationType="fade"
        customStyles={{
          container: styles.container,
        }}
        onClose={onClose}
        onOpen={onOpen}
        dragFromTopOnly={dragFromTop}
      >
        {noScroll ? (
          <View style={styles.scrollContainer}>{render}</View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.scrollContainer}>{render}</View>
          </ScrollView>
        )}
      </BottomOverlay>
    </SafeAreaView>
  );
};

export const DeleteBottomSheet = ({ onCancel, onDelete }) => {
  return (
    <View style={{ marginLeft: wp(25), marginTop: hp(15) }}>
      <RegularText
        title="Are you sure you want delete this Activity?"
        style={styles.warning}
      />
      <Button
        title="Cancel"
        onPress={onCancel}
        buttonStyle={styles.cancelButton}
      />
      <Button
        title="Confirm"
        onPress={onDelete}
        buttonStyle={styles.confirmButton}
      />
    </View>
  );
};
export const ViewDetailsBottomSheet = ({ details }) => {
  const { title, description, startDate, endDate } = details;
  return (
    <View
      style={{
        marginHorizontal: wp(25),
        // marginTop: hp(15),
        backgroundColor: "white",
        paddingBottom: hp(15),
      }}
    >
      <TextInput
        isEditable={false}
        label="Name"
        value={title}
        labelStyle={styles.label}
      />

      <TextInput
        isEditable={false}
        label="Start Date and Time"
        value={moment(startDate).format("DD.MM.YYYY • LT")}
        labelStyle={styles.label}
      />
      <TextInput
        isEditable={false}
        label="End Date and Time"
        value={moment(endDate).format("DD.MM.YYYY • LT")}
        labelStyle={styles.label}
      />
      <RegularText title="Description" style={styles.desText} />
      <View style={styles.des}>
        <RegularText
          multiLine={true}
          title={description}
          // style={styles.desText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: { fontSize: hp(14), marginTop: hp(10) },
  desText: {
    color: Colors.LightGrey,
    marginTop: hp(10),
  },
  des: {
    backgroundColor: Colors.Snow300,
    borderRadius: 4,
    marginTop: hp(5),
    paddingHorizontal: wp(15),
    paddingVertical: hp(15),
  },
  description: {
    paddingVertical: hp(15),
    height: hp(100),
  },
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: hp(25),
  },
  warning: {
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: Colors.DarkRed,
    marginTop: hp(30),
  },
  confirmButton: {
    backgroundColor: Colors.DarkBlue,
    marginTop: hp(30),
  },
});

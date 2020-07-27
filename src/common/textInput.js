import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Textarea as TA } from "native-base";
import { RegularText } from "./text";
import { hp, wp } from "./utils";
import * as Colors from "./Colors";

const Input = ({
  error,
  style,
  value,
  keyboardType,
  placeholder,
  errorStyle,
  label,
  labelStyle,
  inputStyle,
  inputContainerStyle,
  isEditable = true,
  isValid,
  onChange,
  onChangeText,
  maxLength,
  onFocus,
  onBlur,
  leftIcon,
  rightIcon,
  placeholderTextColor,
  noBorder,
  customInputStyle,
  ...rest
}) => {
  const [isInFocus, setFocus] = useState(false);
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
    setFocus(true);
  };
  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    setFocus(false);
  };
  return (
    <View style={inputContainerStyle}>
      {label && (
        <RegularText title={label} style={[styles.label, labelStyle]} />
      )}
      <View
        style={[
          styles.textInput,
          {
            backgroundColor: isEditable ? Colors.White : Colors.Snow300,
            borderWidth: isEditable ? 0.5 : 0,
          },
          style,
          isInFocus && styles.isInFocus,
          noBorder && { borderWidth: 0 },
          error && styles.errorContainer,
        ]}
      >
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          {...rest}
          autoCorrect={false}
          value={value}
          placeholder={placeholder}
          editable={isEditable}
          style={[
            styles.input,
            inputStyle,
            value.length && styles.activeinput,
            customInputStyle,
          ]}
          keyboardType={keyboardType}
          maxLength={maxLength}
          onChange={onChange}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor || Colors.LightGrey}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
      {error ? (
        <RegularText title={error} style={[styles.errorMessage, errorStyle]} />
      ) : null}
    </View>
  );
};

const TextArea = ({
  style,
  value,
  label,
  placeholder,
  rowSpan,
  labelStyle,
  placeholderTextColor,
  onChangeText,
  onFocus,
  onBlur,
}) => {
  const [isInFocus, setFocus] = useState(false);
  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
    setFocus(true);
  };
  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
    setFocus(false);
  };
  return (
    <View style={style}>
      {label && (
        <RegularText title={label} style={[styles.label, labelStyle]} />
      )}
      <View>
        <TA
          placeholder={placeholder || ""}
          value={value || ""}
          rowSpan={rowSpan || 4}
          bordered
          style={[styles.textArea, isInFocus && styles.isInFocus]}
          placeholderTextColor={placeholderTextColor || Colors.LightGrey}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: Colors.LightGrey,
    fontSize: 12,
    marginBottom: hp(10),
  },
  textInput: {
    fontSize: hp(12),
    backgroundColor: "white",
    height: hp(50),
    borderColor: Colors.Smoke300,
    borderRadius: 4,
    // marginVertical: hp(10),
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    fontStyle: "normal",
  },
  input: {
    fontSize: 12,
    // fontFamily: "Graphik-Regular",
    color: Colors.BlackCoral,
    fontStyle: "normal",
    // flexGrow: 1,
    width: wp(325),
    borderRadius: 4,
  },
  activeinput: {
    // fontFamily: "Graphik-Medium",
    color: Colors.Grey200,
  },
  icon: {
    alignSelf: "center",
    marginLeft: wp(-38),
  },
  leftIcon: {
    alignSelf: "center",
    marginRight: wp(12),
  },
  errorMessage: {
    color: Colors.Red,
    marginTop: hp(13),
  },
  inputGroupErrorMessage: {
    color: Colors.Red,
    alignSelf: "flex-start",
    paddingHorizontal: wp(5),
    marginTop: hp(10),
  },
  isInFocus: {
    borderColor: Colors.DarkBlue,
    borderWidth: 1,
  },
  errorContainer: {
    borderWidth: 1,
    borderColor: Colors.Red,
  },

  inputGroupLabel: {
    alignSelf: "flex-start",
    color: Colors.LightGrey,
  },
  inputGroupContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: wp(330),
  },
  inputGroup: {
    width: wp(271),
    height: hp(50),
    marginTop: hp(10),
    borderColor: Colors.Platinum,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderWidth: 0.5,
    color: Colors.BlackCoral,
    fontFamily: "Graphik-Regular",
    fontSize: 12,
    paddingLeft: wp(10),
    fontStyle: "normal",
  },
  currencyView: {
    justifyContent: "center",
    alignItems: "center",
    width: wp(54),
    height: hp(50),
    borderWidth: 0.5,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    alignSelf: "flex-end",
  },
  textArea: {
    borderWidth: 0.5,
    borderColor: Colors.Smoke300,
    paddingTop: hp(15),
    paddingLeft: wp(15),
    fontSize: 12,
    lineHeight: 14,
    color: Colors.BlackCoral,
    fontStyle: "normal",
    borderRadius: 4,
    marginTop: 0,
  },
});

export { Input as TextInput, TextArea };

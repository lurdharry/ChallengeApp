import React from "react";
import Toast from "react-native-root-toast";
import { Dimensions } from "react-native";

const defaultConfig = {
  duration: Toast.durations.LONG,
  position: -50,
  shadow: false,
  animation: false,
  backgroundColor: "grey",
  hideOnPress: true,
  opacity: 0.85,
  textStyle: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Graphik-Regular",
  },
  delay: 0,
  containerStyle: {
    width: Dimensions.get("window").width - 50,
    marginHorizontal: 16,
    borderRadius: 10,
  },
};

const showToast = (message, status) => {
  if (!message) {
    throw new Error("Please input toast message");
  }
  switch (status) {
    case "error":
      defaultConfig.backgroundColor = "#CB2026";
      break;
    case "success":
      defaultConfig.backgroundColor = "#006400";
      break;
    case "info":
      defaultConfig.backgroundColor = "#8F8F8F";
      break;
    default:
      defaultConfig.backgroundColor = "#323643";
  }
  const toast = Toast.show(message, defaultConfig);

  setTimeout(() => {
    Toast.hide(toast);
    clearTimeout(toast);
  }, 3000);
};

export default showToast;

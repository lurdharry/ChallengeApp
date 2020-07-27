import React, { Component } from "react";
import { Animated, Easing, StyleSheet, Vibration, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { wp, hp, RegularText, Button } from "../common";
import * as Colors from "../common/Colors";
import { Ionicons, Entypo } from "@expo/vector-icons";

export default class TransactionStatus extends Component {
  state = {
    primaryWidth: new Animated.Value(wp(56)),
    secondaryWidth: new Animated.Value(wp(83)),
    primaryOpacity: new Animated.Value(1),
    secondaryOpacity: new Animated.Value(1),
  };

  DURATION = 150;

  handleCase = () => {
    const { status, value, retry, message } = this.props;
    const {
      PaGreen,
      PaGreenLight,
      PaGreenLighter,
      PaRed,
      PalePink,
      Coral,
    } = Colors;
    switch (status) {
      case "success":
        return {
          iconName: "md-checkmark",
          colors: [PaGreen, PaGreenLight, PaGreenLighter],
          iconHeight: 24,
          onFinish: [status, value],
          buttonTitle: "Finish",
          tryAgain: null,
        };
      case "failed":
        return {
          iconName: "cross",
          colors: [PaRed, PalePink, Coral],
          iconHeight: 24,
          onFinish: [status, value],
          nextRoute: "",
          buttonTitle: "Try Again",
          tryAgain: retry,
          message,
        };
      default:
        return null;
    }
  };

  componentDidMount() {
    if (this.props.status === "failed") Vibration.vibrate(this.DURATION);
    this.bubble.start();
  }

  componentWillUnmount() {
    this.bubble.stop();
  }

  bubble = Animated.loop(
    Animated.sequence([
      Animated.timing(this.state.primaryWidth, {
        toValue: wp(120),
        // toValue: wp(83),
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.secondaryWidth, {
        toValue: wp(200),
        // toValue: wp(112),
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.secondaryOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.primaryOpacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]),
    {
      iterations: 15,
    }
  );
  buttonHandler = () => {
    const { message } = this.props;
    let status = [];
    if (
      message ===
      // eslint-disable-next-line quotes
      "Sorry you don't have a primary account. Please set up a primary account to continue"
    ) {
      status = [
        "Link A Bank Account",
        () => Actions.account({ type: "reset" }),
      ];
    } else if (message.includes("exceeded") && message.includes("limit")) {
      status = [
        "Upgrade Verification Limit",
        () => Actions.limits_and_verification({ type: "reset" }),
      ];
    } else if (
      message ===
      "Sorry your primary account is currently unavailable. Please try a secondary account"
    ) {
      status = [
        "Try Secondary Account",
        () => Actions.other_banks({ type: "reset" }),
      ];
    } else if (
      message === "Sorry you have insufficient funds for this transaction" ||
      message ===
        "Sorry you do not have sufficient balance to continue transaction." ||
      message === "Sorry you do not have sufficient funds for this transaction"
    ) {
      status = ["Make a Deposit", () => Actions.deposit({ type: "reset" })];
    } else {
      status = ["Try Again", this.props.retry];
    }
    return status;
  };

  render() {
    const data = this.handleCase();
    const {
      primaryOpacity,
      primaryWidth,
      secondaryOpacity,
      secondaryWidth,
    } = this.state;
    const { status, message, retry } = this.props;
    const infoIcon = (
      <View style={styles.infoIcon}>
        <Animated.View
          style={[styles.infoCore, { backgroundColor: data.colors[0] }]}
        >
          {status === "success" ? (
            <Ionicons
              name={data.iconName}
              size={data.iconHeight}
              color={Colors.White}
            />
          ) : (
            <Entypo
              name={data.iconName}
              size={data.iconHeight}
              color={Colors.White}
            />
          )}
        </Animated.View>
        <Animated.View
          style={[
            styles.secondaryCore,
            {
              width: secondaryWidth,
              height: secondaryWidth,
              borderRadius: secondaryWidth, // ._value,
              opacity: secondaryOpacity,
              backgroundColor: data.colors[2],
            },
          ]}
        >
          <Animated.View
            style={[
              styles.primaryCore,
              {
                width: primaryWidth,
                height: primaryWidth,
                borderRadius: primaryWidth, // ._value,
                opacity: primaryOpacity,
                backgroundColor: data.colors[1],
              },
            ]}
          />
        </Animated.View>
      </View>
    );

    return (
      <>
        {/* <StatusBar backgroundColor={Colors.DarkBlue} barStyle="dark-content" /> */}
        <View style={styles.background}>
          {infoIcon}
          <RegularText title={message} style={styles.statusHeaderText} />

          <View style={styles.buttonView}>
            <Button
              title={status === "failed" ? "Retry" : "Finish"}
              buttonStyle={styles.finishButton}
              titleStyle={styles.finishTitle}
              onPress={status === "failed" ? retry : () => Actions.home()}
            />
            {status === "failed" && (
              <Button
                title="Try Later"
                buttonStyle={styles.cancelButton}
                titleStyle={styles.cancelTitle}
                onPress={() => Actions.pop()}
              />
            )}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  paycodeamount: {
    fontSize: hp(14),
    lineHeight: hp(25),
    color: Colors.Grey200,
  },
  code: {
    fontSize: hp(20),
    lineHeight: hp(25),
    fontWeight: "500",
    marginRight: wp(9),
    color: Colors.DarkBlue,
  },
  codeBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: hp(10),
  },
  paycode: {
    marginTop: hp(25),
    fontSize: hp(14),
    color: Colors.Smoke400,
  },
  paycodeBox: {
    height: hp(146),
    backgroundColor: Colors.Snow300,
    borderRadius: hp(5),
    width: wp(271),
    alignItems: "center",
  },
  background: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: Colors.White,
  },
  infoIcon: {
    alignItems: "center",
    justifyContent: "center",
    height: hp(112),
    marginTop: hp(220),
  },
  infoIconpaycode: {
    alignItems: "center",
    justifyContent: "center",
    height: hp(112),
    marginTop: hp(158),
  },
  infoCore: {
    width: wp(56),
    height: wp(56),
    borderRadius: wp(56) / 2,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  },
  primaryCore: {
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryCore: {
    alignItems: "center",
    justifyContent: "center",
  },
  statusHeaderText: {
    fontSize: 18,
    marginTop: hp(50),
    color: Colors.Grey300,
  },
  statusSubText: {
    fontSize: 14,
    color: Colors.Smoke400,
    opacity: 0.7,
    width: wp(250),
    textAlign: "center",
    lineHeight: 25,
  },
  statusSubTextContainer: {
    marginTop: hp(6),
    justifyContent: "center",
    height: hp(78),
  },
  cancelButton: {
    backgroundColor: Colors.PaleRed,
    marginTop: hp(20),
  },
  cancelTitle: {
    color: Colors.DarkRed,
  },
  finishButton: {
    backgroundColor: Colors.PaleBlue,
  },
  buttonView: {
    position: "absolute",
    bottom: hp(70),
  },
  finishTitle: {
    color: Colors.DarkBlue,
  },
});

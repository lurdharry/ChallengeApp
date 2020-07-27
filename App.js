import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store";

import Router from "./src/common/router";
class App extends Component {
  state = {
    dataLoaded: false,
  };
  _loadResourcesAsync = () => {
    return Promise.all([
      Font.loadAsync({
        "Graphik-Bold": require("./src/assets/fonts/Graphik-Bold.ttf"),
        "Graphik-Regular": require("./src/assets/fonts/Graphik-Regular.ttf"),
        "Graphik-Medium": require("./src/assets/fonts/Graphik-Medium.ttf"),
      }),
      Asset.loadAsync([
        require("./src/assets/images/activitylogo.png"),
        require("./src/assets/images/guest.png"),
        require("./src/assets/images/logo.png"),
        require("./src/assets/images/empty.png"),
      ]),
    ]);
  };
  _handleFinishLoading = () => {
    this.setState({ dataLoaded: true });
  };
  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
  render() {
    const { dataLoaded } = this.state;
    if (!dataLoaded) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={this._handleFinishLoading}
          onError={this._handleLoadingError}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SafeAreaView style={{ flex: 1 }}>
              <Router />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      );
    }
  }
}

export default App;

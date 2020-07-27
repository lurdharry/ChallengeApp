import React, { Component } from "react";
import { Alert, AppState, Linking } from "react-native";
import { Router, Scene, Actions, ActionConst } from "react-native-router-flux";
import { Home } from "../screens/home";
import { CreateActivity } from "../screens/createActivity";
import Activity from "../screens/allActivities";
import { Details } from "../screens/activitiy";
import Status from "../screens/actionStatus";
class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="home" component={Home} initial />
          <Scene key="all_activities" component={Activity} />
          <Scene key="create_activity" component={CreateActivity} />
          <Scene key="show_activity" component={Details} />
          <Scene key="result" component={Status} />
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;

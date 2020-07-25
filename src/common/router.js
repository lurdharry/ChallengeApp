import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import * as Colors from "./Colors";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.DarkGreen,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "News App" }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;

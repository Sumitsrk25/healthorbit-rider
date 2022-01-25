/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Screen2 from "../screens/screen2";
import HomeScreen from "../screens/home";
import SignIn from "../screens/signin";
import SignUp from "../screens/signup";
import DocumentScreen from "../screens/document";
import OrderScreen from "../screens/order";
import { DrawerScreens, RouteNames } from "./route_names";
import { AppStateContext } from "../providers/app-state/app-state.provider";

export default function Navigation() {
  const context = React.useContext(AppStateContext);
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={RouteNames.SIGN_IN}
    >
      <Stack.Screen name={RouteNames.HOME} component={HomeScreen} />
      {/* <Stack.Screen name={RouteNames.DOCUMENT} component={DocumentScreen} /> */}
     
      <Stack.Screen name={RouteNames.ORDER} component={ OrderScreen} />
      
      <Stack.Screen name={RouteNames.SIGN_IN} component={SignIn} />
      <Stack.Screen name={RouteNames.SIGN_UP} component={SignUp} />
     
    </Stack.Navigator>
  );
}

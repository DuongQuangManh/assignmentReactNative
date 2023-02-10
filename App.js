import {} from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  BackHandler,
  Alert,
} from "react-native";
import styles from "./App.component.style";
import ScreenSplash from "./components/screen/ScreenSplash";
import ScreenLogin from "./components/screen/ScreenLogin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenRegister from "./components/screen/ScreenRegister";
import MainContainer from "./components/screen/MainContainer";
import React, { useEffect } from "react";

import ScreenProfile from "./components/screen/ScreenProfile";
import ChangePass from "./components/screen/ChangePass";
import Infomation from "./components/screen/Infomation";
import Page from "./components/screen/Page";
import ScreenListUser from "./components/screen/ScreenListUser";
export default function App() {
  const Stack = createNativeStackNavigator();
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go back?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator initialRouteName="LoginApp">
        <Stack.Screen
          name="ScreenSplash"
          options={{ headerShown: false }}
          component={ScreenSplash}
        />
        <Stack.Screen
          name="ScreenLogin"
          options={{ headerShown: false }}
          component={ScreenLogin}
        />
        <Stack.Screen
          name="ScreenRegister"
          options={{ headerShown: false }}
          component={ScreenRegister}
        />
        <Stack.Screen
          name="MainContainer"
          options={{ headerShown: false }}
          component={MainContainer}
        />
        <Stack.Screen
          name="ScreenProfile"
          options={{ headerShown: false }}
          component={ScreenProfile}
        />
        <Stack.Screen name="ChangePass" component={ChangePass} />
        <Stack.Screen name="Infomation" component={Infomation} />
        <Stack.Screen
          name="Page"
          options={{ headerShown: false }}
          component={Page}
        />
        <Stack.Screen name="Danh sách" component={ScreenListUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

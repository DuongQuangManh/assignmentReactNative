import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenProfile from "../ScreenProfile";
import ChangePass from "../ChangePass";
import Infomation from "../Infomation";
import Page from "../Page";

const ScreenProfileContainer = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="ScreenProfile"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name="ScreenProfile" component={ScreenProfile} />
        <Stack.Screen name="ChangePass" component={ChangePass} />
        <Stack.Screen name="Infomation" component={Infomation} />
        <Stack.Screen name="Page" component={Page} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenProfileContainer;

const styles = StyleSheet.create({});

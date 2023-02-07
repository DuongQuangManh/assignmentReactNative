import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenHome from "../screens/ScreenHome";
import ScreenWatch from "../screens/ScreenWatch";
import ScreenNotification from "../screens/ScreenNotification";
import ScreenProfile from "../screens/ScreenProfile";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../contains/colors";
import ChangePass from "../../ChangePass";
import Page from "../../Page";
import Infomation from "../../Infomation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenProfileContainer from "../screens/ScreenProfileContainer";

const MainContainer = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="ScreenHome"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Watch") {
              iconName = focused ? "desktop" : "desktop-outline";
            } else if (route.name === "Notification") {
              iconName = focused
                ? "md-notifications"
                : "md-notifications-outline";
            } else if (route.name === "ScreenProfileContainer") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={ScreenHome} />
        <Tab.Screen name="Watch" component={ScreenWatch} />
        <Tab.Screen name="Notification" component={ScreenNotification} />
        <Tab.Screen
          name="ScreenProfileContainer"
          component={ScreenProfileContainer}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;

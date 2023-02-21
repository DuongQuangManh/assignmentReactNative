import { View, Text, Platform } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenHome from "../../screen/ScreenHome";
import ScreenWatch from "../../screen/ScreenWatch";
import ScreenNotification from "../../screen/ScreenNotification";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../contains/colors";
import ScreenProfile from "../ScreenProfile";
import ScreenSearch from "../ScreenSearch";

const MainContainer = ({ navigation, route }) => {
  console.log(route.params.useID);
  const id = route.params.useID;
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
            } else if (route.name === "Follow") {
              iconName = focused
                ? "md-notifications"
                : "md-notifications-outline";
            } else if (route.name === "ScreenProfile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.blue,
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home">
          {(props) => {
            return (
              <ScreenHome {...props} stackNavigation={navigation} userID={id} />
            );
          }}
        </Tab.Screen>
        <Tab.Screen name="Watch" component={ScreenWatch} />
        <Tab.Screen name="Follow">
          {(props) => {
            return (
              <ScreenNotification
                {...props}
                stackNavigation={navigation}
                userID={id}
              />
            );
          }}
        </Tab.Screen>
        <Tab.Screen name="ScreenProfile">
          {(props) => {
            return (
              <ScreenProfile
                {...props}
                stackNavigation={navigation}
                userID={id}
              />
            );
          }}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;

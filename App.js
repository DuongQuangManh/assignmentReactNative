import {} from "expo-status-bar";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import styles from "./App.component.style";
import ScreenSplash from "./components/ScreenSplash";
import ScreenLogin from "./components/ScreenLogin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenRegister from "./components/ScreenRegister";
import MainContainer from "./components/ScreenMain/MainContainer";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator
        initialRouteName="LoginApp"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ScreenSplash" component={ScreenSplash} />
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} />
        <Stack.Screen name="ScreenRegister" component={ScreenRegister} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { BlurView } from "expo-blur";
import { useFonts } from "expo-font";

const ScreenSplash = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Angeline: require("../../assets/Fonts/Angeline.ttf"),
    Opensans: require("../../assets/Fonts/OpenSans-Medium.ttf"),
    Opensans_Bold: require("../../assets/Fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/bgsplash.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.hello}>
          <Text
            style={{
              fontSize: 60,
              color: "white",
              width: 300,
              fontFamily: "Angeline",
            }}
          >
            Welcome to MyBlog
          </Text>
        </View>
        <BlurView
          intensity={Platform.OS === "ios" ? "20" : "80"}
          style={styles.blur}
        >
          <View style={styles.containerLogin}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ScreenLogin");
              }}
              style={{
                width: "90%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.btnLogin}>
                <Text style={styles.txtbtnLogin}>Login</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "90%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => {
                navigation.navigate("MainContainer");
              }}
            >
              <View style={styles.btnLoginAsGuest}>
                <Text style={styles.txtbtnLoginAsGuest}>Login As Guest</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    </ImageBackground>
  );
};

export default ScreenSplash;

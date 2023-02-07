import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import styles from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import FormInput from "../FormInput";

const ScreenLogin = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <StatusBar
            barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
          />
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name="arrow-back" size={24} color="white" />
                </View>
              </TouchableOpacity>
              <View style={{ position: "absolute", bottom: 30, right: 30 }}>
                <Text
                  style={{ color: "white", fontSize: 35, fontWeight: "bold" }}
                >
                  Login
                </Text>
              </View>
            </View>

            <View style={styles.containeredt}>
              <FormInput placeholder="Email" icon="envelope" />
              <FormInput placeholder="PassWord" icon="key" />
              <TouchableOpacity style={styles.forgotpass}>
                <View>
                  <Text>Forgot Password?</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.containerbtn}>
              <TouchableOpacity
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.navigate("MainContainer");
                }}
              >
                <View style={styles.btn}>
                  <Text style={{ fontSize: 18, color: "white" }}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.containerfooter}>
              <TouchableOpacity
                style={styles.createacc}
                onPress={() => {
                  navigation.navigate("ScreenRegister");
                }}
              >
                <Text>Don't have an account ? </Text>
                <Text style={{ color: "#019375" }}>Register</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ScreenLogin;

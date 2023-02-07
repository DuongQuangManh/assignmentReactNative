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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormInput from "../FormInput";

const ScreenLogin = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
                  Register
                </Text>
              </View>
            </View>
            <KeyboardAwareScrollView>
              <View style={styles.containeredt}>
                <FormInput placeholder="First Name" icon="user" />
                <FormInput placeholder="Last Name" icon="user" />
                <FormInput placeholder="Email" icon="envelope-o" />
                <FormInput placeholder="Sex" icon="intersex" />
                <FormInput placeholder="Date of birth" icon="calendar" />
                <FormInput placeholder="PassWord" icon="key" />
              </View>
              <View style={styles.containerbtn}>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View style={styles.btn}>
                    <Text style={{ fontSize: 18, color: "white" }}>
                      Sign up
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ScreenLogin;

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
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Ionicons from "@expo/vector-icons/Ionicons";
import FormInput from "../../FormInput";
import Loadding from "../../Loadding";

var API = require("../../../src/requestAPI");

var api_url = require("../../../src/requestAPI").api_url;
var emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
var sdtreg = /((09|03|07|08|05)+([0-9]{8})\b)/;

const ScreenLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);
  const password = true;
  const validatte = () => {
    if (email.length == 0 || pass.length == 0) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin !", [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "OK", onPress: () => {} },
      ]);
      return false;
    } else {
      if (emailreg.test(email) === false && sdtreg.test(email) === false) {
        Alert.alert("Lỗi", "Email hoặc số điện thoại không hợp lệ !", [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
          { text: "OK", onPress: () => {} },
        ]);
        return false;
      } else if (pass.length < 8) {
        Alert.alert("Lỗi", "Password phải nhiều hơn hoặc bằng 8 kí tự !", [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel",
          },
          { text: "OK", onPress: () => {} },
        ]);
        return false;
      } else {
        return true;
      }
    }
  };

  const handlerLogin = async () => {
    if (validatte() === true) {
      setIsLoadding(true);
      var acc = await API.getUserByEmail(email);
      console.log(acc);
      if (acc === undefined) {
        setIsLoadding(false);
        Alert.alert(
          "Tài khoản không chính xác",
          "Có vẻ thông tin bạn nhập không thuộc về tài khoản nào cả. Vui lòng kiểm tra và thử lại!",
          [{ text: "OK", onPress: () => {} }]
        );
      } else {
        if (pass !== acc.password) {
          setIsLoadding(false);
          Alert.alert(
            "Mật khẩu không chính xác",
            "Bấm tiếp tục để khôi phục mật khẩu !",
            [
              {
                text: "Huỷ",
                onPress: () => {},
                style: "cancel",
              },
              { text: "Tiếp tục", onPress: () => {} },
            ]
          );
        } else {
          setIsLoadding(false);
          if (acc.lock === true) {
            Alert.alert(
              "Tài khoản của bạn đã bị khoá",
              "Vui lòng liên hệ admin để biết thêm thông tin ?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Ok",
                  onPress: () => {
                    navigation.popToTop();
                  },
                },
              ],
              { cancelable: false }
            );
          } else {
            navigation.navigate("MainContainer", { useID: acc.id });
            setIsLoadding(false);
          }
        }
      }
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="auto" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <StatusBar
              barStyle={
                Platform.OS === "ios" ? "dark-content" : "light-content"
              }
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
                <FormInput
                  placeholder="Email"
                  icon="envelope"
                  getText={setEmail}
                />
                <FormInput
                  placeholder="PassWord"
                  icon="key"
                  getText={setPass}
                  password={true}
                />
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
                  onPress={handlerLogin}
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
      {isLoadding === true ? <Loadding /> : null}
    </>
  );
};

export default ScreenLogin;

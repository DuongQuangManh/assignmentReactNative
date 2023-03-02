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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormInput from "../../FormInput";
import Loadding from "../../Loadding";
var api_url = require("../../../src/requestAPI").api_url;
var emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
var sdtreg = /((09|03|07|08|05)+([0-9]{8})\b)/;
var datereg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
const ScreenLogin = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [date, setDate] = useState("");
  const [pass, setPass] = useState("");
  const [isLoadding, setIsLoadding] = useState(false);
  const user = {
    name: name,
    sex: sex,
    dateofbirth: date,
    address: "",
    job: "",
    acmd: "",
    relastatus: "",
    email: email,
    password: pass,
    image:
      "https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg",
    background:
      "https://img.meta.com.vn/Data/image/2022/02/07/mau-ghi-la-mau-gi-2.jpg",
    lock: false,
    following: [],
    follower: [],
    type: "client",
  };
  const validate = () => {
    if (
      (name.length === 0,
        email.length === 0,
        sex.length === 0,
        date.length === 0,
        pass.length === 0)
    ) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin !", [
        {
          text: "Cancel",
          onPress: () => { },
          style: "cancel",
        },
        { text: "OK", onPress: () => { } },
      ]);
      return false;
    } else {
      if (emailreg.test(email) === false && sdtreg.test(email) === false) {
        Alert.alert("Lỗi", "Email hoặc số điện thoại không hợp lệ !", [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
          { text: "OK", onPress: () => { } },
        ]);
        return false;
      } else if (datereg.test(date) === false) {
        Alert.alert("Lỗi", "Ngày sinh không hợp lệ !", [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
          { text: "OK", onPress: () => { } },
        ]);
        return false;
      } else if (pass.length < 8) {
        Alert.alert("Lỗi", "Password phải nhiều hơn hoặc bằng 8 kí tự !", [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
          { text: "OK", onPress: () => { } },
        ]);
        return false;
      } else if (name.length <= 2 && name.length >= 50) {
        Alert.alert("Lỗi", "Vui lòng nhập chính xác họ tên!", [
          {
            text: "Cancel",
            onPress: () => { },
            style: "cancel",
          },
          { text: "OK", onPress: () => { } },
        ]);
        return false;
      } else {
        return true;
      }
    }
  };
  const getAccountFromApi = (email) => {
    return fetch(api_url + "?email=" + email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => json[0])
      .catch((e) => console.log(e));
  };
  const handleSignUp = async () => {
    if (validate() === true) {
      setIsLoadding(true);
      const a = await getAccountFromApi(email);
      if (a === undefined) {
        fetch(api_url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => {
          if (res.status === 201) {
            setIsLoadding(false);
            alert("Tạo tài khoản thành công !");
          }
        });
      } else {
        setIsLoadding(false);
        Alert.alert("Thông báo", "Email or số điện thoại đã tồn tại !", [
          { text: "OK", onPress: () => { } },
        ]);
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
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
                    Register
                  </Text>
                </View>
              </View>
              <KeyboardAwareScrollView>
                <View style={styles.containeredt}>
                  <FormInput placeholder="Name" icon="user" getText={setName} />
                  <FormInput
                    placeholder="Email or phone number"
                    icon="envelope-o"
                    getText={setEmail}
                  />
                  <FormInput
                    placeholder="Sex"
                    icon="intersex"
                    getText={setSex}
                  />
                  <FormInput
                    placeholder="Date of birth"
                    icon="calendar"
                    getText={setDate}
                  />
                  <FormInput
                    placeholder="PassWord"
                    icon="key"
                    getText={setPass}
                    password={true}
                  />
                </View>
                <View style={styles.containerbtn}>
                  <TouchableOpacity
                    onPress={handleSignUp}
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
      {isLoadding === true ? <Loadding /> : null}
    </>
  );
};

export default ScreenLogin;

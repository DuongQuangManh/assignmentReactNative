import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../contains/colors";
import FormInput from "../../FormInput";

var user = {
  password: "",
};
var API = require("../../../src/requestAPI");
var api_url = API.api_url;
const ChangePass = ({ navigation, route }) => {
  const id = route.params.userID;
  const [acc, setAcc] = useState(user);
  const [passOld, setPassOld] = useState("");
  const [passNew, setPassNew] = useState("");
  const [passNew2, setPassNew2] = useState("");

  console.log(id + "id changepasss");

  const validate = () => {
    if (passOld.length === 0 || passNew.length === 0 || passNew2 === 0) {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin", [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "OK", onPress: () => {} },
      ]);
      return false;
    } else if (passNew.length < 8) {
      Alert.alert("Lỗi", "Mật khẩu phải nhiều hơn hoặc bằng 8 kí tự !", [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "OK", onPress: () => {} },
      ]);
      return false;
    } else if (passNew !== passNew2) {
      Alert.alert("Lỗi", "Mật khẩu mới không trùng khớp !", [
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
  };

  const getAPI = async () => {
    const a = await API.getUserByID(id);
    setAcc(a);
  };
  useEffect(() => {
    getAPI();
  }, []);
  const changePassWord = (id) => {
    const obj = {
      password: passNew,
    };
    fetch(api_url + "/" + id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((res) => {
      if (res.status === 200) {
        alert("Đổi mật khẩu thành công");
      }
    });
  };
  const handlerChange = () => {
    if (validate()) {
      changePassWord(id);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FormInput
          placeholder="Mật khẩu hiện tại"
          icon="clock-o"
          getText={setPassOld}
          password={true}
        />
        <FormInput
          placeholder="Mật khẩu mới"
          icon="key"
          getText={setPassNew}
          password={true}
        />
        <FormInput
          placeholder="Nhập lại mật khẩu mới"
          icon="key"
          getText={setPassNew2}
          password={true}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
          onPress={handlerChange}
        >
          <View style={styles.button}>
            <Text style={styles.textbtn}>Cập nhật mật khẩu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <View style={styles.button}>
            <Text style={styles.textbtn}>Huỷ</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePass;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? "10%" : 0,
    backgroundColor: colors.background,
  },
  body: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: colors.blue,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  textbtn: {
    fontFamily: "Opensans_Bold",
    fontSize: 15,
    color: "white",
  },
});

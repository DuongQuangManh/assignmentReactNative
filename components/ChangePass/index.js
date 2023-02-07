import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../contains/colors";
import FormInput from "../FormInput";
const ChangePass = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            width: 40,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FormInput placeholder="Mật khẩu hiện tại" icon="clock-o" />
        <FormInput placeholder="Mật khẩu mới" icon="key" />
        <FormInput placeholder="Nhập lại mật khẩu mới" icon="key" />
        <TouchableOpacity
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
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
  header: {
    width: "100%",
    height: "8%",
    backgroundColor: "white",
  },
  body: {
    flex: 1,
    alignItems: "center",
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

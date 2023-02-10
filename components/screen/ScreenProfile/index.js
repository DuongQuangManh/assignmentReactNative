import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React from "react";
import colors from "../../../contains/colors";
import Hr from "../../Hr";
import styles from "./style";
const ScreenProfile = ({ stackNavigation, userID }) => {
  console.log("id client: " + userID);
  const id = userID;
  const handlerLogOut = () => {
    return Alert.alert(
      "Logout",
      "Are you sure? You want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            stackNavigation.replace("ScreenSplash");
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <View style={styles.header}>
        <Text style={styles.labelheader}>Menu</Text>
      </View>
      <ScrollView style={styles.footer}>
        <Text style={styles.labelbody}>Profile</Text>
        <Hr />
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            stackNavigation.navigate(
              id.length === 0 ? "ScreenLogin" : "Page",
              id.length === 0
                ? null
                : {
                    userID: id,
                  }
            );
          }}
        >
          <View style={styles.page}>
            <Image
              borderRadius={180}
              source={
                id.length === 0
                  ? {
                      uri: "https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-dang-loading-troll_093250951.jpg",
                    }
                  : require("../../../assets/avt.png")
              }
              style={{
                width: 50,
                height: 50,
                borderColor: colors.background,
                borderWidth: 1,
              }}
            />
            <Text
              style={{
                fontFamily: "Opensans_Bold",
                fontSize: 17,
                marginStart: 10,
              }}
            >
              {id.length === 0 ? "Chưa đăng nhập" : "Dương Quang Mạnh"}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.setting}>
          <Text style={styles.labelbody}>Setting</Text>
          <Hr />
          <TouchableOpacity
            onPress={() => {
              stackNavigation.navigate("ChangePass");
            }}
          >
            <View style={styles.chucnang}>
              <Text style={styles.label}>Đổi mật khẩu</Text>
            </View>
          </TouchableOpacity>

          <Hr />
          <TouchableOpacity onPress={handlerLogOut}>
            <View style={styles.chucnang}>
              <Text style={styles.label}>Đăng xuất</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ScreenProfile;

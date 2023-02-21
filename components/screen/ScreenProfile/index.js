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
import React, { useEffect, useState } from "react";
import colors from "../../../contains/colors";
import Hr from "../../Hr";
import styles from "./style";
var API = require("../../../src/requestAPI");
var info = {
  image:
    "https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-dang-loading-troll_093250951.jpg",
  name: "",
  type: "",
};
const ScreenProfile = ({ stackNavigation, userID }) => {
  console.log("id client: " + userID);
  const id = userID;
  const [acc, setAcc] = useState(info);

  const getAPI = async () => {
    const a = await API.getUserByID(id);
    setAcc(a);
  };

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
            stackNavigation.popToTop();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const handlerToPage = () => {
    stackNavigation.navigate("Page", {
      userID: id,
    });
  };
  const handlerLogin = () => {
    Alert.alert(
      "Bạn chưa đăng nhập",
      "Đăng nhập để đăng bài viết ?",
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
            stackNavigation.popToTop();
          },
        },
      ],
      { cancelable: false }
    );
  };
  useEffect(() => {
    if (userID.length !== 0) {
      getAPI();
    }
  }, []);
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
          onPress={id.length === 0 ? handlerLogin : handlerToPage}
        >
          <View style={styles.page}>
            <Image
              borderRadius={180}
              source={
                id.length === 0
                  ? {
                      uri: "https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-dang-loading-troll_093250951.jpg",
                    }
                  : { uri: acc.image }
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
              {id.length === 0 ? "Chưa đăng nhập" : acc.name}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.setting}>
          <Text style={styles.labelbody}>Setting</Text>
          <Hr />
          {acc.type === "admin" && (
            <TouchableOpacity
              onPress={() => {
                stackNavigation.navigate("ScreenManager", { userID: id });
              }}
            >
              <View style={styles.chucnang}>
                <Text style={styles.label}>Quản lý người dùng</Text>
              </View>
            </TouchableOpacity>
          )}

          <Hr />
          <TouchableOpacity
            onPress={() => {
              stackNavigation.navigate("ChangePass", { userID: id });
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

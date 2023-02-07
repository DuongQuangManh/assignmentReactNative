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
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import colors from "../../../../contains/colors";
import Hr from "../../../Hr";
const ScreenProfile = ({ navigation }) => {
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Platform.OS === "ios" ? "10%" : 0,
          backgroundColor: colors.background,
        },
      ]}
    >
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: colors.blue,
            fontFamily: "Opensans_Bold",
          }}
        >
          Menu
        </Text>
      </View>
      <ScrollView style={styles.footer}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "Opensans_Bold",
            padding: 5,
            color: "gray",
          }}
        >
          Profile
        </Text>
        <Hr />
        <TouchableOpacity
          style={{ width: "100%" }}
          onPress={() => {
            navigation.navigate("Page");
          }}
        >
          <View style={styles.page}>
            <Image
              borderRadius={180}
              source={require("../../../../assets/avt.png")}
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
              Dương Quang Mạnh
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.setting}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Opensans_Bold",
              padding: 5,
              color: "gray",
            }}
          >
            Setting
          </Text>
          <Hr />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Infomation");
            }}
          >
            <View style={styles.chucnang}>
              <Text style={styles.label}>Thông tin cá nhân</Text>
            </View>
          </TouchableOpacity>
          <Hr />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ChangePass");
            }}
          >
            <View style={styles.chucnang}>
              <Text style={styles.label}>Đổi mật khẩu</Text>
            </View>
          </TouchableOpacity>

          <Hr />
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
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
                      navigation.replace("ScreenLogin");
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          >
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

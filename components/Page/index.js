import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
} from "react-native";
import React from "react";
import colors from "../../contains/colors";
import Hr from "../Hr";
import ItemFlatlist from "../ItemFlatlist";
import { Ionicons } from "@expo/vector-icons";
const Page = ({ navigation }) => {
  const data = [
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
  ];
  const renderFlat = () => {
    return data.map((item, index) => (
      <ItemFlatlist iduser={item.name} idstatus={item.name} key={index} />
    ));
  };
  return (
    <View
      style={[
        styles.container,
        { paddingTop: Platform.OS === "ios" ? "10%" : 0 },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            width: 50,
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
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Opensans_Bold",
            fontSize: 16,
          }}
        >
          Dương Quang Mạnh
        </Text>
      </View>
      <ScrollView>
        <View style={styles.img}>
          <Image
            style={styles.background}
            source={require("../../assets/bgsplash.jpg")}
          />
          <Image
            style={styles.avatar}
            source={require("../../assets/avt.png")}
          />
        </View>
        <View style={styles.nameandfollower}>
          <Text style={{ fontFamily: "Opensans_Bold", fontSize: 22 }}>
            Duong Quang Manh
          </Text>
          <Text
            style={{ fontFamily: "Opensans_Bold", fontSize: 15, marginTop: 10 }}
          >
            123 triệu
            <Text style={{ fontFamily: "Opensans", color: "gray" }}>
              {" "}
              người theo dõi
            </Text>
          </Text>
        </View>
        <View style={styles.postandstatus}>
          <Hr />
          <Text
            style={{ fontFamily: "Opensans_Bold", fontSize: 18, marginTop: 10 }}
          >
            Bài viết của bạn
          </Text>
          <TouchableOpacity>
            <View style={styles.poststatus}>
              <Image
                source={require("../../assets/avt.png")}
                style={{ width: 50, height: 50, borderRadius: 180 }}
              />
              <Text
                style={{
                  fontFamily: "Opensans",
                  color: "gray",
                  marginStart: 10,
                }}
              >
                Bạn đang nghĩ gì
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              marginTop: 10,
              backgroundColor: colors.background,
            }}
          >
            {renderFlat()}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
  },
  img: {
    width: "100%",
    height: 250,
    backgroundColor: "white",
    position: "relative",
  },
  background: {
    width: "100%",
    height: "85%",
    backgroundColor: "red",
    position: "absolute",
    top: 0,
  },
  avatar: {
    width: 150,
    height: 150,
    backgroundColor: "yellow",
    position: "absolute",
    bottom: 0,
    left: 15,
    borderRadius: 180,
    borderColor: "white",
    borderWidth: 5,
  },
  nameandfollower: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    padding: 10,
  },
  postandstatus: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
  },
  poststatus: {
    width: "100%",
    height: 70,
    alignItems: "center",
    paddingStart: 10,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: colors.background,
    marginTop: 10,
  },
});

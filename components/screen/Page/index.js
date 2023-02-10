import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../../contains/colors";
import Hr from "../../Hr";
import ItemPost from "../../ItemPost";
import { Ionicons } from "@expo/vector-icons";
import ItemInfo from "../../ItemInfo";
import { Entypo } from "@expo/vector-icons";

var API = require("../../../src/requestAPI");
const Page = ({ navigation, route }) => {
  const userID = route.params.userID;
  const [acc, setAcc] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [follower, setFler] = useState([]);
  const [following, setFling] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getUser();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handlerShowFollower = () => {
    navigation.navigate("Danh sách", { uID: userID, type: "follower" });
  };
  const handlerShowFollowing = () => {
    navigation.navigate("Danh sách", { uID: userID, type: "following" });
  };

  console.log("page: " + userID);
  const data = [
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
    { name: "abc" },
  ];

  const getUser = async () => {
    const a = await API.getUserByID(userID);
    setAcc(a);
    setFler(a.follower);
    setFling(a.following);
    console.log("đây là log acc" + a.follower.length);
  };

  useEffect(() => {
    getUser();
  }, []);

  const renderFlat = () => {
    return data.map((item, index) => (
      <ItemPost iduser={item.name} idstatus={item.name} key={index} />
    ));
  };
  console.log("abc");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.textHeader}>{acc.name}</Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.img}>
          <Image style={styles.background} source={{ uri: acc.background }} />
          <Image style={styles.avatar} source={{ uri: acc.image }} />
        </View>
        <View style={styles.nameandfollower}>
          <Text style={{ fontFamily: "Opensans_Bold", fontSize: 22 }}>
            {acc.name}
          </Text>
          <View style={styles.containerFollow}>
            <TouchableOpacity onPress={handlerShowFollower}>
              <Text style={styles.textfl}>
                {follower.length}
                <Text style={styles.textgray}> người theo dõi</Text>
              </Text>
            </TouchableOpacity>
            <Entypo name="dot-single" size={24} color="black" />
            <TouchableOpacity onPress={handlerShowFollowing}>
              <Text style={styles.textfl}>
                {following.length}
                <Text style={styles.textgray}> đang theo dõi</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.infodetail}>
          <Text style={styles.labelLarge}>Chi tiết</Text>
          <ItemInfo
            icon="briefcase"
            label="Đang làm việc tại"
            content={acc.job}
          />
          <ItemInfo icon="home" label="Sống tại" content={acc.acmd} />
          <ItemInfo icon="location-pin" label="Đến từ" content={acc.address} />
          <ItemInfo icon="heart" label="" content={acc.relastatus} />
          <TouchableOpacity>
            <View style={styles.btnEdit}>
              <ItemInfo
                icon="edit"
                label="Chỉnh sửa trang cá nhân"
                content=""
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.postandstatus}>
          <Hr />
          <Text style={styles.labelLarge}>Bài viết của bạn</Text>
          <TouchableOpacity>
            <View style={styles.poststatus}>
              <Image
                source={require("../../../assets/avt.png")}
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
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Platform.OS === "ios" ? "10%" : 0,
  },
  header: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
  },
  btnBack: {
    width: 50,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    alignSelf: "center",
    fontFamily: "Opensans_Bold",
    fontSize: 16,
  },
  img: {
    width: "100%",
    height: 250,
    backgroundColor: "white",
    position: "relative",
  },
  infodetail: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
  },
  background: {
    width: "100%",
    height: "85%",
    backgroundColor: "gray",
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
  labelLarge: {
    fontFamily: "Opensans_Bold",
    fontSize: 18,
  },
  btnEdit: {
    width: "100%",
    height: 40,
    backgroundColor: "#e8f3ff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  containerFollow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textfl: {
    fontFamily: "Opensans_Bold",
    fontSize: 15,
  },
  textgray: {
    fontFamily: "Opensans",
    color: "gray",
  },
});

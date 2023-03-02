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
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import colors from "../../../contains/colors";
import Hr from "../../Hr";
import ItemPost from "../../ItemPost";
import { Ionicons } from "@expo/vector-icons";
import ItemInfo from "../../ItemInfo";
import { Entypo } from "@expo/vector-icons";
import styles from "./style";
var user = {
  name: "",
  address: "",
  acmd: "",
  job: "",
  relastatus: "",
  follower: [],
  following: [],
};
var API = require("../../../src/requestAPI");

const Page = ({ navigation, route }) => {
  const userID = route.params.userID;
  const [acc, setAcc] = useState(user);
  const [refreshing, setRefreshing] = useState(false);
  const [follower, setFler] = useState([]);
  const [following, setFling] = useState([]);
  const [data, setData] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getUser();
    getPost();
  }, []);

  const getPost = async () => {
    const a = await API.getAllPostByID(userID);
    setData(a);
    setRefreshing(false);
  };
  const handlerShowFollower = () => {
    navigation.navigate("Danh sách", { uID: userID, type: "follower" });
  };
  const handlerShowFollowing = () => {
    navigation.navigate("Danh sách", { uID: userID, type: "following" });
  };
  const getUser = async () => {
    const a = await API.getUserByID(userID);
    setAcc(a);
    setFler(a.follower);
    setFling(a.following);
  };

  const handlerEditProfile = () => {
    navigation.navigate("Chỉnh sửa trang cá nhân", { uID: userID });
  };
  useEffect(() => {
    getUser();
    getPost();
  }, [isChange]);

  const handlerLike = async (id) => {
    console.log("đây là id bài viết được like: " + id);
    console.log("Đây là người thích bài viết: " + userID);
    API.getPostByID(id)
      .then((a) => {
        const isLike = a.likes.includes(userID);
        return isLike === false
          ? [...a.likes, userID]
          : a.likes.filter((id) => id !== userID);
      })
      .then((like) => {
        const obj = {
          likes: like,
        };
        fetch(API.api_urlpost + "/" + id, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }).then((res) => {
          if (res.status === 200) {
            setIsChange(!isChange);
          }
        });
      });
  };

  const handlerPost = () => {
    if (acc.type === "admin") {
      navigation.navigate("ScreenPost", { uID: userID });
    } else {
      Alert.alert("Thông báo", "Chỉ admin với được đăng bài!", [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "OK", onPress: () => {} },
      ]);
    }
  };
  const renderFlat = () => {
    return data.map((item, index) => (
      <ItemPost item={item} key={index} actionLike={handlerLike} uID={userID} />
    ));
  };
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
            label={acc.job.length === 0 ? "Nơi làm việc" : "Đang làm việc tại"}
            content={acc.job}
          />
          <ItemInfo
            icon="home"
            label={
              acc.acmd.length === 0 ? "Tỉnh/Thành phố hiện tại" : "Sống tại"
            }
            content={acc.acmd}
          />
          <ItemInfo
            icon="location-pin"
            label={acc.address.length === 0 ? "Quê quán" : "Đến từ"}
            content={acc.address}
          />
          <ItemInfo
            icon="heart"
            label={
              acc.relastatus.length === 0
                ? "Tình trạng mối quan hệ"
                : acc.relastatus
            }
            content=""
          />
          <TouchableOpacity onPress={handlerEditProfile}>
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
          <TouchableOpacity onPress={handlerPost}>
            <View style={styles.poststatus}>
              <Text>Bạn đang nghĩ gì</Text>
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

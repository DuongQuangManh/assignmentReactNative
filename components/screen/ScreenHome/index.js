import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Alert,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import ItemPost from "../../ItemPost";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";

var API = require("../../../src/requestAPI");
var ob = {
  image:
    "https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-dang-loading-troll_093250951.jpg",
  type: "",
};
const ScreenHome = ({ stackNavigation, userID }) => {
  const [data, setData] = useState([]);
  const [acc, setAcc] = useState(ob);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAPI();
  }, []);
  const AnimatedHeaderValue = new Animated.Value(0);

  const diffClamp = Animated.diffClamp(
    AnimatedHeaderValue,
    0,
    Platform.OS === "ios" ? 270 : 70
  );
  const translateY = diffClamp.interpolate({
    inputRange: [0, Platform.OS === "ios" ? 270 : 70],
    outputRange: [0, Platform.OS === "ios" ? -270 : -70],
  });

  const handlerSearch = () => {
    stackNavigation.navigate("ScreenSearch", { uID: userID });
  };

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
            getAPI();
          }
        });
      });
  };

  const handlerCmt = (item) => {
    console.log(item);
    stackNavigation.navigate("Comment", { cmt: item, uID: userID });
  };
  const renderFlat = () => {
    return data.map((item, index) => (
      <ItemPost
        item={item}
        key={index}
        actionLike={handlerLike}
        uID={userID}
        actionComment={handlerCmt}
      />
    ));
  };

  const getAPI = async () => {
    const a = await API.getAllPost();
    setData(a);
    const user = await API.getUserByID(userID);
    setAcc(user);
    setRefreshing(false);
  };

  useEffect(() => {
    const unsubscribe = stackNavigation.addListener("focus", () => {
      getAPI();
    });

    return unsubscribe;
  }, [stackNavigation]);

  useEffect(() => {
    getAPI();
  }, []);
  const handlerPost = () => {
    if (acc.type === "admin") {
      stackNavigation.navigate("ScreenPost", { uID: userID });
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

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 70 : 0,
        backgroundColor: "white",
      }}
    >
      <Animated.View
        style={[
          {
            width: "100%",
            height: 70,
            position: "absolute",
            top: Platform.OS === "ios" ? 70 : 0,
            right: 0,
            left: 0,
            elevation: 4,
            zIndex: 100,
          },
          { transform: [{ translateY: translateY }] },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.label}>MyBlog</Text>
          <TouchableOpacity onPress={handlerSearch}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.containercontent}
        onScroll={(e) => {
          AnimatedHeaderValue.setValue(e.nativeEvent.contentOffset.y);
        }}
      >
        <TouchableOpacity
          onPress={userID.length === 0 ? handlerLogin : handlerPost}
        >
          <View style={styles.poststatus}>
            <Image
              source={{
                uri:
                  userID.length === 0
                    ? "https://img6.thuthuatphanmem.vn/uploads/2022/11/18/anh-dang-loading-troll_093250951.jpg"
                    : acc.image,
              }}
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
        {renderFlat()}
      </ScrollView>
    </View>
  );
};

export default ScreenHome;

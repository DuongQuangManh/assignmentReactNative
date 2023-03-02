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
  const [isChange, setIsChange] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getAPI();
    getUser();
  }, []);
  const handlerSearch = () => {
    stackNavigation.navigate("ScreenSearch", { uID: userID });
  };

  const handlerLike = async (id) => {
    API.getPostByID(id)
      .then((a) => {
        const isLike = a.likes.includes(userID);
        return isLike === false
          ? [...a.likes, userID]
          : a.likes.filter((id) => {
              return id !== userID;
            });
      })
      .then((like) => {
        console.log(like + "đây là mảng likes");
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

  const handlerCmt = (item) => {
    console.log(item);
    stackNavigation.navigate("Comment", { cmt: item, uID: userID });
  };

  const getAPI = async () => {
    const a = await API.getAllPost();
    setData(a);
    setRefreshing(false);
  };

  const getUser = async () => {
    const user = await API.getUserByID(userID);
    setAcc(user);
  };

  useEffect(() => {
    const unsubscribe = stackNavigation.addListener("focus", () => {
      getAPI();
      getUser();
    });

    return unsubscribe;
  }, [stackNavigation]);

  useEffect(() => {
    getAPI();
    getUser();
  }, [isChange]);
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
      <View
        style={[
          {
            width: "100%",
            height: 70,
            zIndex: 100,
          },
        ]}
      >
        <View style={styles.header}>
          <Text style={styles.label}>MyBlog</Text>
          <TouchableOpacity onPress={handlerSearch}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
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
      </View>
      <View style={styles.containercontent}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data}
          renderItem={({ item }) => {
            return (
              <ItemPost
                item={item}
                actionLike={handlerLike}
                uID={userID}
                actionComment={handlerCmt}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ScreenHome;

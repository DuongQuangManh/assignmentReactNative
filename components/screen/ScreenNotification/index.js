import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import ItemNotifi from "../../ItemNotifi";
import ItemPost from "../../ItemPost";

var API = require("../../../src/requestAPI");
const ScreenNotification = ({ stackNavigation, userID }) => {
  const [data, setData] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const getAPI = async () => {
    console.log("A");
    const user = await API.getUserByID(userID);
    console.log(user);
    const a = await API.getPostByArrID(user.following);
    setData(a);
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
            setIsChange(!isChange);
          }
        });
      });
  };

  useEffect(() => {
    if (userID.length !== 0) {
      getAPI();
    }
  }, [isChange]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Platform.OS === "ios" ? "10%" : 0,
          backgroundColor: "white",
        },
      ]}
    >
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: colors.blue,
            fontFamily: "Opensans_Bold",
          }}
        >
          Follow
        </Text>
      </View>
      <View style={styles.contents}>
        <FlatList
          style={{ color: colors.background }}
          data={data}
          renderItem={({ item }) => {
            return (
              <ItemPost item={item} actionLike={handlerLike} uID={userID} />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ScreenNotification;

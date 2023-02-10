import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import colors from "../../../contains/colors";
import ItemNotifi from "../../ItemNotifi";

const ScreenNotification = () => {
  const listNotification = [
    {
      name: "Dương Quang Mạnh",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "19 giờ",
    },
    {
      name: "Lionel Messi",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "12 giờ",
    },
    {
      name: "Lautaro Maztinez",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "7 giờ",
    },
    {
      name: "Park Hang-seo",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "vừa xong",
    },
    {
      name: "Dương Quang Mạnh",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "19 giờ",
    },
    {
      name: "Lionel Messi",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "12 giờ",
    },
    {
      name: "Lautaro Maztinez",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "7 giờ",
    },
    {
      name: "Park Hang-seo",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "vừa xong",
    },
    {
      name: "Dương Quang Mạnh",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "19 giờ",
    },
    {
      name: "Lionel Messi",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "12 giờ",
    },
    {
      name: "Lautaro Maztinez",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "7 giờ",
    },
    {
      name: "Park Hang-seo",
      content: "đã nhắc đến bạn trong một bình luận",
      time: "vừa xong",
    },
  ];
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
          Notification
        </Text>
      </View>
      <View style={styles.contents}>
        <FlatList
          style={{ color: colors.background }}
          data={listNotification}
          renderItem={({ item }) => {
            return (
              <ItemNotifi
                name={item.name}
                content={item.content}
                time={item.time}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ScreenNotification;

import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import styles from "./style";
import colors from "../../../../contains/colors";
import ItemWatch from "../../../ItemWatch";
const ScreenWacth = () => {
  const data = [
    { link: "7UuWz1kVSh8" },
    { link: "VyAxDLPrQy0" },
    { link: "gnLqXNPj_dA" },
  ];
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
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            color: colors.blue,
            fontFamily: "Opensans_Bold",
          }}
        >
          Watch
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <ItemWatch link={item.link} />;
        }}
        style={{ padding: 2 }}
      />
    </View>
  );
};

export default ScreenWacth;

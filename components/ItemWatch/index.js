import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
const ItemWatch = (props) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          height: 20,
          fontSize: 17,
          fontFamily: "Opensans_Bold",
        }}
      >
        YouTube
      </Text>
      <View style={styles.ytb}>
        <YoutubePlayer
          width={"100%"}
          height={300}
          play={false}
          videoId={props.link}
        />
      </View>
      <View
        style={{ width: "100%", marginTop: Platform.OS === "ios" ? 20 : 5 }}
      >
        <Text
          style={{
            width: 110,
            height: 20,
            fontSize: 13,
            fontFamily: "Opensans",
            alignSelf: "flex-end",
          }}
        >
          Nguồn: Youtube
        </Text>
      </View>
    </View>
  );
};

export default ItemWatch;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 15,
  },
  ytb: {
    width: "100%",
    height: 218,
    marginTop: 10,
  },
});
